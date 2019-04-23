import { connect } from 'react-redux';
import ProfileComponent from './ProfileComponent';
import { profileOperations } from './duck';

const mapStateToProps = state => ({
  googleToken: state.auth.googleToken,
  username: state.auth.username,
  fractals: state.profile.fractals
});

const mapDispatchToProps = dispatch => ({
  getFractals: (googleToken, username) => {
    dispatch(profileOperations.getFractals(googleToken, username));
  },
});

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);

export default ProfileContainer;
