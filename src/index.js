import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory  } from 'react-router';
import { Provider } from 'react-redux';

import 'siimple/dist/siimple.css';

import RequireAuth from './containers/RequireAuth';
import App from './components/App';
import Tasks from './containers/Tasks';
import Login from './containers/Login';


import configureStore from './store/configureStore';

const store = configureStore();

var routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={RequireAuth(Tasks)} />
        <Route path="login" component={Login} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);
