import React from 'react';
import { connect } from 'react-redux';
import agent from '../../../agent';
import {
  NODE_ADD_CANCEL,
  NODE_ADD,
  NODE_MODIFY,
  NODE_MODIFY_CANCEL,
  NODE_MODIFY_PAGE_LOAD
} from '../../../constants/actionTypes';
import EditNodeForm from './EditNodeForm';

const mapStateToProps = state => ({
    ...state.node
});

const mapDispatchToProps = dispatch => ({
  onEditNode: (payload) =>
      dispatch({type: NODE_MODIFY, payload}),
  onCancel: () =>
      dispatch({type: NODE_MODIFY_CANCEL}),
  onLoad: (payload) =>
    dispatch({type: NODE_MODIFY_PAGE_LOAD, payload})
});

class EditNodeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      node: {
        node_name: '',
        node_ip: '',
        node_port: '',
        node_key: '',
        node_encry_mode: ''
      }
    };

    this.onNodeNameChange = this.onNodeNameChange.bind(this);
    this.onNodeIpChange = this.onNodeIpChange.bind(this);
    this.onNodePortChange = this.onNodePortChange.bind(this);
    this.onNodeKeyChange = this.onNodeKeyChange.bind(this);
    this.onNodeEncryModeChange = this.onNodeEncryModeChange.bind(this);
    this.onMaxUserChange = this.onMaxUserChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.node) {
      this.setState({node: nextProps.node});
    }
  }

  componentWillMount() {
    this.props.onLoad(agent.Node.get(this.props.params.id));
  }

  componentDidMount() {
  }

  onNodeNameChange(ev) {
    this.setState({node: {...this.state.node, node_name: ev.target.value}})
  }

  onNodeIpChange(ev) {
    ev.preventDefault();
    this.setState({node: {...this.state.node, node_ip: ev.target.value}})

  }

  onNodePortChange(ev) {
    ev.preventDefault();
    this.setState({node: {...this.state.node, node_port: ev.target.value}})

  }


  onNodeKeyChange(ev) {
    ev.preventDefault();
    this.setState({node: {...this.state.node, node_key: ev.target.value}})

  }

  onNodeEncryModeChange(ev) {
    ev.preventDefault();
    this.setState({node: {...this.state.node, node_encry_mode: ev.target.value}})
  }

  onMaxUserChange(ev) {
    ev.preventDefault();
    this.setState({node: {...this.state.node, max_user: ev.target.value}})
  }

  onCancel(ev) {
    ev.preventDefault();
    this.props.onCancel();
  }

  onSubmit() {
    this.props.onEditNode(agent.Node.update(this.state.node));
  }

  render() {
    return (
        <EditNodeForm
            onCancel={this.onCancel}

            onNodeNameChange={this.onNodeNameChange}
            onNodeIpChange={this.onNodeIpChange}
            onNodePortChange={this.onNodePortChange}

            onNodeKeyChange={this.onNodeKeyChange}
            onNodeEncryModeChange={this.onNodeEncryModeChange}
            onMaxUserChange={this.onMaxUserChange}

            node={this.state.node}

            onSubmit={this.onSubmit}
        />
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditNodeContainer);
