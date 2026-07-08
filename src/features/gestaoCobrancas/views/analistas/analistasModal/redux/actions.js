const PREFIX_INSERT_ANALISTA = 'analistasModal/INSERT_ANALISTA';
const INSERT_ANALISTA_START = `${PREFIX_INSERT_ANALISTA}/START`;
const INSERT_ANALISTA_SUCCESS = `${PREFIX_INSERT_ANALISTA}/SUCCESS`;
const INSERT_ANALISTA_ERROR = `${PREFIX_INSERT_ANALISTA}/ERROR`;

const PREFIX_DELETE_ANALISTA = 'analistasModal/DELETE_ANALISTA';
const DELETE_ANALISTA_START = `${PREFIX_DELETE_ANALISTA}/START`;
const DELETE_ANALISTA_SUCCESS = `${PREFIX_DELETE_ANALISTA}/SUCCESS`;
const DELETE_ANALISTA_ERROR = `${PREFIX_DELETE_ANALISTA}/ERROR`;

const PREFIX_GET_ANALISTAS = 'analistasModal/GET_ANALISTAS';
const GET_ANALISTAS_START = `${PREFIX_GET_ANALISTAS}/START`;
const GET_ANALISTAS_SUCCESS = `${PREFIX_GET_ANALISTAS}/SUCCESS`;
const GET_ANALISTAS_ERROR = `${PREFIX_GET_ANALISTAS}/ERROR`;

const UPDATE_ANALISTA_PROPERTY = 'analistasModal/UPDATE_ANALISTA_PROPERTY';
const SET_SELECTED_MARCA = 'analistasModal/SET_SELECTED_MARCA';
const SET_SELECTED_REGIONAL = 'analistasModal/SET_SELECTED_REGIONAL';

const SET_MARCAS = 'analistasModal/SET_MARCAS';
const SET_REGIONAIS = 'analistasModal/SET_REGIONAIS';

const RESET_STORE = 'analistasModal/RESET_STORE';
const SET_MODAL_OPEN = 'analistasModal/SET_MODAL_OPEN';
const SET_MODAL_TYPE = 'analistasModal/SET_MODAL_TYPE';

const insertAnalistaStart = () => ({
  type: INSERT_ANALISTA_START,
});

const insertAnalistaError = (errors) => ({
  type: INSERT_ANALISTA_ERROR,
  payload: { errors },
});

const insertAnalistaSuccess = (analista) => ({
  type: INSERT_ANALISTA_SUCCESS,
  payload: { analista },
});

const deleteAnalistaStart = (id) => ({
  type: DELETE_ANALISTA_START,
  payload: { id },
});

const deleteAnalistaError = (id) => ({
  type: DELETE_ANALISTA_ERROR,
  payload: { id },
});

const deleteAnalistaSuccess = (id) => ({
  type: DELETE_ANALISTA_SUCCESS,
  payload: { id },
});

const getAnalistasStart = () => ({
  type: GET_ANALISTAS_START,
});

const getAnalistasError = () => ({
  type: GET_ANALISTAS_ERROR,
});

const getAnalistasSuccess = (analistas) => ({
  type: GET_ANALISTAS_SUCCESS,
  payload: { analistas },
});

const setModalOpen = (status) => ({
  type: SET_MODAL_OPEN,
  payload: { status },
});

const setModalType = (modal) => ({
  type: SET_MODAL_TYPE,
  payload: { modal },
});

const setMarcas = (marcas) => ({
  type: SET_MARCAS,
  payload: { marcas },
});

const setRegionais = (regionais) => ({
  type: SET_REGIONAIS,
  payload: { regionais },
});

const updateAnalistaProperty = (propertyName, value) => ({
  type: UPDATE_ANALISTA_PROPERTY,
  payload: { propertyName, value },
});

const setSelectedMarca = (marca) => ({
  type: SET_SELECTED_MARCA,
  payload: { marca },
});

const setSelectedRegional = (regional) => ({
  type: SET_SELECTED_REGIONAL,
  payload: { regional },
});

const resetStore = () => ({ type: RESET_STORE });

export default {
  types: {
    PREFIX_INSERT_ANALISTA,
    INSERT_ANALISTA_START,
    INSERT_ANALISTA_SUCCESS,
    INSERT_ANALISTA_ERROR,

    PREFIX_DELETE_ANALISTA,
    DELETE_ANALISTA_START,
    DELETE_ANALISTA_SUCCESS,
    DELETE_ANALISTA_ERROR,

    PREFIX_GET_ANALISTAS,
    GET_ANALISTAS_START,
    GET_ANALISTAS_ERROR,
    GET_ANALISTAS_SUCCESS,

    UPDATE_ANALISTA_PROPERTY,
    SET_SELECTED_MARCA,
    SET_SELECTED_REGIONAL,

    SET_MARCAS,
    SET_REGIONAIS,

    RESET_STORE,
    SET_MODAL_OPEN,
    SET_MODAL_TYPE,
  },

  insertAnalistaStart,
  insertAnalistaError,
  insertAnalistaSuccess,

  deleteAnalistaStart,
  deleteAnalistaError,
  deleteAnalistaSuccess,

  getAnalistasStart,
  getAnalistasSuccess,
  getAnalistasError,

  updateAnalistaProperty,
  setSelectedMarca,
  setSelectedRegional,

  setMarcas,
  setRegionais,

  setModalOpen,
  setModalType,
  resetStore,
};
