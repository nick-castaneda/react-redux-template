// React is the view engine
// ReactDOM lets us attach the react app to HTML
// React-router lets us simulate a multi-page app in a SPA
// React-redux links React with redux
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Routes.jsx sets up the SPA webpages
// store.js builds the redux store with middleware and reducers
// base.css holds general app styling
import App from './components';
import configureStore from './config/store';

const store = configureStore();

// Builds the React app, links it to the Redux store, sets up the routes,
// and attaches it to the entry div named 'app'
ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'));

console.log('Cooler than a polar bear\'s toenails');
