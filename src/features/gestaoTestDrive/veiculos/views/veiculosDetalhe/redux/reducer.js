import actions from './actions';

const INITIAL_STATE = {
  isOpen: false,
  snackbarErrors: [],
  lastSnackbarErrorId: 0,

  modal: {
    isLoading: false,
    isError: false,
    detalheVeiculo: null,
  },

  deleteVeiculo: {
    isLoading: false,
    isError: false,
  },
};

const reduceGetDetalheVeiculo = (state, action) => {
  switch (action.type) {
    case actions.types.GET_DETALHE_VEICULO_START:
      return {
        ...state,
        modal: {
          isLoading: true,
          isError: false,
          detalheVeiculo: null,
        },
      };
    case actions.types.GET_DETALHE_VEICULO_SUCCESS:
      return {
        ...state,
        modal: {
          ...state.modal,
          isLoading: false,
          isError: false,
          detalheVeiculo: action.payload.detalheVeiculo,
        },
      };
    case actions.types.GET_DETALHE_VEICULO_ERROR:
      return {
        ...state,
        modal: {
          ...state.modal,
          isLoading: false,
          isError: true,
          detalheVeiculo: null,
        },
      };
    default:
      return state;
  }
};

const reduceDeleteVeiculo = (state, action) => {
  switch (action.type) {
    case actions.types.DELETE_VEICULO_START:
      return {
        ...state,
        deleteVeiculo: {
          ...state.deleteVeiculo,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.DELETE_VEICULO_SUCCESS:
      return {
        ...state,
        isOpen: false,
        deleteVeiculo: {
          ...state.deleteVeiculo,
          isLoading: false,
          isError: false,
          isModalDeleteOpen: false,
        },
      };
    case actions.types.DELETE_VEICULO_ERROR:
      return {
        ...state,
        deleteVeiculo: {
          ...state.deleteVeiculo,
          isLoading: false,
          isError: true,
        },
        snackbarErrors: [
          ...state.snackbarErrors,
          { id: state.lastSnackbarErrorId + 1, message: 'Erro ao remover o veículo.', type: 'error' },
        ],
        lastSnackbarErrorId: state.lastSnackbarErrorId + 1,
      };
    default:
      return state;
  }
};

export default (state = INITIAL_STATE, action = { type: '@@veiculosDetalhe/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_GET_DETALHE_VEICULO)) {
    return reduceGetDetalheVeiculo(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_DELETE_VEICULO)) {
    return reduceDeleteVeiculo(state, action);
  }

  switch (action.type) {
    case actions.types.SET_OPEN:
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };
    case actions.types.DISMISS_SNACKBAR:
      return {
        ...state,
        snackbarErrors: state.snackbarErrors.filter((item) => item.id !== action.payload.id),
      };
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
