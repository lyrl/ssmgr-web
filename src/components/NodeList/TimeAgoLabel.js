import React from 'react';
import timeAgo from 'node-time-ago';

const TimeAgoLabel = props => {
  return <span className="label bg-grey">{props.time ? timeAgo(new Date(props.time)) : 'N/A'}</span>;
};

export default TimeAgoLabel;