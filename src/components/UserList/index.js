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
        dispatch({ type: USER_LIST_UNLOAD })
});

class UserListContainer extends React.Component {
    constructor() {
        super();

        this.state = {loaded: false}
    }


    componentWillReceiveProps(nextProps) {
    }

    componentWillMount() {
        this.props.onLoad(agent.User.all())
    }

    componentDidMount() {
        this.setState(previousState => {
            return {loaded: true}
        });
    }

    render() {
        return (
        <div>
            <PageLoader/>
            <UserList users={this.props.users}/>
        </div>

    );
    }

    componentWillUnmount() {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
