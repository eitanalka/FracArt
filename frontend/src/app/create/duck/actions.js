import types from './types';

const getFractalSuccess = ({title, settings}) => ({
  type: types.GET_FRACTAL_SUCCESS,
  title,
  settings,
});

export default  {
  getFractalSuccess,
};
