import { BEST_PUP_UPDATED } from '../actions/pup';

const initialState = {
  bestPup: 'Lando',
};

// Reducers are pure javascript functions that return the application state
export default function (state = initialState, action) {
  // Switch checks to see if the reducer is interested in the action type,
  // and changes the state appropriately if it is interested.
  switch (action.type) {
    // When the newBestPup is received, set the baby up in the state
    case BEST_PUP_UPDATED: {
      const { newBestPup } = action;
      return Object.assign({}, state, { bestPup: newBestPup });
    }

    // return the current state by default
    default: return state;
  }
}
