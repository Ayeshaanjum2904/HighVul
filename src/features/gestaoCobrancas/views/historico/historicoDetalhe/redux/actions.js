const PREFIX = 'historicoDetalhe';

const LOADING_DETALHE_START = `${PREFIX}/LOADING_DETALHE_START`;

const LOADING_DETALHE_SUCCESS = `${PREFIX}/LOADING_DETALHE_SUCCESS`;

const LOADING_DETALHE_ERROR = `${PREFIX}/LOADING_DETALHE_ERROR`;

const SET_MODAL_OPEN = `${PREFIX}/SET_MODAL_OPEN`;

const SET_MODAL_CLOSE = `${PREFIX}/SET_MODAL_CLOSE`;

const RESET_STORE = `${PREFIX}/RESET_STORE`;

const loadingStart = () => ({
  type: LOADING_DETALHE_START,
});

const loadingSuccess = (details) => ({
  type: LOADING_DETALHE_SUCCESS,
  payload: { details },
});

const loadingError = () => ({
  type: LOADING_DETALHE_ERROR,
});

const setModalOpen = (idEmail) => ({
  type: SET_MODAL_OPEN,
  payload: { idEmail },
});

const setModalClose = () => ({
  type: SET_MODAL_CLOSE,
});

const resetStore = () => ({
  type: RESET_STORE,
});

export default {
  types: {
    LOADING_DETALHE_ERROR,
    LOADING_DETALHE_START,
    LOADING_DETALHE_SUCCESS,
    SET_MODAL_OPEN,
    SET_MODAL_CLOSE,
    RESET_STORE,
  },
  loadingError,
  loadingStart,
  loadingSuccess,
  resetStore,
  setModalOpen,
  setModalClose,
};
