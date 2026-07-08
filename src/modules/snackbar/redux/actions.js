const ADD_SNACKBAR = 'snackbar/ADD_SNACKBAR';
const DISMISS_SNACKBAR = 'snackbar/DISMISS_SNACKBAR';

const addSnackbar = (message, type = 'error', delay = 7000) => ({
  type: ADD_SNACKBAR,
  payload: { message, type, delay },
});

const dismissSnackbar = (id) => ({
  type: DISMISS_SNACKBAR,
  payload: { id },
});

export default {
  types: {
    ADD_SNACKBAR,
    DISMISS_SNACKBAR,
  },
  addSnackbar,
  dismissSnackbar,
};
