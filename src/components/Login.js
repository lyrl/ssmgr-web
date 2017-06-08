import { Link } from 'react-router';
import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  // onChangeEmail: value =>
  //   dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'email', value }),
  // onChangePassword: value =>
  //   dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'password', value }),
  // onSubmit: (email, password) =>
  //   dispatch({ type: 'LOGIN', payload: agent.Auth.login(email, password) }),
  // onUnload: () =>
  //   dispatch({ type: 'LOGIN_PAGE_UNLOADED' })
});

class Login extends React.Component {
  constructor() {
    super();
    // this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    // this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    // this.submitForm = (email, password) => ev => {
    //   ev.preventDefault();
    //   this.props.onSubmit(email, password);
    // };
  }

  componentWillUnmount() {
    // this.props.onUnload();
  }

  render() {
    const email = this.props.email;
    const password = this.props.password;
    return (
      <div>login form</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
