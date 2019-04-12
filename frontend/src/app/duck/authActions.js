import types from './authTypes';

const googleSignIn = googleToken => ({
  type: types.GOOGLE_SIGN_IN,
  googleToken
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
  noUsername,
  createdUsernameSuccess,
  createdUsernameFail,
  resetUsernameRequest,
  unauthorized,
}
