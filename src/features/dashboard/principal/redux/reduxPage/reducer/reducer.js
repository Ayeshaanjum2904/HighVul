import { reduceGetFilters, INITIAL_STATE_GET_FILTERS } from './reducerGetFilters';
import { reduceSetFilters, INITIAL_STATE_SET_FILTERS } from './reducerSetFilters';

import { applyToLoader } from '../../reducerUtils';

import actions from '../actions/actions';

const INITIAL_STATE = {
  ...INITIAL_STATE_SET_FILTERS,
  ...INITIAL_STATE_GET_FILTERS,

  dataLoader: [],
  isCollapseRegionaisOpen: false,
  isCollapseConcessionariasOpen: false,
};

const reduceLoadData = (state, action) => {
  switch (action.type) {
    case actions.types.LOADER_START:
      return {
        ...state,
        dataLoader: applyToLoader(
          state.dataLoader,
          action.payload.id,
          (l) => ({
            ...l,
            isError: false,
            isLoading: true,
            isReady: false,
          }),
        ),
      };
    case actions.types.LOADER_ERROR:
      return {
        ...state,
        dataLoader: applyToLoader(
          state.dataLoader,
          action.payload.id,
          (l) => ({
            ...l,
            isError: true,
            isLoading: false,
            isReady: false,
          }),
        ),
      };
    case actions.types.LOADER_SUCCESS:
      return {
        ...state,
        dataLoader: applyToLoader(
          state.dataLoader,
          action.payload.id,
          (l) => ({
            ...l,
            isError: false,
            isLoading: false,
            isReady: true,
          }),
        ),
      };
    default:
      return state;
  }
};

export default (state = INITIAL_STATE, action = { type: '@@dashboardPage/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_SET_FILTERS)) {
    return reduceSetFilters(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_GET_FILTERS)) {
    return reduceGetFilters(state, action);
  }

  if (action.type.startsWith(actions.types.PREFIX_LOADER)) {
    return reduceLoadData(state, action);
  }
  switch (action.type) {
    case actions.types.ADD_LOADER:
      return {
        ...state,
        dataLoader: [...state.dataLoader, action.payload.loader],
      };
    case actions.types.UPDATE_LOADER:
      return {
        ...state,
        dataLoader: applyToLoader(
          state.dataLoader,
          action.payload.id,
          (l) => ({
            ...l,
            loadOp: action.payload.loadOp,
            isError: false,
            isLoading: false,
            isReady: false,
          }),
        ),
      };

    case actions.types.START_LOADER:
      return {
        ...state,
        dataLoader: state.dataLoader.map((dl) => ({
          ...dl,
          isLoading: true,
          isError: false,
          isReady: false,
        })),
      };
    case actions.types.ERROR_LOADER:
      return {
        ...state,
        dataLoader: state.dataLoader.map((dl) => ({
          ...dl,
          isLoading: false,
          isError: true,
          isReady: false,
        })),
      };
    case actions.types.SET_COLLAPSE_REGIONAIS_OPEN:
      return {
        ...state,
        isCollapseRegionaisOpen: action.payload.open,
      };

    case actions.types.SET_COLLAPSE_CONCESSIONARIAS_OPEN:
      return {
        ...state,
        isCollapseConcessionariasOpen: action.payload.open,
      };
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
