import types from './authTypes';

const initialState = {
  googleToken: '',
  isLoggedIn: false,
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
        isLoggedIn: true,
        hasUsername: true,
        googleSignInRequestSent: true,
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
