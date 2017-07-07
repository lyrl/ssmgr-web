import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import agent from '../../agent';
import ActionDialog from './ActionDialog';


import {
  NODE_USER_LIST_LOAD,
  NODE_USER_LIST_UNLOAD,
  NODE_USER_LIST_REFRESH,
  NOTIFIER_NOTIFICATION,
  NODE_USER_DELETE,
  NODE_USER_SYNC,
  NODE_USER_RECOVER,
  NODE_USER_SUSPEND
} from '../../constants/actionTypes';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  onDelNodeUser: (payload) =>
      dispatch({type: NODE_USER_DELETE, payload}),
  onSyncUser: (payload) =>
      dispatch({type: NODE_USER_SYNC, payload}),
  onSuspendUser: (payload) =>
      dispatch({type: NODE_USER_SUSPEND, payload}),
  onRecoverUser: (payload) =>
      dispatch({type: NODE_USER_RECOVER, payload}),
});


class Actions extends React.Component {
  constructor(props) {
    super(props);

    this.actions = {
      delete: {
        name: "删除",
        title: "节点用户删除",
        text: `你确认要从节点 ${props.node.node_name} 上用户 ${props.user.user_name} 吗？`,
        fn: () => this.props.onDelNodeUser(agent.Node.delUser(props.node, props.user))
      },
      sync: {
        name: "同步",
        title: "节点用户删除",
        text: "你确认要将用户同步到节点吗？",
        fn: () => this.props.onSyncUser(agent.Node.syncUser(props.node, props.user))
      },
      suspend: {
        name: "暂停",
        title: "节点用户服务暂停",
        text: `你确认要暂停节点上用户 ${props.user.user_name} 吗？`,
        fn: () => this.props.onSuspendUser(agent.Node.suspendUser(props.node, props.user))
      },
      recover: {
        name: "恢复",
        title: "节点用户恢复",
        text: "你确认要恢复节点上这个用户吗？",
        fn: () => this.props.onRecoverUser(agent.Node.recoverUser(props.node, props.user))
      }
    };

  }

  componentWillMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  componentWillUnmount() {

  }

  render() {

    this.menus = [];
    let props = this.props;
    let status = props.user.userNodes.status;

    switch (status) {
      case 'wait_for_sync':
        this.menus.push(this.actions['sync']);
        break;
      case 'working':
        this.menus.push(this.actions['suspend']);
        break;
      case 'suspend':
        this.menus.push(this.actions['recover']);
        break;
    }

    this.menus.push(this.actions['delete']);

    let menus = this.menus.map( action => {
      return <li>
        {/*<Link to={`/nodes/${action}`} >*/}
          {/*{action.name}*/}
        {/*</Link>*/}
        <ActionDialog action={action} />
      </li>
    });



    return <div className="btn-group ">
      <button type="button" className="btn btn-primary btn-xs " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="material-icons">settings</i>
        <span style={{verticalAlign: 'text-bottom'}}>操作</span>
      </button>
      <ul className="dropdown-menu">
        {menus}
      </ul>
    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Actions);