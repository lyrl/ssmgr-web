import React from 'react';
import {NOTIFIED} from '../constants/actionTypes';
import { connect } from 'react-redux';
import PageLoader from './PageLoader';

const mapStateToProps = state => ({
  noti: state.notifier.noti,
});

const mapDispatchToProps = dispatch => ({
  onNotified: () => {
    dispatch({type: NOTIFIED});
  }
});


class Notifier extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps.noti: ' + JSON.stringify(nextProps.noti));

    if (nextProps.noti) {
      window.$.notify(nextProps.noti.message, {
        animate: {
          enter: 'animated flipInY',
          exit: 'animated flipOutX'
        },
        newest_on_top: true,
        delay: 2000,
        type: nextProps.noti.type, // success, warning, danger, default: default
        placement: {
          from: nextProps.noti.placement.from, // top or bottom. default: top
          align: nextProps.noti.placement.align // left, center or right. default: center
        },
        template: '<div data-notify="container" class="bootstrap-notify-container alert alert-dismissible {0} ' + ( "p-r-35") + '" role="alert">' +
        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
        '<span data-notify="icon"></span> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
      });

      this.props.onNotified()
    }
  }

  componentDidMount(){
  }


  render() {
    return (
        null
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifier);
