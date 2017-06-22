import React from 'react';
import {LOGOUT} from '../constants/actionTypes';
import { connect } from 'react-redux';
import PageLoader from './PageLoader';

const mapStateToProps = state => ({
  appLoaded: state.common.appLoaded,
  appName: state.common.appName,
  currentUser: state.common.currentUser,
  redirectTo: state.common.redirectTo
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: 'APP_LOAD', payload, token }),
  onRedirect: () =>
    dispatch({ type: 'REDIRECT' }),
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

    window.$('.count-to').countTo()
  }


  render() {
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
                  <i className="material-icons">playlist_add_check</i>
                </div>
                <div className="content">
                  <div className="text">用户数</div>
                  <div className="number count-to" data-from="0" data-to="125" data-speed="500" data-fresh-interval="20"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-cyan hover-expand-effect">
                <div className="icon">
                  <i className="material-icons">help</i>
                </div>
                <div className="content">
                  <div className="text">节点数</div>
                  <div className="number count-to" data-from="0" data-to="257" data-speed="500" data-fresh-interval="20"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
