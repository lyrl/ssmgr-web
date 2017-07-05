import React from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';

import {
  NODE_LIST_UNLOAD,
  NODE_LIST_LOAD,
  NODE_LIST_REFRESH,
  NODE_DELETE,
  NOTIFIER_NOTIFICATION
} from '../../constants/actionTypes';
import NodeList from './NodeList';

const mapStateToProps = state => ({...state.node});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
      dispatch({type: NODE_LIST_LOAD, payload}),
  onUnload: () =>
      dispatch({ type: NODE_LIST_UNLOAD }),
  onRefresh: () =>
      dispatch({type: NODE_LIST_REFRESH}),
  onDelNode: (payload) =>
      dispatch({ type: NODE_DELETE, payload }),
  onMessage: (message) => {
    dispatch({type: NOTIFIER_NOTIFICATION, message})
  },
});

class NodeListContainer extends React.Component {
    constructor() {
        super();

        this.onRefresh = this.onRefresh.bind(this);
        this.onDelNode = this.onDelNode.bind(this);
    }


    componentWillReceiveProps(nextProps) {
      if (nextProps.need_refresh) {
        setTimeout(()=> this.props.onLoad(agent.Node.all(true)));
      }
    }

    componentWillMount() {
        this.props.onLoad(agent.Node.all(true))
    }

    componentDidMount() {
      setInterval(this.onRefresh, 1000*60);
    }

    componentWillUnmount() {
    }

    onRefresh() {
        this.props.onRefresh();
    }

    onDelNode(node) {
        this.props.onDelNode(agent.Node.del(node.id));
        this.props.onMessage(`正在删除节点：${node.node_name}!`);
    }

    render() {
        return (
            <NodeList nodes={this.props.nodes} onDelNode={this.onDelNode} onRefresh={this.onRefresh}/>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NodeListContainer);
