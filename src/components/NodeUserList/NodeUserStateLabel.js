import React from 'react';

var NodeUserStateLabel = props => {
  let text = '';
  let color = '';

  switch (props.status) {
    case 'wait_for_sync':
      color = 'bg-blue-grey';
      text = '待同步';
      break;
    case 'working':
      color = 'bg-green';
      text = '运行中';
      break;
    case 'suspend':
      color = 'bg-orange';
      text = '已暂停';
      break;
    case 'freezed':
      color = 'bg-red';
      text = '已冻结';
      break;
    case 'ended':
      color = 'bg-grey';
      text = '已停止';
      break;
  }


  return <span className={`label ${color}`}>{text}</span>;
};

export default NodeUserStateLabel;