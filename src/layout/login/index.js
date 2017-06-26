import React from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';
import {
    UPDATE_FIELD_AUTH,
    REDIRECT,
    REGISTER_PAGE_UNLOADED,
    NOTIFIER_NOTIFIED,
    LOGIN_PAGE_UNLOADED,
    LOGIN
} from '../../constants/actionTypes';

const mapStateToProps = state => ({ ...state.auth, redirectTo: state.common.redirectTo, currentUser: state.common.currentUser });

const mapDispatchToProps = dispatch => ({
    onChangechangeUserName: value =>
        dispatch({ type: UPDATE_FIELD_AUTH, key: 'user_name', value }),
    onChangePassword: value =>
        dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
    onSubmit: (user_name, password) =>
        dispatch({ type: LOGIN, payload: agent.Auth.login(user_name, password) }),
    onUnload: () =>
        dispatch({ type: LOGIN_PAGE_UNLOADED }),
    onNotified: () =>
        dispatch({ type: NOTIFIER_NOTIFIED }),
    onRedirect: () =>
        dispatch({ type: REDIRECT })
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


    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {

            window.$.notify(nextProps.errors.message, {
                animate: {
                    enter: 'animated flipInY',
                    exit: 'animated flipOutX'
                },
                type: 'danger',
                placement: {
                    from: "top",
                    align: "center"
                },
            });
            this.props.onNotified();
        }

        if (nextProps.redirectTo) {
            this.context.router.replace(nextProps.redirectTo);
            this.props.onRedirect();
        }
    }

    componentWillMount() {
        if (this.props.currentUser) {
            this.context.router.replace('/');
            this.props.onRedirect();
        }

        document.body.style.backgroundColor = '#00BCD4';
    }

    componentDidMount() {

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
                                <form id="sign_in" method="POST" onSubmit={this.submitForm(user_name, password)}>
                                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className="material-icons">person</i>
                        </span>
                                        <div className="form-line">
                                            <input type="text" className="form-control" value={user_name} onChange={this.changeUserName} name="username" placeholder="用户名" required autoFocus />
                                        </div>
                                    </div>
                                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className="material-icons">lock</i>
                        </span>
                                        <div className="form-line">
                                            <input onChange={this.changePassword} value={password} type="password" className="form-control" name="password" placeholder="密码" required />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-8 p-t-5">
                                            <input type="checkbox" name="rememberme" id="rememberme" className="filled-in chk-col-pink" />
                                            <label htmlFor="rememberme">记住我</label>
                                        </div>
                                        <div className="col-xs-4">
                                            <button className="btn btn-block bg-pink waves-effect" type="submit" disabled={this.props.inProgress}> 提交</button>
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


LoginLayout.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginLayout);
