const PREFIX_LOADER = 'gruposDetalhe/LOADER';
const LOADER_START = `${PREFIX_LOADER}/LOADER_START`;
const LOADER_ERROR = `${PREFIX_LOADER}/LOADER_ERROR`;
const LOADER_SUCCESS = `${PREFIX_LOADER}/LOADER_SUCCESS`;
const ADD_LOADER = `${PREFIX_LOADER}/ADD_LOADER`;
const UPDATE_LOADER = `${PREFIX_LOADER}/UPDATE_LOADER`;

const addLoader = (loader) => ({
  type: ADD_LOADER,
  payload: { loader },
});

const updateLoader = (id, loadOp) => ({
  type: UPDATE_LOADER,
  payload: { id, loadOp },
});

const loaderStart = (id) => ({
  type: LOADER_START,
  payload: { id },
});

const loaderError = (id) => ({
  type: LOADER_ERROR,
  payload: { id },
});

const loaderSuccess = (id) => ({
  type: LOADER_SUCCESS,
  payload: { id },
});

export default {
  types: {
    PREFIX_LOADER,
    ADD_LOADER,
    UPDATE_LOADER,
    LOADER_START,
    LOADER_ERROR,
    LOADER_SUCCESS,
  },
  actions: {
    addLoader,
    updateLoader,
    loaderStart,
    loaderError,
    loaderSuccess,
  },
};
