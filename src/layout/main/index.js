import React from 'react';
import { connect } from 'react-redux';
import Header from "./Header";
import SideBar from "./Sidebar";
import Notifier from '../../components/Notifier';
import PageLoader from '../../components/PageLoader';

import {HOME_PAGE_LOADED, HOME_PAGE_UNLOADED, LOGOUT} from '../../constants/actionTypes';


const Promise = global.Promise;

const mapStateToProps = state => ({
    ...state.home,
    appName: state.common.appName,
    version: state.common.version,
    token: state.common.token,
    currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
    onLoad: (tab, payload) =>
        dispatch({ type: HOME_PAGE_LOADED, tab, payload }),
    onUnload: () =>
        dispatch({  type: HOME_PAGE_UNLOADED }),
    onClickLogout: ev => {
        ev.preventDefault();
        dispatch({ type: LOGOUT })
    }
});

class MainLayout extends React.Component {
    componentWillMount() {
        document.body.style.backgroundColor = '#e9e9e9';
    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        return (
            <div className="theme-red">
                <Notifier />
                <PageLoader/>

                <Header appName={this.props.appName}  />

                <SideBar appName={this.props.appName} version={this.props.version}  logout={this.props.onClickLogout} />

                <section className="content">
                    {this.props.children}
                </section>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
