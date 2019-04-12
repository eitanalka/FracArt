import axios from 'axios';
import actions from './authActions';

const googleSignIn = googleToken => {
  return async dispatch => {
    try {
      localStorage.setItem('googleToken', googleToken);
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/google-signin`, {}, {
        headers: { Authorization: googleToken }
      });
      return dispatch(actions.googleSignIn(googleToken));
    } catch (error) {
      if (error.response.status === 403) {
        return dispatch(actions.noUsername());
      }
      if (error.response.status === 401) {
        return dispatch(actions.unauthorized());
      }
    }
  }
};

const createUsername = (username, googleToken) => {
  return async dispatch => {
    try {
      axios.patch(`${process.env.REACT_APP_API_URL}/user/username`, {
        username
      }, {
        headers: { Authorization: googleToken }
      });
      return dispatch(actions.createdUsernameSuccess());
    } catch (error) {
      return dispatch(actions.createdUsernameFail());
    }
  }
};

const resetUsernameRequest = () => dispatch =>
  dispatch(actions.resetUsernameRequest());


export default {
  googleSignIn,
  createUsername,
  resetUsernameRequest,
}