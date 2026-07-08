import { applyProperty } from 'utils/object';
import actions from './actions';

import { Pages } from '../../../../redux/enums';
import { INITIAL_STATE_UPDATE_CONFIG, reduceUpdateConfig } from './reduceUpdateConfig';
import { INITIAL_STATE_GET_GRUPOS, reduceGetGrupos } from './reduceGetGrupos';

const INITIAL_STATE = {
  snackbarErrors: [],
  lastSnackbarErrorId: 0,

  displayPage: Pages.listGrupos,

  filters: {
    texto: null,
    marca: [],
    regional: [],
    status: [],
  },
  isFilterSelected: false,

  pageParams: {
    page: 0,
    ipp: 25,
    totalItems: null,
  },
  exportRelatorio: {
    isExporting: false,
    isError: false,
  },
  ...INITIAL_STATE_UPDATE_CONFIG,
  ...INITIAL_STATE_GET_GRUPOS,
};

export default (state = INITIAL_STATE, action = { type: '@@gruposPage/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_GET_GRUPOS)) {
    return reduceGetGrupos(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_UPDATE_CONFIG)) {
    return reduceUpdateConfig(state, action);
  }
  switch (action.type) {
    case actions.types.SET_GRUPOS_PAGE:
      return {
        ...state,
        displayPage: action.payload.page,
      };
    case actions.types.SET_PAGE: {
      return {
        ...state,
        pageParams: {
          ...state.pageParams,
          page: action.payload.page,
        },
        isFilterSelected: true,
      };
    }
    case actions.types.SET_IPP: {
      return {
        ...state,
        pageParams: {
          ...state.pageParams,
          ipp: action.payload.ipp,
          page: 0,
        },
      };
    }
    case actions.types.ADD_SNACKBAR:
      return {
        ...state,
        snackbarErrors: [
          ...state.snackbarErrors,
          {
            id: state.lastSnackbarErrorId + 1,
            message: action.payload.message,
            type: action.payload.type,
          },
        ],
        lastSnackbarErrorId: state.lastSnackbarErrorId + 1,
      };
    case actions.types.DISMISS_SNACKBAR:
      return {
        ...state,
        snackbarErrors: state.snackbarErrors.filter((item) => item.id !== action.payload.id),
      };
    case actions.types.UPDATE_FILTERS_PROPERTY:
      return {
        ...state,
        filters: applyProperty(
          state.filters,
          action.payload.propertyName,
          action.payload.value,
        ),
        isFilterSelected: true,
      };
    case actions.types.SET_TEXTO:
      return {
        ...state,
        filters: {
          ...state.filters,
          texto: action.payload.texto,
        },
        isFilterSelected: true,
      };
    case actions.types.EXPORT_RELATORIO_START:
      return {
        ...state,
        exportRelatorio: { isExporting: true, isError: false },
      };
    case actions.types.EXPORT_RELATORIO_SUCCESS:
      return {
        ...state,
        exportRelatorio: { isExporting: false, isError: false },
      };
    case actions.types.EXPORT_RELATORIO_ERROR:
      return {
        ...state,
        exportRelatorio: { isExporting: false, isError: true },
      };
    case actions.types.RESET_STORE: {
      return {
        ...INITIAL_STATE,
        displayPage: state.displayPage,
      };
    }
    default:
      return state;
  }
};
