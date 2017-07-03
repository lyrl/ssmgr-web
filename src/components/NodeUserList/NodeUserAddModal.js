import React from 'react';
import { connect } from 'react-redux';
import {
  NODE_USER_ADD_MODAL_LOAD,
  NODE_USER_ADD_MODAL_UNLOAD,
  NODE_USER_ADD
} from '../../constants/actionTypes';
import agent from '../../agent';
import EncryptMethodSelect from './EncryptMethodSelect';
import UserSelect from './UserSelect';

const mapStateToProps = state => ({
    ...state.nodeuser
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
      dispatch({type: NODE_USER_ADD_MODAL_LOAD, payload}),
  onUnload: () =>
      dispatch({ type: NODE_USER_ADD_MODAL_UNLOAD }),
  onSubmit: (payload) =>
      dispatch({type: NODE_USER_ADD, payload})
});


class NodeUserAddModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      method: '',
      password: '',
      user: ''
    };

    this.onChangeMethod = (ev) => this.setState({...this.state, method: ev.target.value});
    this.onChangeUser = (ev) => this.setState({...this.state, user: ev.target.value});
    this.onChangePassword = (ev) => this.setState({...this.state, password: ev.target.value});

    this.onClickSubmit = (ev) => window.$('#addNodeUser').submit();
    this.onSubmit = (ev) => this.props.onSubmit(agent.Node.addUser(this.props.node, {...this.state}));

    this.onClickModalShowButton = () => {
      window.$('#modalContent').modal('show')
    };


    this.onModalDismissButton = (ev) => {
      this.setState({
        method: this.props.node.node_encry_mode,
        password: '',
        user: ''
      });
    }

  }

  componentWillMount() {
    this.props.onLoad(agent.User.all());
  }

  componentDidMount() {
    window.$('#addNodeUser').validate({
      submitHandler: form => {
        this.onSubmit();
        window.$('#modalContent').modal('hide');
      },
      rules: {
        'user': {
          required: true,
        },
        'password': {
          required: true
        },
        'method': {
          required: true
        }
      },
      highlight: function (input) {
        window.$(input).parents('.form-line').addClass('error');
      },
      unhighlight: function (input) {
        window.$(input).parents('.form-line').removeClass('error');
      },
      errorPlacement: function (error, element) {
        window.$(element).parents('.form-group').append(error);
      }
    });

    let it = this;

    window.$('#modalContent').on('hidden.bs.modal', function (e) {
      it.onModalDismissButton();
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.node) {
      this.setState({...this.state, method: nextProps.node.node_encry_mode});
    }
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return <div>

      <div className="modal fade" id="modalContent" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title col-black" id="smallModalLabel">节点用户添加</h4>
            </div>
            <div className="modal-body">
              <form id="addNodeUser">
                <label htmlFor="node_name">用户</label>
                <div className="form-group ">
                  <div className="form-line">
                    <UserSelect value={this.state.user} name="user"  users={this.props.users} onChange={this.onChangeUser} />
                  </div>
                </div>

                <label htmlFor="password">密码</label>
                <div className="form-group ">
                  <div className="form-line">
                    <input type="text" id="password" name="password"  className="form-control" value={this.state.password} onChange={this.onChangePassword} placeholder="密码"/>
                  </div>
                </div>

                <label htmlFor="method">加密方式</label>
                <div className="form-group">
                  <div className="form-line">
                    <EncryptMethodSelect value={this.state.method} name="method" onChange={this.onChangeMethod} />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-link waves-effect" onClick={this.onClickSubmit}>提交</button>
              <button type="button" className="btn btn-link waves-effect" onClick={this.onModalDismissButton} data-dismiss="modal">取消</button>
            </div>
          </div>
        </div>
      </div>

      <a href="javascript:void(0);" onClick={this.onClickModalShowButton}>
        {this.props.children}
      </a>
    </div>;
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(NodeUserAddModal);







