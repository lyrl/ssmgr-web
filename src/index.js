import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App';
import LoginLayout from './layout/login';
import Register from './components/Register';
import store from './store';
import Home from  './components/Home';
import UserListContainer from './components/UserList';
import NodeListContainer from './components/NodeList';
import AddUserContainer from './components/AddUser';

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="users" component={UserListContainer} />
        <Route path="users/add" component={AddUserContainer} />
        <Route path="nodes" component={NodeListContainer} />
        {/*<Route path="settings" component={Settings} />*/}
        {/*<Route path="article/:id" component={Article} />*/}
        {/*<Route path="@:username" component={Profile} />*/}
        {/*<Route path="@:username/favorites" component={ProfileFavorites} />*/}
        {/*<Route path="editor" component={Editor} />*/}
        {/*<Route path="editor/:slug" component={Editor} />*/}
      </Route>
      <Route path="/login" component={LoginLayout}>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
