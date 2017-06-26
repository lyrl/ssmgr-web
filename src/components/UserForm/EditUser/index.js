import React from 'react';
import { connect } from 'react-redux';
import agent from '../../../agent';
import EditUserForm from './EditUserForm';
import {USER_EDIT_PAGE_LOAD} from '../../../constants/actionTypes';

const mapStateToProps = state => ({
    ...state.user
});

const mapDispatchToProps = dispatch => ({
  onModUser: (payload) =>
      dispatch({type: "MODIFY_USER", payload}),
  onCancel: () =>
      dispatch({type: "CANCEL_MODIFY_USER"}),
  onLoad: (payload) =>
      dispatch({type: USER_EDIT_PAGE_LOAD, payload})
});

class EditUserContainer extends React.Component {
  constructor(props) {
    super(props);



    this.state = {
      user_name: '',
      password: '',
      email: ''
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleClickCancel = this.handleClickCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user){
      this.setState({
        ...this.state,
        user_name: nextProps.user.user_name,
        email: nextProps.user.email
      });
    }
  }

  componentWillMount() {
    let user_name = this.props.params.user_name;

    this.props.onLoad(agent.User.get(user_name));
  }

  componentDidMount() {
  }

  handlePasswordChange(ev) {
    ev.preventDefault();
    this.setState({...this.state, password: ev.target.value})
  }


  handleClickCancel(ev) {
    ev.preventDefault();
    this.props.onCancel();
  }

  handleSubmit() {
    this.props.onModUser(agent.User.update(this.state.user_name,this.state.password));
  }

  render() {
    return (
        <EditUserForm
            onCancel={this.handleClickCancel}

            onChangePassword={this.handlePasswordChange}

            user_name={this.state.user_name}
            password={this.state.password}
            email={this.state.email}

            onSubmit={this.handleSubmit}
        />
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditUserContainer);
