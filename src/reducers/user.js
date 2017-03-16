// ImmutableJS is a better way to handle data
import {Map, List, fromJS} from 'immutable';

// Reducers are pure javascript functions that return the application state
export default function(state = Map(), action) {
  // Switch checks to see if the reducer is interested in the action type,
  // and changes the state appropriately if it is interested.
  switch (action.type) {

    // When User data is received, set the uuid to the user's uuid
    case 'USER_LOGGED_IN': {
      return state.set('uuid', action.uuid);
    }
  }

  // return the current state by default
  return state;
}
