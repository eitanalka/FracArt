import { connect } from 'react-redux';
import HeaderComponent from './HeaderComponent';
import { authOperations } from './../../duck';

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  googleSignIn: googleToken => {
    dispatch(authOperations.googleSignIn(googleToken));
  },
  googleSignOut: () => {
    dispatch(authOperations.googleSignOut());
  },
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderComponent);

export default HeaderContainer;
