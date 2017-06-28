import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {Dialog_Delete} from '../Dialog/';
import NodeUserStateLabel from './NodeUserStateLabel';
import ByteLabel from './ByteLabel';
import Actions from './Actions';


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
});

class NodeUserList extends React.Component {
    constructor() {
        super();
    }

    componentWillReceiveProps(nextProps) {
    }

    componentWillMount() {
    }

    componentDidUpdate() {
    }


    componentDidMount() {

    }

    componentWillUnmount() {
    }

    render() {
      let node = this.props.node;

      if (node) {

        let users = node.users.map(user => {
          return <tr>
            <td>{user.user_name}</td>
            <td>{user.userNodes.port}</td>
            <td>{user.userNodes.password}</td>
            <td>{user.userNodes.method}</td>
            <td><ByteLabel bytes={user.userNodes.traffic_total} /></td>
            <td><NodeUserStateLabel status={user.userNodes.status} /></td>
            {/*<td><span className="label bg-blue-grey">{user.userNodes.status}</span></td>*/}
            <td><Actions user={user} /></td>
          </tr>
        });

        return ( <div className="card">
            <div className="header bg-red">
                <h2>
                  {node.id} {node.node_name}
                  <small>
                    负载：{node.users.length}/{node.max_user} - {(node.users.length/node.max_user*100).toFixed(2)}% |
                    {node.node_ip} |
                    {node.node_port} |
                    {node.node_encry_mode}
                  </small>
                </h2>
                <ul className="header-dropdown m-r--5">
                    <li>
                        <a href="javascript:void(0);" onClick={this.props.onRefresh}>
                            <i className="material-icons">refresh</i>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" onClick={this.props.onRefresh}>
                            <i className="material-icons">add</i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="body">
              <table className="table table-hover dashboard-task-infos">
                <thead>
                <tr>
                  <th>用户</th>
                  <th>端口</th>
                  <th>密码</th>
                  <th>加密方式</th>
                  <th>总流量</th>
                  <th>状态</th>
                  <th>操作</th>
                </tr>
                </thead>
                <tbody>
                  {users}
                </tbody>
              </table>

            </div>
        </div>);
      }

      return null;
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NodeUserList);
