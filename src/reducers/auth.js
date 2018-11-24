import { LOGGING_IN, LOGIN_FAILED, LOGIN_SUCCESSFUL } from '../actions/auth';

const initialState = {};

// Reducers are pure javascript functions that return the application state
export default function (state = initialState, action) {
  // Switch checks to see if the reducer is interested in the action type,
  // and changes the state appropriately if it is interested.
  switch (action.type) {
    case LOGGING_IN: {
      return Object.assign({}, state, { loggingIn: true });
    }

    case LOGIN_SUCCESSFUL: {
      const { username } = action;
      return Object.assign({}, state, {
        username,
        loggingIn: false,
      });
    }

    case LOGIN_FAILED: {
      return Object.assign({}, state, { loggingIn: false });
    }

    default: return state;
  }
}
