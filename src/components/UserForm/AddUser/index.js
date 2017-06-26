import React from 'react';
import { connect } from 'react-redux';
import agent from '../../../agent';
import {
  USER_LIST_UNLOAD,
  USER_LIST_LOAD
} from '../../../constants/actionTypes';
import AddUserForm from './AddUserForm';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onAddUser: (payload) =>
      dispatch({type: "ADD_USER", payload}),
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
    this.handleSubmit = this.handleSubmit.bind(this);
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
    ev.preventDefault();
    this.setState({...this.state, password: ev.target.value})
  }

  handleEmailChange(ev) {
    ev.preventDefault();
    this.setState({...this.state, email: ev.target.value})
  }


  handleClickCancel(ev) {
    ev.preventDefault();
    this.props.onCancel();
  }

  handleSubmit() {
    this.props.onAddUser(agent.User.create(this.state.user_name, this.state.password, this.state.email));
  }

  render() {
    return (
        <AddUserForm
            onCancel={this.handleClickCancel}

            onChangeUserName={this.handleUserNameChange}
            onChangePassword={this.handlePasswordChange}
            onChangeEmail={this.handleEmailChange}

            user_name={this.state.user_name}
            password={this.state.password}
            email={this.state.email}
            onSubmit={this.handleSubmit}
        />
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddUserContainer);
