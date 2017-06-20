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



class SideBar extends React.Component {
  render() {
    return (
        <section>
            <aside id="leftsidebar" className="sidebar">
                <div className="user-info">
                    <div className="image">
                        <img src="images/user.png" width="48" height="48" alt="User" />
                    </div>
                    <div className="info-container">
                        <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Lyrl</div>
                        <div className="email">184387904@qq.com</div>
                        <div className="btn-group user-helper-dropdown">
                            <i className="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                            <ul className="dropdown-menu pull-right">
                                <li><a href="javascript:void(0);"><i className="material-icons">input</i>Sign Out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <ul className="list">
                        <li className="header">导航</li>
                        <li className="active">
                            <a href="index.html">
                                <i className="material-icons">home</i>
                                <span>主页</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" >
                                <i className="material-icons">account_circle</i>
                                <span>用户管理</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <i className="material-icons">computer</i>
                                <span>节点管理</span>
                            </a>
                        </li>

                        <li>
                            <Link to="/login">
                                <i className="material-icons">computer</i>
                                <span>临时菜单-注册</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="legal">
                    <div className="copyright">
                        &copy; 2017 <a href="javascript:void(0);">{this.props.appName}</a>.
                    </div>
                    <div className="version">
                        <b>Version: </b> {this.props.version}
                    </div>
                </div>
            </aside>


            <aside id="rightsidebar" className="right-sidebar">
                <ul className="nav nav-tabs tab-nav-right" role="tablist">
                    <li role="presentation" className="active"><a href="#settings" data-toggle="tab">SETTINGS</a></li>
                </ul>
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane fade in active " id="settings">
                        <div className="demo-settings">
                            <p>GENERAL SETTINGS</p>
                            <ul className="setting-list">
                                <li>
                                    <span>Report Panel Usage</span>
                                    <div className="switch">
                                        <label><input type="checkbox"  /><span className="lever"></span></label>
                                    </div>
                                </li>
                                <li>
                                    <span>Email Redirect</span>
                                    <div className="switch">
                                        <label><input type="checkbox" /><span className="lever"></span></label>
                                    </div>
                                </li>
                            </ul>
                            <p>SYSTEM SETTINGS</p>
                            <ul className="setting-list">
                                <li>
                                    <span>Notifications</span>
                                    <div className="switch">
                                        <label><input type="checkbox" checked /> <span className="lever"></span></label>
                                    </div>
                                </li>
                                <li>
                                    <span>Auto Updates</span>
                                    <div className="switch">
                                        <label><input type="checkbox" checked /><span className="lever"></span></label>
                                    </div>
                                </li>
                            </ul>
                            <p>ACCOUNT SETTINGS</p>
                            <ul className="setting-list">
                                <li>
                                    <span>Offline</span>
                                    <div className="switch">
                                        <label><input type="checkbox" /><span className="lever"></span></label>
                                    </div>
                                </li>
                                <li>
                                    <span>Location Permission</span>
                                    <div className="switch">
                                        <label><input type="checkbox" checked /><span className="lever" /></label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
        </section>
    );
  }
}

export default SideBar;
