'use strict';

import { Link } from 'react-router';
import React from 'react';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
        <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
                <li className="active"><a href="#">主页</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="register">注册</Link></li>
                <li><Link to="login">登录</Link></li>
            </ul>
        </div>
    );
  }
  return null;
};

const LoggedInView = props => {

  if (props.currentUser) {
    return (
        <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
                <li className="active"><Link to="/">主页</Link></li>
                <li><Link to="admin">我的服务</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><Link >{props.currentUser.user_name}</Link></li>
                <li><a href="#" onClick={props.onClickLogout}>退出</a></li>
            </ul>
        </div>
    );
  }

  return null;
};


class Header extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-inverse " style={{"marginBottom": '0px'}}>
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">{this.props.appName}</a>
                </div>
                <LoggedOutView currentUser={this.props.currentUser} onClickLogout={this.props.onClickLogout}/>
                <LoggedInView currentUser={this.props.currentUser} onClickLogout={this.props.onClickLogout}/>
            </div>
        </nav>
    );
  }
}

export default Header;
