import React from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';
import {
    USER_LIST_UNLOAD,
    USER_LIST_LOAD
} from '../../constants/actionTypes';
import UserList from './UserList';
import PageLoader from '../PageLoader';

const mapStateToProps = state => ({...state.user});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({type: USER_LIST_LOAD, payload}),
    onUnload: () =>
        dispatch({ type: USER_LIST_UNLOAD }),
    onDeleteUser: (payload) =>
        dispatch({ type: 'DELETE_USER', payload }),
});

class UserListContainer extends React.Component {
    constructor() {
        super();

        this.deleteUser = this.deleteUser.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.need_refresh) {
            setTimeout(()=> this.props.onLoad(agent.User.all()));
        }
    }

    componentWillMount() {
        this.props.onLoad(agent.User.all())
    }

    componentDidMount() {
    }

    deleteUser(user) {
        this.props.onDeleteUser(agent.User.del(user.user_name))
    }

    render() {
        return (
        <div>
            <PageLoader/>
            <UserList users={this.props.users} deleteUserHandler={this.deleteUser} />
        </div>

    );
    }

    componentWillUnmount() {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
