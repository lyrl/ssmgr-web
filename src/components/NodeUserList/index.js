import React from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';

import {
  NODE_USER_LIST_LOAD,
  NODE_USER_LIST_UNLOAD,
  NODE_USER_LIST_REFRESH,
  NOTIFIER_NOTIFICATION
} from '../../constants/actionTypes';
import NodeUserList from './NodeUserList';

const mapStateToProps = state => ({...state.nodeuser});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
      dispatch({type: NODE_USER_LIST_LOAD, payload}),
  onUnload: () =>
      dispatch({ type: NODE_USER_LIST_UNLOAD }),
  onRefresh: () =>
      dispatch({type: NODE_USER_LIST_REFRESH}),
  onMessage: (message) => {
    dispatch({type: NOTIFIER_NOTIFICATION, message})
  },
});

class NodeUserListContainer extends React.Component {
    constructor() {
        super();

        this.onRefresh = () => this.props.onRefresh();
    }


    componentWillReceiveProps(nextProps) {
      if (nextProps.need_refresh) {
        setTimeout(()=> this.componentWillMount());
      }
    }

    componentWillMount() {
        this.props.onLoad(agent.Node.users(this.props.params.nodeid))
    }

    componentWillUnmount() {
      this.props.onUnload();
    }


    render() {
        return (
            <NodeUserList node={this.props.node} onRefresh={this.onRefresh}/>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NodeUserListContainer);
