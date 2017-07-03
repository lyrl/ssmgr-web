import React from 'react';
import { connect } from 'react-redux';

class ActionDialog extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

  onClick(e) {
      e.preventDefault();

      let title = this.props.action.title;
      let text = this.props.action.text;
      let onActionFn = this.props.action.fn;

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
        onActionFn();
      });
  }

  render() {
    return (
        // className="col-red"
            <a href="javascript:void(0);" datatype="confirm" onClick={this.onClick}>{this.props.action.name}</a>
    );
  }
}

export default ActionDialog;
