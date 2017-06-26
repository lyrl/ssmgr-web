import React from 'react';
import agent from '../agent';
import {LOGOUT, NOTIFIER_NOTIFICATION} from '../constants/actionTypes';
import { connect } from 'react-redux';
import MainLayout from '../layout/main';

const mapStateToProps = state => ({
  appLoaded: state.common.appLoaded,
  appName: state.common.appName,
  currentUser: state.common.currentUser,
  redirectTo: state.common.redirectTo
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: 'APP_LOAD', payload, token }),
  onRedirect: () =>
    dispatch({ type: 'REDIRECT' }),
  onMessage: (message) => {
      dispatch({type: NOTIFIER_NOTIFICATION, message})
  }
});

class App extends React.Component {
  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }

    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      this.context.router.replace(nextProps.redirectTo);
      this.props.onRedirect();
    }

    if (nextProps.currentUser && !this.props.currentUser) {
        this.props.onMessage(`${nextProps.currentUser.user_name}，欢迎回来！`);
    }

    if (!nextProps.currentUser) {
        this.context.router.replace('/login');
        this.props.onRedirect();
    }
  }

  render() {
    return (
        <MainLayout>
            {this.props.children}
        </MainLayout>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
