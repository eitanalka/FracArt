import axios from 'axios';
import actions from './actions';

const getFractals = (googleToken, username) => {
  return async dispatch => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/fractal?username=${username}`);
      dispatch(actions.getFractalsSuccess(response.data));
    } catch (error) {
      // error handling her
    }
  }
};

export default {
  getFractals,
};
