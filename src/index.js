import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App';
import LoginLayout from './layout/login';
import store from './store';
import Home from  './components/Home';
import UserListContainer from './components/UserList';
import NodeListContainer from './components/NodeList';
import AddUserContainer from './components/UserForm/AddUser';
import EditUserContainer from './components/UserForm/EditUser';
import AddNodeContainer from './components/NodeForm/AddNode';
import EditNodeContainer from './components/NodeForm/EditNode';

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>

      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="users" component={UserListContainer} />
        <Route path="users/add" component={AddUserContainer} />
        <Route path="users/:user_name" component={EditUserContainer} />
        <Route path="nodes" component={NodeListContainer} />
        <Route path="nodes/add" component={AddNodeContainer} />
        <Route path="nodes/:id" component={EditNodeContainer} />
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
