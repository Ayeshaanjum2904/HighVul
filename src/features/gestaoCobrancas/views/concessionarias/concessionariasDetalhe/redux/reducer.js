import { applyProperty } from 'utils/object';
import actions from './actions';

const INITIAL_UPADATING_DATA = {
  consultorJeep: null,
  gerenteJeep: null,
  consultorFca: null,
  descricaoRegionalFca: null,
  codigoRegionalFca: null,
  regionalJeep: null,
};

const INITIAL_STATE = {
  concessionaria: {
    codBuc: null,
    nome: null,
  },

  statusRequest: {
    isLoading: false,
    isUpdate: false,
    errors: [],
    isError: false,
  },

  snackBar: [],
  lastSnackbarErrorId: 0,

  dataUpdate: INITIAL_UPADATING_DATA,

  isDisabled: true,
};

export default (state = INITIAL_STATE, action = { type: '@@concessionariasDetalhe/INIT' }) => {
  switch (action.type) {
    case actions.types.SET_CONCESSIONARIA:
      return {
        ...state,
        concessionaria: action.payload.value ?? INITIAL_STATE.concessionaria,
      };
    case actions.types.SET_IS_DISABLED:
      return {
        ...state,
        isDisabled: action.payload.value,
        dataUpdate: INITIAL_UPADATING_DATA,
        statusRequest: {
          ...state.statusRequest,
          errors: [],
        },
      };
    case actions.types.SET_UPDATE_DATA:
      return {
        ...state,
        dataUpdate: applyProperty(
          state.dataUpdate,
          action.payload.paramName,
          action.payload.value,
        ),
      };
    case actions.types.SET_LOADING_ERROR:
      return {
        ...state,
        statusRequest: {
          ...state.statusRequest,
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.SET_LOADING_START:
      return {
        ...state,
        statusRequest: {
          ...state.statusRequest,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.SET_LOADING_SUCESS:
      return {
        ...state,
        statusRequest: {
          ...state.statusRequest,
          isLoading: false,
          isError: false,
        },
      };
    case actions.types.SET_UPDATE_SUCESS:
      return {
        ...state,
        statusRequest: {
          ...state.statusRequest,
          isUpdate: false,
        },
        concessionaria: action.payload.concessionaria,
        isDisabled: true,
        dataUpdate: INITIAL_UPADATING_DATA,
        snackBar: [
          ...state.snackBar,
          {
            id: state.lastSnackbarErrorId + 1,
            message: 'Concessionaria atualizada com sucesso',
            type: 'success',
          },
        ],
        lastSnackbarErrorId: state.lastSnackbarErrorId + 1,
      };
    case actions.types.SET_UPDATE_ERROR:
      return {
        ...state,
        statusRequest: {
          ...state.statusRequest,
          errors: action.payload.errors,
          isUpdate: false,
        },
        snackBar: [
          ...state.snackBar,
          {
            id: state.lastSnackbarErrorId + 1,
            message: 'Error ao atualizar Concessionaria',

            type: 'error',
          },
        ],
        lastSnackbarErrorId: state.lastSnackbarErrorId + 1,
      };
    case actions.types.SET_UPDATE_START:
      return {
        ...state,
        statusRequest: {
          ...state.statusRequest,
          isUpdate: true,
          errors: [],
        },
      };
    case actions.types.RESET_SNACK_BAR:
      return {
        ...state,
        snackBar: state.snackBar.filter((item) => item.id !== action.payload.id),
      };
    case actions.types.RESET_STORE:
      return {
        ...INITIAL_STATE,
        concessionaria: {
          id: state.concessionaria?.id,
          nome: state.concessionaria?.nome,
        },
      };
    default:
      return state;
  }
};
