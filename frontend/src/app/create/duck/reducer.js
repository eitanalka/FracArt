import types from './types';

const initialState = {
  title: '',
  settings: {},
};

const createReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_FRACTAL_SUCCESS:
      return {
        ...initialState,
        title: action.title,
        settings: action.settings,
      }
    default:
      return state;
  }
};

export default createReducer;
