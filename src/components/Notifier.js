import React from 'react';
import {LOGOUT} from '../constants/actionTypes';
import { connect } from 'react-redux';
import PageLoader from './PageLoader';

const mapStateToProps = state => ({
  noti: state.notifier.noti,
});

const mapDispatchToProps = dispatch => ({
    onNotified: () => {
      dispatch({type: 'NOTIFIED'});
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
