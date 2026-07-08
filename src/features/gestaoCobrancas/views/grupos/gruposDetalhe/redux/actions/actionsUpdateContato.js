const PREFIX_UPDATE_CONTATO = 'gruposDetalhe/UPDATE_CONTATO';
const UPDATE_CONTATO_START = `${PREFIX_UPDATE_CONTATO}/START`;
const UPDATE_CONTATO_SUCCESS = `${PREFIX_UPDATE_CONTATO}/SUCCESS`;
const UPDATE_CONTATO_ERROR = `${PREFIX_UPDATE_CONTATO}/ERROR`;
const DELETE_CONTATO = `${PREFIX_UPDATE_CONTATO}/DELETE_CONTATO`;
const ASSOCIAR_CONTATO = `${PREFIX_UPDATE_CONTATO}/ASSOCIAR_CONTATO`;
const DESASSOCIAR_CONTATO = `${PREFIX_UPDATE_CONTATO}/DESASSOCIAR_CONTATO`;
const SET_CONTATO_ID = `${PREFIX_UPDATE_CONTATO}/SET_CONTATO_ID`;
const SET_ASSOCIACAR_CONTATO_OPEN = `${PREFIX_UPDATE_CONTATO}/SET_ASSOCIACAR_CONTATO_OPEN`;
const SET_CONTATOS_ASSOCIACAO = `${PREFIX_UPDATE_CONTATO}/SET_CONTATOS_ASSOCIACAO`;
const ADD_CONTATOS_TO_LIST = `${PREFIX_UPDATE_CONTATO}/ADD_CONTATOS_TO_LIST`;
const UPDATE_CONTATO = `${PREFIX_UPDATE_CONTATO}/UPDATE_CONTATO`;
const ADD_CONTATO_TO_SELECTOR = `${PREFIX_UPDATE_CONTATO}/ADD_CONTATO_TO_SELECTOR`;

const updateContatoStart = () => ({
  type: UPDATE_CONTATO_START,
});

const updateContatoError = (errors) => ({
  type: UPDATE_CONTATO_ERROR,
  payload: { errors },
});

const updateContatoSuccess = (contato) => ({
  type: UPDATE_CONTATO_SUCCESS,
  payload: { contato },
});

const deleteContato = (id) => ({
  type: DELETE_CONTATO,
  payload: { id },
});

const setContatosAssociacao = (contatos) => ({
  type: SET_CONTATOS_ASSOCIACAO,
  payload: { contatos },
});

const setAssociacarContatoOpen = (value) => ({
  type: SET_ASSOCIACAR_CONTATO_OPEN,
  payload: { value },
});

const setContatoId = (id) => ({
  type: SET_CONTATO_ID,
  payload: { id },
});

const associarContato = (contatos) => ({
  type: ASSOCIAR_CONTATO,
  payload: { contatos },
});

const addContatosToList = (contatos) => ({
  type: ADD_CONTATOS_TO_LIST,
  payload: { contatos },
});

const addContatoToSelector = (contato) => ({
  type: ADD_CONTATO_TO_SELECTOR,
  payload: { contato },
});

const desassociarContato = (id) => ({
  type: DESASSOCIAR_CONTATO,
  payload: { id },
});

const updateContato = (contato) => ({
  type: UPDATE_CONTATO,
  payload: { contato },
});

export default {
  types: {
    PREFIX_UPDATE_CONTATO,
    UPDATE_CONTATO_START,
    UPDATE_CONTATO_SUCCESS,
    UPDATE_CONTATO_ERROR,
    DELETE_CONTATO,
    ASSOCIAR_CONTATO,
    DESASSOCIAR_CONTATO,
    SET_CONTATO_ID,
    SET_ASSOCIACAR_CONTATO_OPEN,
    SET_CONTATOS_ASSOCIACAO,
    ADD_CONTATOS_TO_LIST,
    ADD_CONTATO_TO_SELECTOR,
    UPDATE_CONTATO,
  },
  actions: {
    updateContatoStart,
    updateContatoError,
    updateContatoSuccess,
    deleteContato,
    associarContato,
    desassociarContato,
    setContatoId,
    setAssociacarContatoOpen,
    setContatosAssociacao,
    addContatosToList,
    addContatoToSelector,
    updateContato,
  },
};
