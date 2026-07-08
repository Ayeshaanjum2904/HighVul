import { applyProperty } from 'utils/object';
import actions from './actions';
import { adicionarTaxaCadastrada } from './util';

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
  inputData: {
    brand: null,
    inicioVigencia: null,
    fimVigencia: null,
    ...FORM(),
  },
  postStatus: {
    isLoading: false,
    isError: false,
  },
  deleteStatus: {
    isLoading: false,
    isError: false,
  },
  taxasCadastradas: [],

  isModalOpen: false,
  isFormOpen: false,
  showAlerta: true,
  showDeleteButton: false,
  snackbarErrors: [],
  lastSnackbarErrorId: 0,

  resetState: false,
};

export default (state = INITIAL_STATE, action = { type: 'default' }) => {
  switch (action.type) {
    case actions.types.POST_CADASTRO_START:
      return {
        ...state,
        postStatus: {
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.DELETE_START:
      return {
        ...state,
        deleteStatus: {
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.DELETE_ERROR:
    case actions.types.POST_CADASTRO_ERROR:
      return {
        ...state,
        postStatus: {
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.REMOVE_TAXA_CADASTRADA:
      return {
        ...state,
        postStatus: {
          isLoading: false,
          isError: false,
        },
        taxasCadastradas: state.taxasCadastradas
          .filter((item) => item.inicioVigencia !== action.payload.inicioVigencia
        && item.fimVigencia !== action.payload.fimVigencia),
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
    case actions.types.POST_CADASTRO_SUCCESS:
      return {
        ...state,
        postStatus: {
          isLoading: false,
          isError: false,
        },
        taxasCadastradas: adicionarTaxaCadastrada(
          state.taxasCadastradas,
          action.payload.taxaCadastro,
        ),
      };
    case actions.types.SET_INPUT_DATA:
      return {
        ...state,
        inputData: applyProperty(
          state.inputData,
          action.payload.paramName,
          action.payload.value,
          true,
        ),
      };
    case actions.types.SET_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: action.payload.status,
      };
    case actions.types.SET_FORM_OPEN:
      return {
        ...state,
        isFormOpen: action.payload.status,
      };
    case actions.types.SET_ALERTA:
      return {
        ...state,
        showAlerta: action.payload.status,
      };
    case actions.types.CLEAR_FORM:
      return {
        ...state,
        inputData: {
          ...state.inputData,
          ...FORM(),
        },
      };
    case actions.types.CLEAR_COM_FUNDO:
      return {
        ...state,
        inputData: {
          ...state.inputData,
          novoFundao: null,
          novoFundaoPraticada: null,
          usadosFundao: null,
          usadosFundaoPraticada: null,
        },
      };
    case actions.types.CLEAR_SELECTORS:
      return {
        ...state,
        inputData: {
          ...state.inputData,
          inicioVigencia: null,
          fimVigencia: null,
          brand: null,
        },
      };
    case actions.types.SET_RESET_STATE:
      return {
        ...state,
        resetState: action.payload.status,
      };
    case actions.types.RESET_STORE:
      return {
        ...INITIAL_STATE,
        taxasCadastradas: [],
      };
    default:
      return state;
  }
};
