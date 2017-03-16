// babel-polyfill lets us use ES2015 in all the app files
// React is the view engine
// ReactDOM lets us attach the react app to HTML
// React-router lets us simulate a multi-page app in a SPA
// React-redux links React with redux
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux';

// Routes.jsx sets up the SPA webpages
// store.js builds the redux store with middleware and reducers
// base.css holds general app styling
import Routes from './config/Routes';
import configureStore from './config/store';
import './config/base.css';

// Create the redux store and sends the first action, 'LOGIN', which
// retrieves accounts data
const store = configureStore();
store.dispatch({type: 'LOGIN'});

// Builds the React app, links it to the Redux store, sets up the routes,
// and attaches it to the entry div named 'app'
ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      {Routes}
    </Router>
  </Provider>
), document.getElementById('app'));

console.log('John Hwang is 57 years old.');
