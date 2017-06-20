import React from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';
import ListErrors from '../../components/ListErrors';
import {
    UPDATE_FIELD_AUTH,
    REGISTER,
    REGISTER_PAGE_UNLOADED,
    LOGIN_PAGE_UNLOADED,
    LOGIN
} from '../../constants/actionTypes';


const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
    onChangechangeUserName: value =>
        dispatch({ type: UPDATE_FIELD_AUTH, key: 'user_name', value }),
    onChangePassword: value =>
        dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
    onSubmit: (user_name, password) =>
        dispatch({ type: LOGIN, payload: agent.Auth.login(user_name, password) }),
    onUnload: () =>
        dispatch({ type: LOGIN_PAGE_UNLOADED })
});

class LoginLayout extends React.Component {
    constructor() {
        super();
        this.changeUserName = ev => this.props.onChangechangeUserName(ev.target.value);
        this.changePassword = ev => this.props.onChangePassword(ev.target.value);
        this.submitForm = (user_name, password) => ev => {
            ev.preventDefault();
            this.props.onSubmit(user_name, password);
        };

    }

    componentDidMount() {
        document.body.style.backgroundColor = '#00BCD4';
    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        const user_name = this.props.user_name;
        const password = this.props.password;
        return (
                <div className="login-page ls-closed">
                    <div className="login-box">
                        <div className="logo">
                            <a href="javascript:void(0);">SSMGR</a>
                            <small>Shadowsocks Management System</small>
                        </div>
                        <div className="card">
                            <div className="body">
                                <form id="sign_in" method="POST">
                                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className="material-icons">person</i>
                        </span>
                                        <div className="form-line">
                                            <input type="text" className="form-control" name="username" placeholder="用户名" required autofocus />
                                        </div>
                                    </div>
                                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className="material-icons">lock</i>
                        </span>
                                        <div className="form-line">
                                            <input type="password" className="form-control" name="password" placeholder="密码" required />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-8 p-t-5">
                                            <input type="checkbox" name="rememberme" id="rememberme" className="filled-in chk-col-pink" />
                                            <label for="rememberme">记住我</label>
                                        </div>
                                        <div className="col-xs-4">
                                            <button className="btn btn-block bg-pink waves-effect" type="submit">提交</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginLayout);
