// Dope API library
import axios from 'axios';

// create a middleware function for checking redux actions and making API
// calls if necessary
const dataService = store => next => action => {

  // If the 'LOGIN' action stops by, call on OCP's own express server to
  // grab the oAuth data
  if ('NEW_LANDO' == action.type) {
    const url = '/lando';
    axios.post(url, {
      lando: action.lando
    }).then((result) => {
      // once the API responds, pass a new action to the user reducer
      // with the data
      next({
        type: 'LANDO_CREATED',
        user: result.data
      });
    }).catch((error) => {
      // Pass an error action if the API responds with an error
      next({
        type: 'ERROR',
        error: error
      });
    });
  }

  // if the action isn't important to this middleware, pass it along
  next(action);
}

export default dataService;
