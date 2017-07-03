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
  NODE_USER_DELETE
} from '../../constants/actionTypes';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  onDelNodeUser: (payload) =>
      dispatch({type: NODE_USER_DELETE})
});


class Actions extends React.Component {
  constructor(props) {
    super(props);

    this.actions = {
      delete: {
        name: "删除",
        title: "节点用户删除",
        text: "你确认要从节点上删除这个用户吗？",
        fn: () => this.props.onDelNodeUser(agent.Node.delUser(props.node, props.user))
      },
      sync: {
        name: "同步",
        title: "节点用户删除",
        text: "你确认要将用户同步到节点吗？",
        fn: (node, user) => {}
      },
      suspend: {
        name: "暂停",
        title: "节点用户暂停",
        text: "你确认要暂停节点上这个用户吗？",
        fn: (node, user) => {}
      },
      freeze: {
        name: "冻结",
        title: "节点用户冻结",
        text: "你确认要从冻结节点上这个用户吗？",
        fn: (node, user) => {}
      },
      recover: {
        name: "恢复",
        title: "节点用户恢复",
        text: "你确认要恢复节点上这个用户吗？",
        fn: (node, user) => {}
      }
    };

    this.menus = [];

    let status = props.user.userNodes.status;

    switch (status) {
      case 'wait_for_sync':
        this.menus.push(this.actions['sync']);
        break;
      case 'working':
        this.menus.push(this.actions['suspend']);
        this.menus.push(this.actions['freeze']);
        break;
      case 'suspend':
        this.menus.push(this.actions['recover']);
        this.menus.push(this.actions['freeze']);
        break;
      case 'freezed':
        this.menus.push(this.actions['recover']);
        break;
    }

    this.menus.push(this.actions['delete']);
  }

  componentWillMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  componentWillUnmount() {

  }

  render() {
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