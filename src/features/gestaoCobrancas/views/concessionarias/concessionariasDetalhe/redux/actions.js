const PREFIX = 'concessionariasDetalhe';

const SET_CONCESSIONARIA = `${PREFIX}/SET_CONCESSIONARIA`;

const SET_IS_DISABLED = `${PREFIX}/SET_IS_DISABLED`;

const SET_UPDATE_DATA = `${PREFIX}/SET_UPDATE_DATA`;

const SET_LOADING_START = `${PREFIX}/SET_LOADING_START`;

const SET_LOADING_ERROR = `${PREFIX}/SET_LOADING_ERROR`;

const SET_LOADING_SUCESS = `${PREFIX}/SET_LOADING_SUCESS`;

const SET_UPDATE_START = `${PREFIX}/SET_UPDATE_START`;

const SET_UPDATE_ERROR = `${PREFIX}/SET_UPDATE_ERROR`;

const SET_UPDATE_SUCESS = `${PREFIX}/SET_UPDATE_SUCESS`;

const RESET_SNACK_BAR = `${PREFIX}/RESET_SNACK_BAR`;

const RESET_STORE = `${PREFIX}/RESET_STORE`;

const setConcessionaria = (value) => ({
  type: SET_CONCESSIONARIA,
  payload: { value },
});

const setLoadingStart = () => ({
  type: SET_LOADING_START,
});

const setLoadingError = () => ({
  type: SET_LOADING_ERROR,
});

const setLoadingSuccess = () => ({
  type: SET_LOADING_SUCESS,
});

const setUpdateStart = () => ({
  type: SET_UPDATE_START,
});

const setUpdateError = (errors) => ({
  type: SET_UPDATE_ERROR,
  payload: { errors },
});

const setUpdateSuccess = (concessionaria) => ({
  type: SET_UPDATE_SUCESS,
  payload: { concessionaria },

});

const setUpdateData = (paramName, value) => ({
  type: SET_UPDATE_DATA,
  payload: { paramName, value },
});

const setIsDisabled = (value) => ({
  type: SET_IS_DISABLED,
  payload: { value },
});

const resetSnackBar = (id) => ({
  type: RESET_SNACK_BAR,
  payload: { id },
});

const resetStore = () => ({
  type: RESET_STORE,
});

export default {
  types: {
    RESET_SNACK_BAR,
    RESET_STORE,
    SET_CONCESSIONARIA,
    SET_IS_DISABLED,
    SET_UPDATE_DATA,
    SET_LOADING_ERROR,
    SET_LOADING_START,
    SET_LOADING_SUCESS,
    SET_UPDATE_ERROR,
    SET_UPDATE_START,
    SET_UPDATE_SUCESS,
  },
  resetStore,
  resetSnackBar,
  setConcessionaria,
  setIsDisabled,
  setUpdateData,
  setLoadingError,
  setLoadingStart,
  setLoadingSuccess,
  setUpdateStart,
  setUpdateError,
  setUpdateSuccess,
};
