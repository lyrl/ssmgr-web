import React from 'react';
import {LOGOUT} from '../constants/actionTypes';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    loading: state.common.loading,
});

const mapDispatchToProps = dispatch => ({
});



class Modal extends React.Component {
  componentDidMount(){
  }

  componentWillReceiveProps(nextProps) {
  }


  render() {
    return (
        <div >
            <div className="icon-button-demo">
                <button type="button" className="btn btn-danger btn-xs waves-effect" data-toggle="modal" data-target="#defaultModal">
                    <i className="material-icons">delete</i>
                </button>

                <button type="button" className="btn btn-xs waves-effect" data-toggle="modal" data-target="#defaultModal">
                    <i className="material-icons">edit</i>
                </button>
                <button type="button" className="btn btn-xs waves-effect" data-toggle="modal" data-target="#defaultModal">
                    <i className="material-icons">computer</i>
                </button>
            </div>



            <div className="modal fade" id="defaultModal" tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="defaultModalLabel">Modal title</h4>
                        </div>
                        <div className="modal-body">
                            content
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-link waves-effect">确认</button>
                            <button type="button" className="btn btn-link waves-effect" data-dismiss="modal">取消</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
