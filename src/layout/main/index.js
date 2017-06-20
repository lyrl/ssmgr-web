import React from 'react';
import { connect } from 'react-redux';
import Header from "./Header";
import SideBar from "./Sidebar";


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
        dispatch({ type: 'HOME_PAGE_LOADED', tab, payload }),
    onUnload: () =>
        dispatch({  type: 'HOME_PAGE_UNLOADED' })
});

class MainLayout extends React.Component {
    componentWillMount() {
    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        return (
            <div className="theme-red">
                <div className="page-loader-wrapper">
                    <div className="loader">
                        <div className="preloader">
                            <div className="spinner-layer pl-red">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div>
                                <div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                            </div>
                        </div>
                        <p>稍等片刻......</p>
                    </div>
                </div>

                <Header appName={this.props.appName} />

                <SideBar appName={this.props.appName} version={this.props.version}  />

                <section className="content">
                    {this.props.children}
                </section>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
