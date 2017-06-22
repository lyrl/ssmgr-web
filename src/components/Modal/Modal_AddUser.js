import React from 'react';
import { connect } from 'react-redux';

class Modal_AddUser extends React.Component {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
    }

  onDelete(e) {
      e.preventDefault();

      let title = this.props.title;
      let text = this.props.text;
      let deleteHandler = this.props.deleteHandler;

      window.sweetAlert({
          title: title,
          text: text,
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "确认!",
          cancelButtonText: '取消',
          closeOnConfirm: true
      }, function () {
          deleteHandler();
      });
  }

  render() {
    return (
        <div >
            <button className="btn btn-primary waves-effect" datatype="confirm" onClick={this.onDelete}>删除</button>
        </div>
    );
  }
}

export default Modal_AddUser;
