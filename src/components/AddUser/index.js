import React from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';
import {
    USER_LIST_UNLOAD,
    USER_LIST_LOAD
} from '../../constants/actionTypes';
import AddUserForm from './AddUserForm';
import PageLoader from '../PageLoader';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({type: USER_LIST_LOAD, payload}),
    onCancel: () =>
        dispatch({type: "CANCEL_ADD_USER"})
});

class AddUserContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            password: '',
            email: ''
        };

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleClickCancel = this.handleClickCancel.bind(this);
    }

    componentWillReceiveProps(nextProps) {
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    handleUserNameChange(ev) {
        this.setState({...this.state, user_name: ev.target.value})
    }

    handlePasswordChange(ev) {
        this.setState({...this.state, password: ev.target.value})
    }

    handleEmailChange(ev) {
        this.setState({...this.state, email: ev.target.value})
    }


    handleClickCancel(ev) {
        this.props.onCancel();
    }

    render() {
        return (
            <AddUserForm onCancel={this.handleClickCancel} user_name={this.state.user_name} password={this.state.password} email={this.state.email}/>
    );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddUserContainer);
