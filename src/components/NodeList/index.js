import React from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';

import {
    NODE_LIST_UNLOAD,
    NODE_LIST_LOAD,
    NODE_LIST_REFRESH
} from '../../constants/actionTypes';
import NodeList from './NodeList';

const mapStateToProps = state => ({...state.node});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({type: NODE_LIST_LOAD, payload}),
    onUnload: () =>
        dispatch({ type: NODE_LIST_UNLOAD }),
    onRefresh: () =>
        dispatch({type: NODE_LIST_REFRESH})
});

class NodeListContainer extends React.Component {
    constructor() {
        super();

        this.onRefresh = this.onRefresh.bind(this);
    }


    componentWillReceiveProps(nextProps) {
      if (nextProps.need_refresh) {
        setTimeout(()=> this.props.onLoad(agent.Node.all()));
      }
    }

    componentWillMount() {
        this.props.onLoad(agent.Node.all())
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    onRefresh() {
        this.props.onRefresh();
    }

    render() {
        return (
            <NodeList nodes={this.props.nodes} onRefresh={this.onRefresh}/>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NodeListContainer);
