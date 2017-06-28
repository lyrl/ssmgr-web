import React from 'react';
import { Link } from 'react-router';

const trans_dict = {
  'end' : '停止',
  'sync' : '同步',
  'suspend' : '暂停',
  'freeze' : '冻结',
  'recover' : '恢复'
};

const Actions = props => {
  let actions = ['end'];

  let status = props.user.userNodes.status;

  switch (status) {
    case 'wait_for_sync':
      actions.push('sync');
      break;
    case 'working':
      actions.push('suspend');
      actions.push('freeze');
      break;
    case 'suspend':
      actions.push('recover');
      actions.push('freeze');
      break;
    case 'freezed':
      actions.push('recover');
      break;
  }

  let menus = actions.map( action => {
    return <li>
      <Link to={`/nodes/${action}`} >
        {trans_dict[action]}
      </Link>
    </li>
  });



  return <div className="btn-group ">
    <button type="button" className="btn btn-primary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i className="material-icons">settings</i>
      <span>操作</span>
    </button>
    <ul className="dropdown-menu">
      {menus}
      {/*<li role="separator" className="divider" />*/}
    </ul>
  </div>
};

export default Actions;