import React from 'react';
import prettyBytes from 'pretty-bytes';

const ByteLabel = props => {
  return <span className="label bg-blue">{prettyBytes(props.bytes)}</span>;
};

export default ByteLabel;