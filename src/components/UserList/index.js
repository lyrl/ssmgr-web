import React from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';
import {
    USER_LIST_UNLOAD,
    USER_LIST_LOAD
} from '../../constants/actionTypes';
import UserList from './UserList';

const mapStateToProps = state => ({...state.user});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({type: USER_LIST_LOAD, payload}),
    onUnload: () =>
        dispatch({ type: USER_LIST_UNLOAD })
});

class UserListContainer extends React.Component {
    constructor() {
        super();
    }


    componentWillReceiveProps(nextProps) {
    }

    componentWillMount() {
        this.props.onLoad(agent.User.all())
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <UserList users={this.props.users}/>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
