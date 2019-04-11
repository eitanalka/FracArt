import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { authOperations } from '../duck';

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  hasUsername: state.auth.hasUsername,
  googleSignInRequestSent: state.auth.googleSignInRequestSent,
  createdUsername: state.auth.createdUsername,
  createUsernameRequestSent: state.auth.createUsernameRequestSent,
});

const mapDispatchToProps = dispatch => ({
  googleSignIn: googleToken => {
    dispatch(authOperations.googleSignIn(googleToken));
  },
  createUsername: (username, googleToken) => {
    dispatch(authOperations.createUsername(username, googleToken));
  },
  resetUsernameRequest: () => {
    dispatch(authOperations.resetUsernameRequest());
  },
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export default HomeContainer;
