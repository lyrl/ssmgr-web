import React from 'react';
import {LOGOUT} from '../constants/actionTypes';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    loading: state.common.loading,
});

const mapDispatchToProps = dispatch => ({
});



class PageLoader extends React.Component {
  componentDidMount(){
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading) {
        setTimeout(function () { window.$('.page-loader-wrapper').fadeOut(); }, 50);
    }
  }


  render() {
    if (this.props.loading) {
        return (
            <div className="page-loader-wrapper">
              <div className="loader">
                <div className="preloader">
                  <div className="spinner-layer pl-red">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
                <p>Please wait...</p>
              </div>
            </div>
        );
    } else {
      return null;
    }


  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLoader);
