import types from './authTypes';

const googleSignIn = ({googleToken, username}) => ({
  type: types.GOOGLE_SIGN_IN,
  googleToken,
  username,
});

const googleSignOut = () => ({
  type: types.GOOGLE_SIGN_OUT,
});

const unauthorized = () => ({
  type: types.UNAUTHORIZED,
})

const noUsername = () => ({
  type: types.NO_USERNAME,
})

const createdUsernameSuccess = () => ({
  type: types.CREATED_USERNAME_SUCCESS,
});

const createdUsernameFail = () => ({
  types: types.CREATED_USERNAME_FAIL,
});

const resetUsernameRequest = () => ({
  type: types.RESET_USERNAME_REQUEST,
})

export default {
  googleSignIn,
  googleSignOut,
  noUsername,
  createdUsernameSuccess,
  createdUsernameFail,
  resetUsernameRequest,
  unauthorized,
}
