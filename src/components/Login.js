import React from 'react';
import { connect } from 'react-redux';
import agent from '../agent';
import ListErrors from './ListErrors';
import {
    UPDATE_FIELD_AUTH,
    REGISTER,
    REGISTER_PAGE_UNLOADED,
    LOGIN_PAGE_UNLOADED,
    LOGIN
} from '../constants/actionTypes';


const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onChangechangeUserName: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'user_name', value }),
  onChangePassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onSubmit: (user_name, password) =>
    dispatch({ type: LOGIN, payload: agent.Auth.login(user_name, password) }),
  onUnload: () =>
    dispatch({ type: LOGIN_PAGE_UNLOADED })
});

class Login extends React.Component {
  constructor() {
    super();
    this.changeUserName = ev => this.props.onChangechangeUserName(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.submitForm = (user_name, password) => ev => {
      ev.preventDefault();
      this.props.onSubmit(user_name, password);
    };

  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const user_name = this.props.user_name;
    const password = this.props.password;
    return (

        <div className="container">
          <form className="form-signin" onSubmit={this.submitForm(user_name, password)} style={{maxWidth: 400, margin: "0 auto", marginTop: 100}}>
              <ListErrors errors={this.props.errors} />
              <h2 className="form-signin-heading">登录</h2>

            <div style={{margin: '10px 0 10px 0'}}>
              <label htmlFor="inputUserName" className="sr-only">用户名</label>
              <input type="text" id="inputUserName" value={this.props.username} onChange={this.changeUserName} className="form-control" placeholder="用户名" required autofocus />
            </div>

            <div style={{margin: '0 0 10px 0'}}>
              <label htmlFor="inputPassword" className="sr-only">密码</label>
              <input type="password" id="inputPassword" value={this.props.password} onChange={this.changePassword} className="form-control" placeholder="密码" required autofocus />
            </div>

            <button className="btn btn-lg btn-primary btn-block" disabled={this.props.inProgress} type="submit">提交</button>
          </form>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
