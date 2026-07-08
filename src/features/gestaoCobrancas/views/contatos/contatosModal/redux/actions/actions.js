import actionsEmail from './actionsValidate';

const PREFIX_SEND_CONTATO = 'contatosModal/SEND_CONTATO';
const SEND_CONTATO_START = `${PREFIX_SEND_CONTATO}/START`;
const SEND_CONTATO_SUCCESS = `${PREFIX_SEND_CONTATO}/SUCCESS`;
const SEND_CONTATO_ERROR = `${PREFIX_SEND_CONTATO}/ERROR`;
const REMOVE_ERROR = `${PREFIX_SEND_CONTATO}/REMOVE_ERROR`;

const SET_PAPEIS = 'contatosModal/SET_PAPEIS';
const UPDATE_CONTATO_PROPERTY = 'contatosModal/UPDATE_CONTATO_PROPERTY';
const SET_PAPEL = 'contatosModal/SET_PAPEL';
const SET_CONTATO = 'contatosModal/SET_CONTATO';

const RESET_STORE = 'contatosModal/RESET_STORE';
const SET_MODAL_OPEN = 'contatosModal/SET_MODAL_OPEN';

const sendContatoStart = () => ({
  type: SEND_CONTATO_START,
});

const sendContatoError = (errors) => ({
  type: SEND_CONTATO_ERROR,
  payload: { errors },
});

const sendContatoSuccess = () => ({
  type: SEND_CONTATO_SUCCESS,
});

const setPapeis = (papeis) => ({
  type: SET_PAPEIS,
  payload: { papeis },
});

const setContato = (contato) => ({
  type: SET_CONTATO,
  payload: { contato },
});

const setPapel = (papel) => ({
  type: SET_PAPEL,
  payload: { papel },
});

const setModal = (status) => ({
  type: SET_MODAL_OPEN,
  payload: { status },
});

const updateContatoProperty = (propertyName, value) => ({
  type: UPDATE_CONTATO_PROPERTY,
  payload: { propertyName, value },
});

const removeError = (name, index) => ({
  type: REMOVE_ERROR,
  payload: { name, index },
});

const resetStore = () => ({ type: RESET_STORE });

export default {
  types: {
    PREFIX_SEND_CONTATO,
    SEND_CONTATO_START,
    SEND_CONTATO_SUCCESS,
    SEND_CONTATO_ERROR,
    REMOVE_ERROR,

    SET_PAPEIS,
    UPDATE_CONTATO_PROPERTY,
    SET_PAPEL,
    SET_CONTATO,

    RESET_STORE,
    SET_MODAL_OPEN,

    ...actionsEmail.types,
  },

  sendContatoError,
  sendContatoStart,
  sendContatoSuccess,
  removeError,

  setPapeis,
  updateContatoProperty,
  setPapel,
  setContato,

  resetStore,
  setModal,

  ...actionsEmail.actions,
};
