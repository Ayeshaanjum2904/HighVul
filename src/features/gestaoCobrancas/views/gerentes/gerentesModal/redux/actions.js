const PREFIX_INSERT_GERENTE = 'gerentesModal/INSERT_GERENTE';
const INSERT_GERENTE_START = `${PREFIX_INSERT_GERENTE}/START`;
const INSERT_GERENTE_SUCCESS = `${PREFIX_INSERT_GERENTE}/SUCCESS`;
const INSERT_GERENTE_ERROR = `${PREFIX_INSERT_GERENTE}/ERROR`;

const PREFIX_DELETE_GERENTE = 'gerentesModal/DELETE_GERENTE';
const DELETE_GERENTE_START = `${PREFIX_DELETE_GERENTE}/START`;
const DELETE_GERENTE_SUCCESS = `${PREFIX_DELETE_GERENTE}/SUCCESS`;
const DELETE_GERENTE_ERROR = `${PREFIX_DELETE_GERENTE}/ERROR`;

const PREFIX_GET_GERENTES = 'gerentesModal/GET_GERENTES';
const GET_GERENTES_START = `${PREFIX_GET_GERENTES}/START`;
const GET_GERENTES_SUCCESS = `${PREFIX_GET_GERENTES}/SUCCESS`;
const GET_GERENTES_ERROR = `${PREFIX_GET_GERENTES}/ERROR`;

const UPDATE_GERENTE_PROPERTY = 'gerentesModal/UPDATE_GERENTE_PROPERTY';
const SET_SELECTED_MARCA = 'gerentesModal/SET_SELECTED_MARCA';
const SET_SELECTED_REGIONAL = 'gerentesModal/SET_SELECTED_REGIONAL';

const SET_MARCAS = 'gerentesModal/SET_MARCAS';
const SET_REGIONAIS = 'gerentesModal/SET_REGIONAIS';

const RESET_STORE = 'gerentesModal/RESET_STORE';
const SET_MODAL_OPEN = 'gerentesModal/SET_MODAL_OPEN';
const SET_MODAL_TYPE = 'gerentesModal/SET_MODAL_TYPE';

const insertGerenteStart = () => ({
  type: INSERT_GERENTE_START,
});

const insertGerenteError = (errors) => ({
  type: INSERT_GERENTE_ERROR,
  payload: { errors },
});

const insertGerenteSuccess = (gerente) => ({
  type: INSERT_GERENTE_SUCCESS,
  payload: { gerente },
});

const deleteGerenteStart = (id) => ({
  type: DELETE_GERENTE_START,
  payload: { id },
});

const deleteGerenteError = (id) => ({
  type: DELETE_GERENTE_ERROR,
  payload: { id },
});

const deleteGerenteSuccess = (id) => ({
  type: DELETE_GERENTE_SUCCESS,
  payload: { id },
});

const getGerentesStart = () => ({
  type: GET_GERENTES_START,
});

const getGerentesError = () => ({
  type: GET_GERENTES_ERROR,
});

const getGerentesSuccess = (gerentes) => ({
  type: GET_GERENTES_SUCCESS,
  payload: { gerentes },
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

const updateGerenteProperty = (propertyName, value) => ({
  type: UPDATE_GERENTE_PROPERTY,
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
    PREFIX_INSERT_GERENTE,
    INSERT_GERENTE_START,
    INSERT_GERENTE_SUCCESS,
    INSERT_GERENTE_ERROR,

    PREFIX_DELETE_GERENTE,
    DELETE_GERENTE_START,
    DELETE_GERENTE_SUCCESS,
    DELETE_GERENTE_ERROR,

    PREFIX_GET_GERENTES,
    GET_GERENTES_START,
    GET_GERENTES_ERROR,
    GET_GERENTES_SUCCESS,

    UPDATE_GERENTE_PROPERTY,
    SET_SELECTED_MARCA,
    SET_SELECTED_REGIONAL,

    SET_MARCAS,
    SET_REGIONAIS,

    RESET_STORE,
    SET_MODAL_OPEN,
    SET_MODAL_TYPE,
  },

  insertGerenteStart,
  insertGerenteError,
  insertGerenteSuccess,

  deleteGerenteStart,
  deleteGerenteError,
  deleteGerenteSuccess,

  getGerentesStart,
  getGerentesSuccess,
  getGerentesError,

  updateGerenteProperty,
  setSelectedMarca,
  setSelectedRegional,

  setMarcas,
  setRegionais,

  setModalOpen,
  setModalType,
  resetStore,
};
