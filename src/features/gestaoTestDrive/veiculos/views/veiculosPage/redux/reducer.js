import actions from './actions';

import { Pages } from '../../../redux/enums';

const INITIAL_STATE = {
  page: Pages.listVeiculo,
  snackbarErrors: [],
  lastSnackbarErrorId: 0,
  filters: {
    texto: null,
    marca: [],
    status: [],
  },
  isFilterSelected: false,
  veiculosList: {
    isLoading: false,
    isError: false,
    page: null,
    ipp: 25,
    totalItems: null,
    veiculos: null,
    marcas: null,
  },
  ordenacao: {
    nomeColuna: 'id',
    sentidoOrdenacao: 'desc',
  },
};

const reduceGetVeiculos = (state, action) => {
  switch (action.type) {
    case actions.types.GET_VEICULOS_START:
      return {
        ...state,
        veiculosList: {
          ...state.veiculosList,
          isLoading: true,
          isError: false,
          veiculos: null,
        },
      };
    case actions.types.GET_VEICULOS_SUCCESS:
      return {
        ...state,
        veiculosList: {
          ...state.veiculosList,
          isLoading: false,
          isError: false,
          veiculos: action.payload.data.veiculos,
          marcas: state.veiculosList.marcas ?? action.payload.data.marcas,
          page: action.payload.pageParams.page,
          totalItems: action.payload.pageParams.totalItems,
        },
        isFilterSelected: false,
      };
    case actions.types.GET_VEICULOS_ERROR:
      return {
        ...state,
        veiculosList: {
          ...state.veiculosList,
          isLoading: false,
          isError: true,
          veiculos: null,
          page: null,
          totalItems: null,
        },
      };
    default:
      return state;
  }
};

export default (state = INITIAL_STATE, action = { type: '@@veiculosPage/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_GET_VEICULOS)) {
    return reduceGetVeiculos(state, action);
  }

  switch (action.type) {
    case actions.types.SET_PAGE:
      return {
        ...state,
        veiculosList: {
          ...state.veiculosList,
          page: action.payload.page,
        },
      };
    case actions.types.SET_IPP:
      return {
        ...state,
        veiculosList: {
          ...state.veiculosList,
          ipp: action.payload.ipp,
          page: 0,
        },
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
    case actions.types.SET_MARCA:
      return {
        ...state,
        filters: {
          ...state.filters,
          marca: action.payload.marca,
        },
        isFilterSelected: true,
      };
    case actions.types.SET_STATUS:
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload.status,
        },
        isFilterSelected: true,
      };
    case actions.types.SET_VEICULOS_PAGE:
      return {
        ...state,
        page: action.payload.page,
      };
    case actions.types.DISMISS_SNACKBAR:
      return {
        ...state,
        snackbarErrors: state.snackbarErrors.filter((item) => item.id !== action.payload.id),
      };
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
    case actions.types.SET_SORTING_ORDER:
      return {
        ...state,
        ordenacao: {
          nomeColuna: action.payload.nomeColuna,
          sentidoOrdenacao: action.payload.sentidoOrdenacao,
        },
      };
    case actions.types.RESET_STORE:
      return {
        ...INITIAL_STATE,
        page: state.page,
      };
    default:
      return state;
  }
};
