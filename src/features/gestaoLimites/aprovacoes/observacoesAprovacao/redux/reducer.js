import actions from './actions';

const INITIAL_STATE = {

  observacoes: {
    isLoading: false,
    isError: false,
    observacoesList: [],
    visualizado: true,
  },

  observacaoAprovacao: {
    observacao: '',
    perfil: '',
    enviarDealer: false,
    idLimite: null,
    anexos: [],
    isLoading: false,
    isError: false,
  },

  controleObservacao: {
    dataCriacao: null,
    idLimite: null,
  },
};

export default (state = INITIAL_STATE, action = { type: 'default' }) => {
  switch (action.type) {
    case actions.types.GET_OBSERVACOES_START:
      return {
        ...state,
        observacoes: {
          ...state.observacoes,
          isLoading: true,
          isError: false,
          observacoesList: [],
          visualizado: true,
        },
      };
    case actions.types.GET_OBSERVACOES_ERROR:
      return {
        ...state,
        observacoes: {
          ...state.observacoes,
          isLoading: false,
          isError: true,
          observacoesList: [],
          visualizado: true,
        },
      };
    case actions.types.GET_OBSERVACOES_SUCCESS:
      return {
        ...state,
        observacoes: {
          ...state.observacoes,
          isLoading: false,
          isError: false,
          observacoesList: action.payload.observacoes.observacoes,
          visualizado: action.payload.observacoes.observacoesVisualizadas,
        },
      };
    case actions.types.INSERT_OBSERVACAO_START:
      return {
        ...state,
        observacaoAprovacao: {
          ...state.observacaoAprovacao,
          isLoading: true,
          isError: false,
        },
      };

    case actions.types.INSERT_OBSERVACAO_SUCCESS:
      return {
        ...state,
        observacaoAprovacao: {
          ...state.observacaoAprovacao,
          isLoading: false,
          isError: false,
        },
      };

    case actions.types.INSERT_OBSERVACAO_ERROR:
      return {
        ...state,
        observacaoAprovacao: {
          ...state.observacaoAprovacao,
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.INSERT_CONTROLE_OBSERVACAO: {
      return {
        ...state,
        controleObservacao: {
          ...state.controleObservacao,
        },
      };
    }
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
