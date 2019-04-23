import axios from 'axios';
import actions from './actions';
import { history } from '../../App';

const saveFractal = (googleToken, title, settings) => {
  return async dispatch => {
    try {
      let response = await axios.post(`${process.env.REACT_APP_API_URL}/fractal/`, {
        title,
        settings,
      }, {
        headers: { Authorization: googleToken }
      });
      history.push(`/create/tree/${response.data.id}`);
    } catch (error) {
      console.log(error);
      // error handling here
    }
  }
};

const getFractal = id => {
  return async dispatch => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/fractal/${id}`);
      dispatch(actions.getFractalSuccess(response.data));
    } catch (error) {
      // error handling here
    }
  }
}

export default {
  saveFractal,
  getFractal,
};
