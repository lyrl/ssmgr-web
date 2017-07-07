import React from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';
import PingLabel from './PingLabel';
import http from 'http';


import {
  NODE_LIST_UNLOAD,
  NODE_LIST_LOAD,
  NODE_LIST_REFRESH,
  NODE_DELETE,
  NOTIFIER_NOTIFICATION
} from '../../constants/actionTypes';

const mapStateToProps = state => ({...state.node});

const mapDispatchToProps = dispatch => ({
});

class Ping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.setState({...this.state, startTime: new Date().getTime()});

    // http.get(this.props.url, res => {
    //   res.on('end', () => {
    //     this.setState({...this.state, endTime: new Date().getTime()});
    //     console.log('ping ' + this.props.url + ' success result: ' + JSON.stringify(res) + '! ' );
    //   });
    // }).on('error', e => {
    //   if (!this.state.endTime) {
    //     this.setState({...this.state, failed: true});
    //     console.log('ping ' + this.props.url + ' error!' + JSON.stringify(e));
    //   }
    // });


    agent.Ping.ping(this.props.url).then(res => {
      this.setState({...this.state, endTime: new Date().getTime()});
      console.log('ping ' + this.props.url + ' success result: ' + JSON.stringify(res) + '!');
    }).catch(error => {
      this.setState({...this.state, failed: true});
      console.log('ping ' + this.props.url + ' error!');
    });
  }

  render() {
    let val = '检测中...';

    if (this.state.startTime && this.state.endTime) {
      val = this.state.endTime - this.state.startTime;
    }

    if (this.state.failed) {
      val = 'N/A';
    }



    return <PingLabel delay={val} />
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Ping);
