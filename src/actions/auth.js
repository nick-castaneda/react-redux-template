import { request, handleErrors } from '../helpers/api';

export const LOGGING_IN = 'LOGGING_IN';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';

const loggingIn = () => ({
  type: LOGGING_IN,
});
const loginFailed = () => ({
  type: LOGIN_FAILED,
});
const loginSuccessful = username => ({
  type: LOGIN_SUCCESSFUL,
  username,
});

export function login() {
  return (dispatch) => {
    dispatch(loggingIn());

    const url = 'https://dog.ceo/api/breeds/list/all';

    return fetch(request('GET', url))
      .then(handleErrors)
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        dispatch(loginSuccessful('Teddy'));
      }).catch((error) => { // eslint-disable-line
        if (error.apiError) {
          dispatch(loginFailed());
        }
      });
  };
}
