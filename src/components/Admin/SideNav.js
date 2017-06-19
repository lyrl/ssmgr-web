import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';

const SideNav = props => {
  return (
      <div className="col-sm-2 sidenav " style={{backgroundColor: '#f1f1f1', paddingTop: 20, height: '100% '}}>
          <ul className="nav nav-pills nav-stacked">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Friends</a></li>
              <li><a href="#">Family</a></li>
              <li><a href="#">Photos</a></li>
          </ul>
      </div>
  );
};

export default SideNav;
