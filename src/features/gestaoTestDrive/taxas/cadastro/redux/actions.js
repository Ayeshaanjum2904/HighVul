const PREFIX = 'taxaCadastro';

const RESET_STORE = `${PREFIX}/RESET_STORE`;
const SET_INPUT_DATA = `${PREFIX}/SET_INPUT_DATA`;
const POST_CADASTRO_START = `${PREFIX}/POST_CADASTRO_START`;
const POST_CADASTRO_SUCCESS = `${PREFIX}/POST_CADASTRO_SUCCESS`;
const POST_CADASTRO_ERROR = `${PREFIX}/POST_CADASTRO_ERROR`;
const SET_MODAL_OPEN = `${PREFIX}/SET_MODAL_OPEN`;
const SET_FORM_OPEN = `${PREFIX}/SET_FORM_OPEN`;
const SET_ALERTA = `${PREFIX}/SET_ALERTA`;
const CLEAR_FORM = `${PREFIX}/CLEAR_FORM`;
const CLEAR_SELECTORS = `${PREFIX}/CLEAR_SELECTORS`;
const DELETE_START = `${PREFIX}/DELETE_START`;
const REMOVE_TAXA_CADASTRADA = `${PREFIX}/REMOVE_TAXA_CADASTRADA`;
const DELETE_ERROR = `${PREFIX}/DELETE_ERROR`;
const CLEAR_COM_FUNDO = `${PREFIX}/CLEAR_COM_FUNDO`;

const DISMISS_SNACKBAR = `${PREFIX}/DISMISS_SNACKBAR`;
const ADD_SNACKBAR = `${PREFIX}/ADD_SNACKBAR`;
const SET_RESET_STATE = `${PREFIX}/SET_RESET_STATE`;

const resetStore = () => ({
  type: RESET_STORE,
});

const setInputData = (paramName, value) => ({
  type: SET_INPUT_DATA,
  payload: { paramName, value },
});

const clearComFundo = () => ({
  type: CLEAR_COM_FUNDO,
});

const postCadastroStart = () => ({
  type: POST_CADASTRO_START,
});

const postCadastroSuccess = (taxaCadastro) => ({
  type: POST_CADASTRO_SUCCESS,
  payload: { taxaCadastro },

});

const addSnackbar = (message, type) => ({
  type: ADD_SNACKBAR,
  payload: { message, type },
});

const dismissSnackbar = (id) => ({
  type: DISMISS_SNACKBAR,
  payload: { id },
});

const postCadastroError = () => ({
  type: POST_CADASTRO_ERROR,
});

const setModalOpen = (status) => ({
  type: SET_MODAL_OPEN,
  payload: { status },
});

const setFormOpen = (status) => ({
  type: SET_FORM_OPEN,
  payload: { status },
});

const setAlerta = (status) => ({
  type: SET_ALERTA,
  payload: { status },
});

const clearForm = () => ({
  type: CLEAR_FORM,
});

const clearSelectors = () => ({
  type: CLEAR_SELECTORS,
});

const deleteStart = () => ({
  type: DELETE_START,
});

const removeFromTaxaCadastrada = (taxa) => ({
  type: REMOVE_TAXA_CADASTRADA,
  payload: taxa,
});

const deleteError = (taxa) => ({
  type: DELETE_ERROR,
  payload: taxa,
});

const setResetState = (status) => ({
  type: SET_RESET_STATE,
  payload: { status },
});

export default {
  types: {
    POST_CADASTRO_START,
    POST_CADASTRO_SUCCESS,
    POST_CADASTRO_ERROR,
    RESET_STORE,
    SET_INPUT_DATA,
    SET_MODAL_OPEN,
    SET_FORM_OPEN,
    SET_ALERTA,
    CLEAR_FORM,
    CLEAR_SELECTORS,
    ADD_SNACKBAR,
    DISMISS_SNACKBAR,
    DELETE_START,
    REMOVE_TAXA_CADASTRADA,
    DELETE_ERROR,
    CLEAR_COM_FUNDO,
    SET_RESET_STATE,
  },
  setInputData,
  postCadastroStart,
  postCadastroSuccess,
  postCadastroError,
  resetStore,
  setModalOpen,
  setFormOpen,
  setAlerta,
  clearForm,
  clearSelectors,
  addSnackbar,
  dismissSnackbar,
  deleteStart,
  removeFromTaxaCadastrada,
  deleteError,
  clearComFundo,
  setResetState,
};
