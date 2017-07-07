import React from 'react';
import {LOGOUT} from '../constants/actionTypes';
import { connect } from 'react-redux';
import PageLoader from './PageLoader';
import agent from '../agent';

import {APP_LOAD, REDIRECT, HOME_PAGE_LOADED} from '../constants/actionTypes';

const mapStateToProps = state => ({
  appLoaded: state.common.appLoaded,
  appName: state.common.appName,
  currentUser: state.common.currentUser,
  redirectTo: state.common.redirectTo,
  statistics: state.home.statistics
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: HOME_PAGE_LOADED, payload}),
  onRedirect: () =>
    dispatch({ type: REDIRECT }),
  onClickLogout: ev => {
    ev.preventDefault();
    dispatch({ type: LOGOUT })
  }
});



class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {loaded: false}
  }

  componentDidMount(){
    this.setState(previousState => {
      return {loaded: true}
    });

    this.props.onLoad(agent.DashBoard.statistics());

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.statistics) {
      setTimeout(()=>{window.$('.count-to').countTo()}, 200);
    }
  }


  render() {

    if (!this.props.statistics) {
      return null;
    } else {
      return (
          <div className="container-fluid">

            <PageLoader loaded={this.state.loaded} />

            <div className="block-header">
              <h2>仪表盘</h2>
            </div>

            <div className="row clearfix">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="info-box bg-pink hover-expand-effect">
                  <div className="icon">
                    <i className="material-icons">face</i>
                  </div>
                  <div className="content">
                    <div className="text">用户数</div>
                    <div className="number count-to" data-from="0" data-to={this.props.statistics.users} data-speed="500" data-fresh-interval="20"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="info-box bg-cyan hover-expand-effect">
                  <div className="icon">
                    <i className="material-icons">devices</i>
                  </div>
                  <div className="content">
                    <div className="text">节点数</div>
                    <div className="number count-to" data-from="0" data-to={this.props.statistics.nodes} data-speed="500" data-fresh-interval="20"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
      );
    }

  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
