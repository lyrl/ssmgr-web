import React from 'react';
import Jumbotron from '../Jumbotron';
import agent from '../../agent';
import { connect } from 'react-redux';
import ProductContainer from './Product'

const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onClickTag: (tag, payload) =>
    dispatch({ type: 'APPLY_TAG_FILTER', tag, payload }),
  onLoad: (tab, payload) =>
    dispatch({ type: 'HOME_PAGE_LOADED', tab, payload }),
  onUnload: () =>
    dispatch({  type: 'HOME_PAGE_UNLOADED' })
});

class Home extends React.Component {
  componentWillMount() {
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
        <div>
          <Jumbotron/>
          <ProductContainer />
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
