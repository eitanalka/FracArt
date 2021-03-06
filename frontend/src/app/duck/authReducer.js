import types from './authTypes';

const initialState = {
  googleToken: '',
  username: '',
  isLoggedIn: false,
  isLoggedOut: false,
  hasUsername: false,
  googleSignInRequestSent: false,
  unauthorized: false,
  createdUsername: false,
  createUsernameRequestSent: false,
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.GOOGLE_SIGN_IN:
      return {
        ...initialState,
        googleToken: action.googleToken,
        username: action.username,
        isLoggedIn: true,
        isLoggedOut: false,
        hasUsername: true,
        googleSignInRequestSent: true,
      }
    case types.GOOGLE_SIGN_OUT:
      return {
        ...initialState,
        isLoggedOut: true,
      }
    case types.UNAUTHORIZED:
      return {
        ...initialState,
        googleSignInRequestSent: true,
        unauthorized: true,
      }
    case types.NO_USERNAME:
      return {
        ...initialState,
        googleSignInRequestSent: true,
      }
    case types.CREATED_USERNAME_SUCCESS:
      return {
        ...state,
        createdUsername: true,
        createUsernameRequestSent: true,
      }
      case types.CREATED_USERNAME_FAIL:
      return {
        ...state,
        createdUsername: false,
        createUsernameRequestSent: true,
      }
      case types.RESET_USERNAME_REQUEST:
      return {
        ...state,
        createUsernameRequestSent: false,
      }
    default:
      return state;
  }
};

export default authReducer;
