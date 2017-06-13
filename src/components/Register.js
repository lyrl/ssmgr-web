import { Link } from 'react-router';
import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
    UPDATE_FIELD_AUTH,
    REGISTER,
    REGISTER_PAGE_UNLOADED
} from '../constants/actionTypes';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onChangeRepeatPassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'repeatPassword', value }),
  onChangeUsername: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'username', value }),
  onSubmit: (username, email, password, repeatPassword) => {
    const payload = agent.Auth.register(username, email, password, repeatPassword);
    dispatch({ type: REGISTER, payload })
  },
  onUnload: () =>
    dispatch({ type: REGISTER_PAGE_UNLOADED })
});

class Register extends React.Component {
  constructor() {
    super();

    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.changeRepeatPassword = ev => this.props.onChangeRepeatPassword(ev.target.value);
    this.changeUsername = ev => this.props.onChangeUsername(ev.target.value);

    this.submitForm = (username, email, password, repeatPassword) => ev => {
      ev.preventDefault();
      this.props.onSubmit(username, email, password, repeatPassword);
    }
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const username = this.props.username;
    const password = this.props.password;
    const repeatPassword = this.props.repeatPassword;
    const email = this.props.email;

    return (

        <div className="container">


          <form className="form-signin" onSubmit={this.submitForm(username, email, password, repeatPassword)} style={{maxWidth: 400, margin: "0 auto", marginTop: 100}}>

            <ListErrors errors={this.props.errors} />

            <h2 className="form-signin-heading">注册</h2>

            <div style={{margin: '10px 0 10px 0'}}>
              <label htmlFor="inputUserName" className="sr-only">用户名</label>
              <input type="text" id="inputUserName" value={this.props.username} onChange={this.changeUsername} className="form-control" placeholder="用户名" required autofocus />
            </div>

            <div style={{margin: '0 0 10px 0'}}>
              <label htmlFor="inputPassword" className="sr-only">密码</label>
              <input type="password" id="inputPassword" value={this.props.password} onChange={this.changePassword} className="form-control" placeholder="密码" required autofocus />
            </div>

            <div className="" style={{margin: '0 0 10px 0'}}>
              <label htmlFor="inputRepeatPassword" className="sr-only">确认密码</label>
              <input type="password" id="inputRepeatPassword" value={this.props.repeatPassword} onChange={this.changeRepeatPassword} className="form-control" placeholder="确认密码" required autofocus />
            </div>

            <div style={{margin: '0 0 10px 0'}}>
              <label htmlFor="inputEmail" className="sr-only">邮箱</label>
              <input type="email" id="inputEmail" value={this.props.email} onChange={this.changeEmail} className="form-control" placeholder="邮箱" required />
            </div>
            <button className="btn btn-lg btn-primary btn-block" disabled={this.props.inProgress} type="submit">提交</button>
          </form>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
