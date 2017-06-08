'use strict';

import { Link } from 'react-router';
import React from 'react';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="register" className="nav-link">
            Sign up
          </Link>
        </li>

      </ul>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="editor" className="nav-link">
            <i className="ion-compose"></i>&nbsp;New Post
          </Link>
        </li>

        <li className="nav-item">
          <Link to="settings" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to={`@${props.currentUser.username}`}
            className="nav-link">
            <img src={props.currentUser.image} className="user-pic" />
            {props.currentUser.username}
          </Link>
        </li>

      </ul>
    );
  }

  return null;
};

class Header extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-inverse " style={{"margin-bottom": '0px'}}>
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">{this.props.appName}</a>
                </div>

                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">主页</a></li>
                        <li><a href="#">产品</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="login">注册</Link></li>
                        <li><Link to="register">登录</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
}

export default Header;
