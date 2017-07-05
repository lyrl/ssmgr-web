import React from 'react';
import timeAgo from 'node-time-ago';

const PingLabel = props => {
  let color = 'green';

  if (!isNaN(props.delay)) {
    if (props.delay < 200) {
      color = 'green';
    }

    if (props.delay >= 200 && props.delay < 500) {
      color = 'orange';
    }

    if (props.delay > 500) {
      color = 'red';
    }
  } else {
    if (props.delay === 'N/A') {
      color = 'red';
    }
  }






  return <span className={'label bg-' + color}>{props.delay}{isNaN(props.delay) ? '' : 'ms'}</span>;
};

export default PingLabel;