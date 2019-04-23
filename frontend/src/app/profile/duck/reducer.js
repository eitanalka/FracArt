import types from './types';

const initialState = {
  fractals: [],
};

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_FRACTALS_SUCCESS:
      return {
        fractals: action.fractals,
      }
    default: 
      return state;
  }
}

export default profileReducer;
