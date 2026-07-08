import actionsGetFilters from './actionsGetFilters';
import actionsSetFilters from './actionsSetFilters';

const PREFIX_LOADER = 'dashboardPage/LOADER';
const LOADER_START = `${PREFIX_LOADER}/LOADER_START`;
const LOADER_ERROR = `${PREFIX_LOADER}/LOADER_ERROR`;
const LOADER_SUCCESS = `${PREFIX_LOADER}/LOADER_SUCCESS`;

const ADD_LOADER = 'dashboardPage/ADD_LOADER';
const UPDATE_LOADER = 'dashboardPage/UPDATE_LOADER';
const START_LOADER = 'dashboardPage/START_LOADER';
const ERROR_LOADER = 'dashboardPage/ERROR_LOADER';
const RESET_STORE = 'dashboardPage/RESET_STORE';

const SET_COLLAPSE_REGIONAIS_OPEN = 'dashboardPage/SET_COLLAPSE_REGIONAIS_OPEN';
const SET_COLLAPSE_CONCESSIONARIAS_OPEN = 'dashboardPage/SET_COLLAPSE_CONCESSIONARIAS_OPEN';

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

const resetStore = () => ({
  type: RESET_STORE,
});

const startLoader = () => ({
  type: START_LOADER,
});

const errorLoader = () => ({
  type: ERROR_LOADER,
});

const setCollapseRegionaisOpen = (open) => ({
  type: SET_COLLAPSE_REGIONAIS_OPEN,
  payload: { open },
});

const setCollapseConcessionariasOpen = (open) => ({
  type: SET_COLLAPSE_CONCESSIONARIAS_OPEN,
  payload: { open },
});

export default {
  types: {
    ...actionsGetFilters.types,
    ...actionsSetFilters.types,

    SET_COLLAPSE_REGIONAIS_OPEN,
    SET_COLLAPSE_CONCESSIONARIAS_OPEN,

    PREFIX_LOADER,
    LOADER_START,
    LOADER_ERROR,
    LOADER_SUCCESS,

    ADD_LOADER,
    UPDATE_LOADER,
    START_LOADER,
    RESET_STORE,
    ERROR_LOADER,
  },
  ...actionsGetFilters.actions,
  ...actionsSetFilters.actions,

  setCollapseRegionaisOpen,
  setCollapseConcessionariasOpen,

  loaderStart,
  loaderError,
  loaderSuccess,

  addLoader,
  updateLoader,
  startLoader,
  errorLoader,
  resetStore,

};
