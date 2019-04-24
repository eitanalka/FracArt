import { connect } from 'react-redux';
import FractalTreeComponent from './FractalTreeComponent';
import { createOperations } from '../duck';

const mapStateToProps = state => ({
  googleToken: state.auth.googleToken,
  title: state.create.title,
  settings: state.create.settings,
});

const mapDispatchToProps = dispatch => ({
  saveFractal: (googleToken, title, settings) => {
    dispatch(createOperations.saveFractal(googleToken, title, settings));
  },
  getFractal: id => {
    dispatch(createOperations.getFractal(id));
  },
  resetSettings: () => {
    dispatch(createOperations.resetSettings());
  }
});

const FractalTreeContainer = connect(mapStateToProps, mapDispatchToProps)(FractalTreeComponent);

export default FractalTreeContainer;
