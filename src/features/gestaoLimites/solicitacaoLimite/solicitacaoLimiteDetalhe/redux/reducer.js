import actions from './actions';

import { addComentario } from './reducerUtils';

const INITIAL_STATE = {
  isOpen: false,
  modal: {
    isLoading: false,
    isError: false,
    detalheSolicitacao: null,
    mensagem: null,
    novoValor: null,
    motivo: null,
    isAlteracaoValor: false,
  },

  sendComentario: {
    isLoading: false,
    isError: false,
  },

  updateStatus: {
    action: null,
    isLoading: false,
    isError: false,
    errors: null,
    isModalErrorOpen: false,
  },
};

const reduceGetDetalheSolicitacao = (state, action) => {
  switch (action.type) {
    case actions.types.GET_DETALHE_SOLICITACAO_START:
      return {
        ...state,
        modal: {
          ...state.modal,
          isLoading: true,
          isError: false,
          detalheSolicitacao: null,
        },
      };
    case actions.types.GET_DETALHE_SOLICITACAO_SUCCESS:
      return {
        ...state,
        modal: {
          ...state.modal,
          isLoading: false,
          isError: false,
          novoValor: null,
          motivo: null,
          detalheSolicitacao: action.payload.detalheSolicitacao,
        },
      };
    case actions.types.GET_DETALHE_SOLICITACAO_ERROR:
      return {
        ...state,
        modal: {
          ...state.modal,
          isLoading: false,
          isError: true,
          detalheSolicitacao: null,
        },
      };
    default:
      return state;
  }
};

const reduceUpdateStatus = (state, action) => {
  switch (action.type) {
    case actions.types.UPDATE_STATUS_START:
      return {
        ...state,
        updateStatus: {
          ...state.updateStatus,
          isLoading: true,
          isError: false,
          action: action.payload.action,
          errors: null,
          isModalErrorOpen: false,
        },
      };
    case actions.types.UPDATE_STATUS_SUCCESS:
      return {
        ...state,
        updateStatus: {
          ...state.updateStatus,
          isLoading: false,
          isError: false,
          action: null,
          errors: null,
          isModalErrorOpen: false,
        },
        modal: {
          ...state.modal,
          isAlteracaoValor: false,
        },
      };
    case actions.types.UPDATE_STATUS_ERROR:
      return {
        ...state,
        updateStatus: {
          ...state.updateStatus,
          isLoading: false,
          isError: true,
          action: null,
          isModalErrorOpen: action.payload?.errors?.length > 0,
          errors: action.payload?.errors,

        },
      };

    case actions.types.CLOSE_STATUS_ERROR_MODAL:
      return {
        ...state,
        updateStatus: {
          ...state.updateStatus,
          isModalErrorOpen: false,
        },
      };

    default:
      return state;
  }
};

const reduceSendComentario = (state, action) => {
  switch (action.type) {
    case actions.types.SEND_COMENTARIO_START:
      return {
        ...state,
        sendComentario: {
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.SEND_COMENTARIO_SUCCESS:
      return {
        ...state,
        sendComentario: {
          isLoading: false,
          isError: false,
        },
        modal: {
          ...state.modal,
          mensagem: null,
          detalheSolicitacao: {
            ...state.modal.detalheSolicitacao,
            comentarios: addComentario(
              state.modal.detalheSolicitacao.comentarios,
              action.payload.mensagem,
            ),
          },
        },
      };
    case actions.types.SEND_COMENTARIO_ERROR:
      return {
        ...state,
        sendComentario: {
          isLoading: false,
          isError: true,
        },
      };

    default:
      return state;
  }
};

export default (state = INITIAL_STATE, action = { type: 'default' }) => {
  if (action.type.startsWith(actions.types.PREFIX_GET_DETALHE_SOLICITACAO)) {
    return reduceGetDetalheSolicitacao(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_UPDATE_STATUS)) {
    return reduceUpdateStatus(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_SEND_COMENTARIO)) {
    return reduceSendComentario(state, action);
  }

  switch (action.type) {
    case actions.types.SET_OPEN:
      return {
        ...state,
        isOpen: action.payload.isOpen,
        modal: {
          ...state.modal,
          isAlteracaoValor: false,
        },
      };
    case actions.types.UPDATE_MESSAGE:
      return {
        ...state,
        modal: {
          ...state.modal,
          mensagem: action.payload.value,
        },
      };
    case actions.types.UPDATE_MOTIVO:
      return {
        ...state,
        modal: {
          ...state.modal,
          motivo: action.payload.value,
        },
      };
    case actions.types.UPDATE_NOVO_VALOR:
      return {
        ...state,
        modal: {
          ...state.modal,
          novoValor: action.payload.value,
        },
      };
    case actions.types.SET_ALTERACAO_VALOR:
      return {
        ...state,
        modal: {
          ...state.modal,
          isAlteracaoValor: action.payload.value,
        },
      };
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
