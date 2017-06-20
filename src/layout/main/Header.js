'use strict';

import React from 'react';


class Header extends React.Component {
  render() {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a href="javascript:void(0);" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"></a>
                    <a href="javascript:void(0);" className="bars"></a>
                    <a className="navbar-brand" href="index.html">{this.props.appName}</a>
                </div>

                <div className="collapse navbar-collapse" id="navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="pull-right"><a href="javascript:void(0);" className="js-right-sidebar" data-close="true"><i className="material-icons">more_vert</i></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
}

export default Header;
