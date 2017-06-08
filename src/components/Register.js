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
  // onChangeUsername: value =>
  //   dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'username', value }),
  // onSubmit: (username, email, password) => {
  //   const payload = agent.Auth.register(username, email, password);
  //   dispatch({ type: 'REGISTER', payload })
  // },
  // onUnload: () =>
  //   dispatch({ type: 'REGISTER_PAGE_UNLOADED' })
});

class Register extends React.Component {
  constructor() {
    super();
    // this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    // this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    // this.changeUsername = ev => this.props.onChangeUsername(ev.target.value);
    // this.submitForm = (username, email, password) => ev => {
    //   ev.preventDefault();
    //   this.props.onSubmit(username, email, password);
    // }
  }

  componentWillUnmount() {
    // this.props.onUnload();
  }

  render() {
    const email = this.props.email;
    const password = this.props.password;
    const username = this.props.username;

    return (
        <div className="container">
          <form className="form-signin" style={{maxWidth: 400, margin: "0 auto"}}>
            <h2 className="form-signin-heading">注册</h2>

            <div style={{margin: '10px 0 10px 0'}}>
              <label for="inputUserName" className="sr-only">用户名</label>
              <input type="text" id="inputUserName" className="form-control" placeholder="用户名" required autofocus />
            </div>

            <div style={{margin: '0 0 10px 0'}}>
              <label for="inputPassword" className="sr-only">密码</label>
              <input type="password" id="inputPassword" className="form-control" placeholder="密码" required autofocus />
            </div>

            <div className="" style={{margin: '0 0 10px 0'}}>
              <label for="inputRepeatPassword" className="sr-only">确认密码</label>
              <input type="password" id="inputRepeatPassword" className="form-control" placeholder="确认密码" required autofocus />
            </div>
          
            <div style={{margin: '0 0 10px 0'}}>
              <label for="inputEmail" className="sr-only">邮箱</label>
              <input type="email" id="inputEmail" className="form-control" placeholder="邮箱" required />
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">提交</button>
          </form>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
