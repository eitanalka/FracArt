import types from './types';

const getFractalsSuccess = fractals => ({
  type: types.GET_FRACTALS_SUCCESS,
  fractals,
});

export default {
  getFractalsSuccess,
}