import types from './types';

const getFractalSuccess = ({title, settings}) => ({
  type: types.GET_FRACTAL_SUCCESS,
  title,
  settings,
});

const saveFractalSuccess = ({title, settings}) => ({
  type: types.SAVE_FRACTAL_SUCCESS,
  title,
  settings,
});

const resetSettings = () => ({
  type: types.RESET_SETTINGS,
})

export default  {
  getFractalSuccess,
  saveFractalSuccess,
  resetSettings,
};
