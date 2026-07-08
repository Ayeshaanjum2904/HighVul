import actions from './actions';

const addSnackbar = (message, type = 'error', delay = 7000) => (dispatch) => {
  dispatch(actions.addSnackbar(message, type, delay));
};

const dismissSnackbar = (id) => (dispatch) => {
  dispatch(actions.dismissSnackbar(id));
};

export default {
  addSnackbar,
  dismissSnackbar,
};
