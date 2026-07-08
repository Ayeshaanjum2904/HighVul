const PREFIX_UPDATE_CONCESSIONARIA = 'gruposDetalhe/UPDATE_CONCESSIONARIA';
const UPDATE_CONCESSIONARIA_START = `${PREFIX_UPDATE_CONCESSIONARIA}/START`;
const UPDATE_CONCESSIONARIA_SUCCESS = `${PREFIX_UPDATE_CONCESSIONARIA}/SUCCESS`;
const UPDATE_CONCESSIONARIA_ERROR = `${PREFIX_UPDATE_CONCESSIONARIA}/ERROR`;
const DELETE_CONCESSIONARIA = `${PREFIX_UPDATE_CONCESSIONARIA}/DELETE_CONCESSIONARIA`;
const ASSOCIAR_CONCESSIONARIA = `${PREFIX_UPDATE_CONCESSIONARIA}/ASSOCIAR_CONCESSIONARIA`;
const DESASSOCIAR_CONCESSIONARIA = `${PREFIX_UPDATE_CONCESSIONARIA}/DESASSOCIAR_CONCESSIONARIA`;
const SET_DETAILS_CONCESSIONARIA_OPEN = `${PREFIX_UPDATE_CONCESSIONARIA}/SET_DETAILS_CONCESSIONARIA_OPEN`;
const SET_CONCESSIONARIA = `${PREFIX_UPDATE_CONCESSIONARIA}/SET_CONCESSIONARIA`;
const SET_ASSOCIACIAR_CONCESSIONARIA_OPEN = `${PREFIX_UPDATE_CONCESSIONARIA}/SET_ASSOCIACIAR_CONCESSIONARIA_OPEN`;
const ADD_CONCESSIONARIAS = `${PREFIX_UPDATE_CONCESSIONARIA}/ADD_CONCESSIONARIAS`;

const updateConcessionariaStart = () => ({
  type: UPDATE_CONCESSIONARIA_START,
});

const updateConcessionariaError = () => ({
  type: UPDATE_CONCESSIONARIA_ERROR,
});

const updateConcessionariaSuccess = (concessionaria) => ({
  type: UPDATE_CONCESSIONARIA_SUCCESS,
  payload: { concessionaria },
});

const deleteConcessionaria = (id) => ({
  type: DELETE_CONCESSIONARIA,
  payload: { id },
});

const setDetailsConcessionariaOpen = (value, concessionaria = null) => ({
  type: SET_DETAILS_CONCESSIONARIA_OPEN,
  payload: { value, concessionaria },
});

const setAssociarConcessionariaOpen = (value) => ({
  type: SET_ASSOCIACIAR_CONCESSIONARIA_OPEN,
  payload: { value },
});

const setConcessionaria = (concessionaria = null) => ({
  type: SET_CONCESSIONARIA,
  payload: { concessionaria },
});

const associarConcessionaria = (concessionaria) => ({
  type: ASSOCIAR_CONCESSIONARIA,
  payload: { concessionaria },
});

const addConcessionarias = (concessionarias) => ({
  type: ADD_CONCESSIONARIAS,
  payload: { concessionarias },
});

const desassociarConcessionaria = (id) => ({
  type: DESASSOCIAR_CONCESSIONARIA,
  payload: { id },
});

export default {
  types: {
    PREFIX_UPDATE_CONCESSIONARIA,
    UPDATE_CONCESSIONARIA_START,
    UPDATE_CONCESSIONARIA_SUCCESS,
    UPDATE_CONCESSIONARIA_ERROR,
    DELETE_CONCESSIONARIA,
    ASSOCIAR_CONCESSIONARIA,
    DESASSOCIAR_CONCESSIONARIA,
    SET_DETAILS_CONCESSIONARIA_OPEN,
    SET_CONCESSIONARIA,
    SET_ASSOCIACIAR_CONCESSIONARIA_OPEN,
    ADD_CONCESSIONARIAS,
  },
  actions: {
    updateConcessionariaStart,
    updateConcessionariaError,
    updateConcessionariaSuccess,
    deleteConcessionaria,
    associarConcessionaria,
    desassociarConcessionaria,
    setDetailsConcessionariaOpen,
    setConcessionaria,
    setAssociarConcessionariaOpen,
    addConcessionarias,
  },
};
