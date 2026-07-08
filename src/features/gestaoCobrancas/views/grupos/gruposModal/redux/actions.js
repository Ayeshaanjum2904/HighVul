const PREFIX_INSERT_GRUPO = 'gruposModal/INSERT_GRUPO';
const INSERT_GRUPO_START = `${PREFIX_INSERT_GRUPO}/START`;
const INSERT_GRUPO_SUCCESS = `${PREFIX_INSERT_GRUPO}/SUCCESS`;
const INSERT_GRUPO_ERROR = `${PREFIX_INSERT_GRUPO}/ERROR`;

const SET_MARCAS = 'gruposModal/SET_MARCAS';
const SET_REGIONAIS = 'gruposModal/SET_REGIONAIS';
const UPDATE_GRUPO_PROPERTY = 'gruposModal/UPDATE_GRUPO_PROPERTY';

const RESET_STORE = 'gruposModal/RESET_STORE';
const SET_MODAL_OPEN = 'gruposModal/SET_MODAL_OPEN';

const insertGrupoStart = () => ({
  type: INSERT_GRUPO_START,
});

const insertGrupoError = (errors) => ({
  type: INSERT_GRUPO_ERROR,
  payload: { errors },
});

const insertGrupoSuccess = () => ({
  type: INSERT_GRUPO_SUCCESS,
});

const setMarcas = (marcas) => ({
  type: SET_MARCAS,
  payload: { marcas },
});

const setRegionais = (regionais) => ({
  type: SET_REGIONAIS,
  payload: { regionais },
});

const setModal = (status) => ({
  type: SET_MODAL_OPEN,
  payload: { status },
});

const updateGrupoProperty = (propertyName, value) => ({
  type: UPDATE_GRUPO_PROPERTY,
  payload: { propertyName, value },
});

const resetStore = () => ({ type: RESET_STORE });

export default {
  types: {

    PREFIX_INSERT_GRUPO,
    INSERT_GRUPO_START,
    INSERT_GRUPO_SUCCESS,
    INSERT_GRUPO_ERROR,

    SET_MARCAS,
    SET_REGIONAIS,
    UPDATE_GRUPO_PROPERTY,

    RESET_STORE,
    SET_MODAL_OPEN,
  },

  insertGrupoError,
  insertGrupoStart,
  insertGrupoSuccess,

  setMarcas,
  setRegionais,
  updateGrupoProperty,

  resetStore,
  setModal,
};
