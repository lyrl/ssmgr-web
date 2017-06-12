import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import store from './store';

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        {/*<Route path="register" component={Register} />*/}
        {/*<Route path="settings" component={Settings} />*/}
        {/*<Route path="article/:id" component={Article} />*/}
        {/*<Route path="@:username" component={Profile} />*/}
        {/*<Route path="@:username/favorites" component={ProfileFavorites} />*/}
        {/*<Route path="editor" component={Editor} />*/}
        {/*<Route path="editor/:slug" component={Editor} />*/}
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
