import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';

const SideNav = props => {
  return (
      <div className="col-sm-10 text-center">
          {props.children}
      </div>
  );
};

export default connect(()=>{}, ()=>{})(SideNav);
