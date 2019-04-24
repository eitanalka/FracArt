import axios from 'axios';
import actions from './actions';
import { history } from '../../App';

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

const saveFractal = (googleToken, title, settings) => {
  return async dispatch => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/fractal/`, {
        title,
        settings,
      }, {
        headers: { Authorization: googleToken }
      });
      dispatch(actions.saveFractalSuccess(response.data));
      history.push(`/create/${response.data.settings.type}/${response.data.id}`);
    } catch (error) {
      console.log(error);
      // error handling here
    }
  }
};

const resetSettings = () => dispatch =>
  dispatch(actions.resetSettings());

export default {
  saveFractal,
  getFractal,
  resetSettings,
};
