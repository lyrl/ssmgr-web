import React from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';
import {
    NODE_LIST_UNLOAD,
    NODE_LIST_LOAD
} from '../../constants/actionTypes';
import NodeList from './NodeList';

const mapStateToProps = state => ({...state.node});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({type: NODE_LIST_LOAD, payload}),
    onUnload: () =>
        dispatch({ type: NODE_LIST_UNLOAD })
});

class NodeListContainer extends React.Component {
    constructor() {
        super();
    }


    componentWillReceiveProps(nextProps) {
    }

    componentWillMount() {
        this.props.onLoad(agent.Node.all())
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <NodeList nodes={this.props.nodes}/>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NodeListContainer);
