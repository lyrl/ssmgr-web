import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import SideNav from './SideNav'
import Content from './ContentView'

const MainView = props => {

  return (
      <div className="container-fluid text-center">
        <div className="row content">
          <SideNav/>
          <Content>
              {props.children}
          </Content>
        </div>
      </div>
  );
};

export default MainView;
