import {
  USER_DELETE,
  NOTIFIER_NOTIFICATION,
  NOTIFIER_NOTIFIED,
  USER_MODIFY,
  NODE_ADD,
  NODE_DELETE,
  NODE_USER_ADD
} from '../constants/actionTypes';

export default (state = {}, action) => {

  let defaltConf = {
    type: 'bg-blue',
        placement: {
          from: 'top',
          align: 'center'
    }
  };

  switch (action.type) {
    case NOTIFIER_NOTIFICATION:{
      let conf = {...defaltConf};

      if (typeof action.notitype !== 'undefined') {
        conf.type = action.notitype;
      }
      if (typeof action.from !== 'undefined') {
        conf.placement.from = action.from;
      }
      if (typeof action.align !== 'undefined') {
        conf.placement.align = action.align;
      }

      conf.message = action.message;

      return {
        ...state,
        noti: conf
      };
    }
    case NOTIFIER_NOTIFIED:
      return {
        ...state, noti: null
      };
    case NODE_DELETE:
    case USER_DELETE: {
      if (!action.error) {
        let conf = {...defaltConf};
        conf.message = "删除成功！";
        return {
          ...state,
          noti: conf
        }
      }
      break;
    }
    case USER_MODIFY: {
      let conf = {...defaltConf};
      conf.message = "密码修改成功！";

      return {
        ...state,
        noti: conf
      }
    }
    case NODE_ADD: {
      if (!action.error) {
        let conf = {...defaltConf};
        conf.message = "节点添加成功！";

        return {
          ...state,
          noti: conf
        }
      }
      break;
    }
    case NODE_USER_ADD: {
      if (!action.error) {
        let conf = {...defaltConf};
        conf.message = "节点用户添加成功！";

        return {
          ...state,
          noti: conf
        }
      }
      break;
    }

  }

  return state;
};
