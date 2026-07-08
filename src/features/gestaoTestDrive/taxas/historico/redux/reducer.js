import { applyProperty } from 'utils/object';
import actions from './actions';

const FORM = () => ({
  novoFloorPlan: null,
  novoFloorPlanPraticada: null,
  novoFundao: null,
  novoFundaoPraticada: null,
  usadosFloorPlan: null,
  usadosFloorPlanPraticada: null,
  usadosFundao: null,
  usadosFundaoPraticada: null,
  pecas: null,
  pecasPraticada: null,
  identidadeVisual: null,
  identidadeVisualPraticada: null,
  testDrive: null,
  testDrivePraticada: null,
});

const INITIAL_STATE = {
  inputDataHistorico: {
    brand: null,
    inicioVigencia: null,
    fimVigencia: null,
    ...FORM(),
  },

  filters: {
    taxa: null,
    dataInicio: null,
    dataFim: null,
    taxaPraticada: null,
    brand: [],
  },

  selectors: {
    brands: [],
  },

  paginacao: {
    page: 0,
    ipp: 25,
    totalItems: null,
  },

  requestStatus: {
    isLoading: false,
    isError: false,
  },

  updateStatus: {
    isLoading: false,
    isError: false,
  },

  snackbarErrors: [],
  lastSnackbarErrorId: 0,

  isFilterSelected: false,
  data: [],

};

export default (state = INITIAL_STATE, action = { type: 'default' }) => {
  switch (action.type) {
    case actions.types.SET_FILTER:
      return {
        ...state,
        filters: applyProperty(
          state.filters,
          action.payload.paramName,
          action.payload.value,
          true,
        ),
        isFilterSelected: true,
      };
    case actions.types.SET_PAGE:
      return {
        ...state,
        paginacao: {
          ...state.paginacao,
          page: action.payload.page,
        },
      };
    case actions.types.SET_IPP:
      return {
        ...state,
        paginacao: {
          ...state.paginacao,
          ipp: action.payload.ipp,
          page: 0,
        },
      };
    case actions.types.GET_HISTORICO_ERROR:
      return {
        ...state,
        requestStatus: {
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.GET_HISTORICO_START:
      return {
        ...state,
        requestStatus: {
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.GET_HISTORICO_SUCCESS:
      return {
        ...state,
        requestStatus: {
          isLoading: false,
          isError: false,
        },
        data: action.payload.data,
        paginacao: {
          ...state.paginacao,
          totalItems: action.payload.totalItems,
        },
        selectors: {
          brands: action.payload.marcas,
        },
        isFilterSelected: false,
      };
    case actions.types.UPDATE_DATA_START:
      return {
        ...state,
        updateStatus: {
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.UPDATE_DATA_SUCESS:
      return {
        ...state,
        updateStatus: {
          isLoading: false,
          isError: false,
        },
      };
    case actions.types.UPDATE_DATA_ERROR:
      return {
        ...state,
        updateStatus: {
          ...state.requestStatus,
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.SET_TAXA_OPEN:
      return {
        ...state,
        inputDataHistorico: action.payload.taxa,
      };
    case actions.types.SET_INPUT_DATA:
      return {
        ...state,
        inputDataHistorico: applyProperty(
          state.inputDataHistorico,
          action.payload.paramName,
          action.payload.value,
          true,
        ),
      };
    case actions.types.CLEAR_FORM:
      return {
        ...state,
        inputDataHistorico: {
          ...state.inputDataHistorico,
          ...FORM(),
        },
      };
    case actions.types.CLEAR_STATE_BRAND:
      return {
        ...state,
        inputDataHistorico: {
          ...state.inputDataHistorico,
          novoFundao: null,
          usadosFundao: null,
        },
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
    case actions.types.DISMISS_SNACKBAR:
      return {
        ...state,
        snackbarErrors: state.snackbarErrors.filter((item) => item.id !== action.payload.id),
      };
    case actions.types.DELETE_TAXA_START:
      return {
        ...state,
      };
    case actions.types.DELETE_TAXA_SUCCESS:
      return {
        ...state,
        snackbarErrors: [
          ...state.snackbarErrors,
          {
            id: state.lastSnackbarErrorId + 1,
            message: 'Taxa excluída com sucesso.',
            type: 'success',
          },
        ],
        lastSnackbarErrorId: state.lastSnackbarErrorId + 1,
      };
    case actions.types.DELETE_TAXA_ERROR:
      return {
        ...state,
        snackbarErrors: [
          ...state.snackbarErrors,
          {
            id: state.lastSnackbarErrorId + 1,
            message: 'Erro ao excluir a taxa. Por favor, tente novamente.',
            type: 'error',
          },
        ],
        lastSnackbarErrorId: state.lastSnackbarErrorId + 1,
      };
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
