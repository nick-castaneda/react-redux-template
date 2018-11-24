import {
  compose,
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import authReducer from '../reducers/auth';
import pupReducer from '../reducers/pup';

// Function to create the app store with thunk and api middleware
// The thunk middleware allows us to set up timeouts for actions
// API middleware are hit before the reducer, which allows Redux to pull
// data from external sources without interrupting the data workflow.
const createAppStore = compose(applyMiddleware(thunkMiddleware))(createStore);

// Combine Reducers combines all the reducers into a single reducer.
// This function takes the combined reducers and runs the 'createAppStore'
// function to build a store for the application.
export default function configureStore(initialState) {
  const reducers = combineReducers({
    authReducer,
    pupReducer,
  });
  return createAppStore(reducers, initialState);
}
