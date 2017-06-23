export default (state = {}, action) => {

  let defaltConf = {
    type: 'bg-blue',
        placement: {
          from: 'top',
          align: 'center'
    }
  };

  switch (action.type) {
    case 'NOTIFICATION':{
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
    case 'NOTIFIED':
      return {
        ...state, noti: null
      };
    case 'DELETE_USER': {
      let conf = {...defaltConf};
      conf.message = "删除成功！";

      if (action.error) {
        conf.type = 'bg-red';
        conf.message = action.payload.errors.message;
      }

      return {
        ...state,
        noti: conf
      }
    }
    case 'USER_LIST_REFRESH': {
      let conf = {...defaltConf};
      conf.message = "正在刷新用户列表！";

      return {
        ...state,
        noti: conf
      }
    }
  }

  return state;
};
