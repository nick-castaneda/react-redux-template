import {compose, createStore, applyMiddleware} from 'redux';
import { combineReducers } from 'redux-immutable';
import thunkMiddleware from 'redux-thunk';

import landoAPI from '../api/lando';

import userReducer from '../reducers/user';
import landoReducer from '../reducers/lando';

// Function to create the app store with thunk and api middleware
// The thunk middleware allows us to set up timeouts for actions
// API middleware are hit before the reducer, which allows Redux to pull
// data from external sources without interrupting the data workflow.
const createAppStore = compose(
  applyMiddleware(
    thunkMiddleware,
    landoAPI
  )
)(createStore);

// Combine Reducers combines all the reducers into a single reducer.
// This function takes the combined reducers and runs the 'createAppStore'
// function to build a store for the application.
export default function configureStore(initialState){
  const reducers = combineReducers({
    userReducer,
    landoReducer
  });
  return createAppStore(reducers, initialState);
};
