import actions from '../actions/actions';
import { applyFilter } from '../../reducerUtils';
import { DateRange } from '../../enums';

export const INITIAL_STATE_SET_FILTERS = {
  filters: {
    startDate: null,
    endDate: null,

    filterType: DateRange.all,
    selectedBrands: [],
    selectedModelos: [],
    selectedRegional: [],
    selectedGrupo: [],
    selectedPonto: [],
    codigoBuc: null,
    concessionaria: null,
  },
  isEnableButton: false,
};

export const reduceSetFilters = (state, action) => {
  switch (action.type) {
    case actions.types.SET_MARCAS:
      return {
        ...state,
        filters: {
          ...state.filters,
          marcas: action.payload.marcas,
        },
        isEnableButton: true,
      };
    case actions.types.SET_DATA_INICIO:
      return {
        ...state,
        filters: {
          ...state.filters,
          startDate: action.payload.data,
        },
        isEnableButton: true,
      };
    case actions.types.SET_DATA_FIM:
      return {
        ...state,
        filters: {
          ...state.filters,
          endDate: action.payload.data,
        },
        isEnableButton: true,
      };
    case actions.types.SET_SELECTED_BRANDS:
      return {
        ...state,
        filters: {
          ...state.filters,
          selectedBrands: action.payload.brands,
        },
        isEnableButton: true,
      };
    case actions.types.SET_CODIGO_BUC:
      return {
        ...state,
        filters: {
          ...state.filters,
          codigoBuc: action.payload.codigoBuc,
        },
        isEnableButton: true,
      };
    case actions.types.SET_SELECTED_GRUPO:
      return {
        ...state,
        filters: {
          ...state.filters,
          selectedGrupo: action.payload.grupo,
        },
        isEnableButton: true,
      };
    case actions.types.SET_SELECTED_PONTOS:
      return {
        ...state,
        filters: {
          ...state.filters,
          selectedPonto: action.payload.pontos,
        },
        isEnableButton: true,
      };
    case actions.types.SET_SELECTED_MODELOS:
      return {
        ...state,
        filters: {
          ...state.filters,
          selectedModelos: action.payload.modelos,
        },
        isEnableButton: true,
      };
    case actions.types.SET_SELECTED_REGIONAL:
      return {
        ...state,
        filters: {
          ...state.filters,
          selectedRegional: action.payload.regional,
        },
        isEnableButton: true,
      };

    case actions.types.SET_FILTER_TYPE:
      return {
        ...state,
        filters: applyFilter(state.filters, action.payload.type),
        isEnableButton: true,
      };

    case actions.types.GET_CONCESSIONARIA:
      return {
        ...state,
        filters: {
          ...state.filters,
          concessionaria: null,
        },
      };
    case actions.types.SET_CONCESSIONARIA:
      return {
        ...state,
        filters: {
          ...state.filters,
          concessionaria: action.payload.concessionaria,
        },
        isEnableButton: true,
      };
    case actions.types.SET_DISABLED_BUTTON:
      return {
        ...state,
        isEnableButton: false,
      };
    default:
      return state;
  }
};
