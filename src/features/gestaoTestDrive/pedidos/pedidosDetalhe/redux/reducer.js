import _ from 'lodash';
import { applyProperty } from 'utils/object';
import {
  updateCondicaoSelecionada,
  setCondicaoSelecionadaInicial, applyCondicaoComercialProperty,
  addComentario, isCondicaoNegociada,
} from './reducerUtils';

import actions from './actions';

const INITIAL_STATE = {
  isOpen: false,
  snackbarErrors: [],
  lastSnackbarErrorId: 0,

  modal: {
    isLoading: false,
    isError: false,
    detalhePedido: null,
    condicaoSelecionadaId: null,
    isCondicaoNegociada: null,
    creditoAprovado: false,
    mensagem: null,
    taglistHasError: false,
  },

  modalAlterar: {
    open: false,
    etapaDesejada: {},
  },

  sendComentario: {
    isLoading: false,
    isError: false,
  },

  sendDetalhePedido: {
    isLoading: false,
    isError: false,
  },

  updateStatusPedido: {
    isLoading: false,
    isError: false,
    isModalOpen: false,
    errors: null,
  },

  cancelPedido: {
    isLoading: false,
    isError: false,
    isModalOpen: false,
    motivo: null,
  },

  uploadFaturaPedido: {
    isLoading: false,
    isError: false,
  },

  uploadContrato: {
    isLoading: false,
    isError: false,
  },

  updateDetalhesVeiculo: {
    isLoading: false,
    isError: false,
  },

  regressaoStatus: {
    data: null,
    isEmpty: false,
    isLoading: false,
    isError: false,
  },

  IntegracaoB2B: {
    isLoading: false,
    isError: false,
  },

  sendDadosMontadora: {
    isLoading: false,
    isError: false,
  },

  codigoEmpresaRegional: {
    isLoading: false,
    isError: false,
    options: {},
  },
};

const reduceGetDetalhePedido = (state, action) => {
  switch (action.type) {
    case actions.types.GET_DETALHE_PEDIDO_START:
      return {
        ...state,
        modal: {
          isLoading: true,
          isError: false,
          detalhePedido: null,
        },
        sendDetalhePedido: {
          isLoading: false,
          isError: false,
        },
        updateStatusPedido: {
          isLoading: false,
          isError: false,
          isModalOpen: false,
          errors: null,
        },
        cancelPedido: {
          isLoading: false,
          isError: false,
        },
        sendDadosMontadora: {
          isLoading: false,
          isError: false,
        },
      };
    case actions.types.GET_DETALHE_PEDIDO_SUCCESS: {
      const detalhe = action.payload.detalhePedido || {};
      const { detalhesPedido: detalhesMontadora, ...detalheSemDetalhesPedido } = detalhe;
      const detalhePedido = {
        ...detalheSemDetalhesPedido,
        empresaOrigemFaturamento: detalhesMontadora?.empresaOrigemFaturamento ?? '',
        codigoConcessionariaEntrega: detalhesMontadora?.codigoConcessionariaEntrega ?? '',
        codigoConcessionariaComissao: detalhesMontadora?.codigoConcessionariaComissao ?? '',
        codigoRegional: detalhesMontadora?.codigoRegional ?? '',
        marcaMontadora: detalhe.marcaMontadora ?? '',
      };

      return {
        ...state,
        modal: {
          ...state.modal,
          isLoading: false,
          isError: false,
          detalhePedido,
          condicaoSelecionadaId: setCondicaoSelecionadaInicial(detalhePedido),
          isCondicaoNegociada: detalhePedido?.condicaoNegociadaId !== null,
        },
      };
    }
    case actions.types.GET_DETALHE_PEDIDO_ERROR:
      return {
        ...state,
        modal: {
          ...state.modal,
          isLoading: false,
          isError: true,
          detalhePedido: null,
        },
      };
    default:
      return state;
  }
};

const reduceSendDetalhePedido = (state, action) => {
  switch (action.type) {
    case actions.types.SEND_DETALHE_PEDIDO_START:
      return {
        ...state,
        sendDetalhePedido: {
          ...state.sendDetalhePedido,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.SEND_DETALHE_PEDIDO_SUCCESS:
      return {
        ...state,
        sendDetalhePedido: {
          ...state.sendDetalhePedido,
          isLoading: false,
          isError: false,
        },
      };
    case actions.types.SEND_DETALHE_PEDIDO_ERROR:
      return {
        ...state,
        sendDetalhePedido: {
          ...state.sendDetalhePedido,
          isLoading: false,
          isError: true,
        },
      };

    default:
      return state;
  }
};

const reduceUpdateStatusPedido = (state, action) => {
  switch (action.type) {
    case actions.types.UPDATE_STATUS_PEDIDO_START:
      return {
        ...state,
        updateStatusPedido: {
          ...state.updateStatusPedido,
          isLoading: true,
          isError: false,
          errors: null,
        },
      };
    case actions.types.UPDATE_STATUS_PEDIDO_SUCCESS:
      return {
        ...state,
        updateStatusPedido: {
          ...state.updateStatusPedido,
          isLoading: false,
          isError: false,
          isModalOpen: false,
          errors: null,
        },
      };
    case actions.types.UPDATE_STATUS_PEDIDO_ERROR:
      return {
        ...state,
        updateStatusPedido: {
          ...state.updateStatusPedido,
          isLoading: false,
          isError: true,
          isModalOpen: action.payload?.errors?.length > 0,
          errors: action.payload?.errors,
        },
      };
    case actions.types.CLOSE_STATUS_PEDIDO_ERROR_MODAL:
      return {
        ...state,
        updateStatusPedido: {
          ...state.updateStatusPedido,
          isModalOpen: false,
        },
      };
    default:
      return state;
  }
};

const reduceCancelPedido = (state, action) => {
  switch (action.type) {
    case actions.types.CANCEL_PEDIDO_START:
      return {
        ...state,
        cancelPedido: {
          ...state.cancelPedido,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.CANCEL_PEDIDO_SUCCESS:
      return {
        ...state,
        cancelPedido: {
          ...state.cancelPedido,
          isLoading: false,
          isError: false,
          motivo: null,
          isModalOpen: false,
        },
      };
    case actions.types.CANCEL_PEDIDO_ERROR:
      return {
        ...state,
        cancelPedido: {
          ...state.cancelPedido,
          isLoading: false,
          isError: true,
        },
      };

    default:
      return state;
  }
};

const reduceUploadFaturaPedido = (state, action) => {
  switch (action.type) {
    case actions.types.UPLOAD_FATURA_PEDIDO_START:
      return {
        ...state,
        uploadFaturaPedido: {
          ...state.uploadFaturaPedido,
          isLoading: true,
          isError: false,
        },
        modal: {
          ...state.modal,
          detalhePedido: {
            ...state.modal.detalhePedido,
            tamanhoFatura: action.payload.tamanhoFatura,
            nomeFatura: action.payload.nomeFatura,
          },
        },
      };
    case actions.types.UPLOAD_FATURA_PEDIDO_SUCCESS:
      return {
        ...state,
        uploadFaturaPedido: {
          ...state.uploadFaturaPedido,
          isLoading: false,
          isError: false,
        },
        modal: {
          ...state.modal,
          detalhePedido: {
            ...state.modal.detalhePedido,
            urlFatura: action.payload.urlFatura,
          },
        },
      };
    case actions.types.UPLOAD_FATURA_PEDIDO_ERROR:
      return {
        ...state,
        uploadFaturaPedido: {
          ...state.uploadFaturaPedido,
          isLoading: false,
          isError: true,
        },
        modal: {
          ...state.modal,
          detalhePedido: {
            ...state.modal.detalhePedido,
            urlFatura: null,
            tamanhoFatura: null,
            nomeFatura: null,
          },
        },
      };

    default:
      return state;
  }
};

const reduceDeleteFaturaPedido = (state, action) => {
  switch (action.type) {
    case actions.types.DELETE_FATURA_PEDIDO_START:
      return {
        ...state,
        modal: {
          ...state.modal,
          isLoading: true,
        },
      };
    case actions.types.DELETE_FATURA_PEDIDO_SUCCESS:
      return {
        ...state,
      };
    case actions.types.DELETE_FATURA_PEDIDO_ERROR:
      return {
        ...state,
        modal: {
          ...state.modal,
          isLoading: false,
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
          detalhePedido: {
            ...state.modal.detalhePedido,
            comentarios: addComentario(
              state.modal.detalhePedido.comentarios,
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

const reduceUploadContrato = (state, action) => {
  switch (action.type) {
    case actions.types.UPLOAD_CONTRATO_START:
      return {
        ...state,
        uploadContrato: {
          ...state.uploadContrato,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.UPLOAD_CONTRATO_SUCCESS:
      return {
        ...state,
        uploadContrato: {
          ...state.uploadContrato,
          isLoading: false,
          isError: false,
        },
        modal: {
          ...state.modal,
          detalhePedido: {
            ...state.modal.detalhePedido,
            urlContrato: action.payload.urlContrato,
          },
        },
      };
    case actions.types.UPLOAD_CONTRATO_ERROR:
      return {
        ...state,
        uploadContrato: {
          ...state.uploadContrato,
          isLoading: false,
          isError: true,
        },
      };

    default:
      return state;
  }
};

const reduceUpdateDetalhesVeiculo = (state, action) => {
  switch (action.type) {
    case actions.types.UPDATE_DETALHES_VEICULO_START:
      return {
        ...state,
        updateDetalhesVeiculo: {
          ...state.updateDetalhesVeiculo,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.UPDATE_DETALHES_VEICULO_SUCCESS:
      return {
        ...state,
        updateDetalhesVeiculo: {
          ...state.updateDetalhesVeiculo,
          isLoading: false,
          isError: false,
        },
        modal: {
          ...state.modal,
          isDirty: false,
        },
      };
    case actions.types.UPDATE_DETALHES_VEICULO_ERROR:
      return {
        ...state,
        updateDetalhesVeiculo: {
          ...state.updateDetalhesVeiculo,
          isLoading: false,
          isError: true,
        },
      };

    default:
      return state;
  }
};

const reduceIntegracaoB2B = (state, action) => {
  switch (action.type) {
    case actions.types.INTEGRACAOB2B_START:
      return {
        ...state,
        IntegracaoB2B: {
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.INTEGRACAOB2B_SUCCESS:
      return {
        ...state,
        IntegracaoB2B: {
          isLoading: false,
          isError: false,
        },
      };
    case actions.types.INTEGRACAOB2B_ERROR:
      return {
        ...state,
        IntegracaoB2B: {
          isLoading: false,
          isError: true,
        },
      };
    default:
      return state;
  }
};

const reduceSendDadosMontadora = (state, action) => {
  switch (action.type) {
    case actions.types.SEND_DADOS_MONTADORA_START:
      return {
        ...state,
        sendDadosMontadora: {
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.SEND_DADOS_MONTADORA_SUCCESS:
      return {
        ...state,
        sendDadosMontadora: {
          isLoading: false,
          isError: false,
        },
      };
    case actions.types.SEND_DADOS_MONTADORA_ERROR:
      return {
        ...state,
        sendDadosMontadora: {
          isLoading: false,
          isError: true,
        },
      };
    default:
      return state;
  }
};

const reduceCodigoEmpresaRegional = (state, action) => {
  switch (action.type) {
    case actions.types.GET_CODIGO_EMPRESA_REGIONAL_START:
      return {
        ...state,
        codigoEmpresaRegional: {
          ...state.codigoEmpresaRegional,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.GET_CODIGO_EMPRESA_REGIONAL_SUCCESS:
      return {
        ...state,
        codigoEmpresaRegional: {
          ...state.codigoEmpresaRegional,
          isLoading: false,
          isError: false,
          options: action.payload.options || {},
        },
      };
    case actions.types.GET_CODIGO_EMPRESA_REGIONAL_ERROR:
      return {
        ...state,
        codigoEmpresaRegional: {
          ...state.codigoEmpresaRegional,
          isLoading: false,
          isError: true,
        },
      };
    default:
      return state;
  }
};

export default (state = INITIAL_STATE, action = { type: '@@detalhesPedido/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_GET_DETALHE_PEDIDO)) {
    return reduceGetDetalhePedido(state, action);
  }

  if (action.type.startsWith(actions.types.PREFIX_SEND_DETALHE_PEDIDO)) {
    return reduceSendDetalhePedido(state, action);
  }

  if (action.type.startsWith(actions.types.PREFIX_UPDATE_STATUS_PEDIDO)) {
    return reduceUpdateStatusPedido(state, action);
  }

  if (action.type.startsWith(actions.types.PREFIX_CANCEL_PEDIDO)) {
    return reduceCancelPedido(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_UPLOAD_FATURA_PEDIDO)) {
    return reduceUploadFaturaPedido(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_DELETE_FATURA_PEDIDO)) {
    return reduceDeleteFaturaPedido(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_SEND_COMENTARIO)) {
    return reduceSendComentario(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_UPLOAD_CONTRATO)) {
    return reduceUploadContrato(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_UPDATE_DETALHES_VEICULO)) {
    return reduceUpdateDetalhesVeiculo(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_INTEGRACAOB2B)) {
    return reduceIntegracaoB2B(state, action);
  }

  if (action.type.startsWith(actions.types.PREFIX_SEND_DADOS_MONTADORA)) {
    return reduceSendDadosMontadora(state, action);
  }

  if (action.type.startsWith(actions.types.PREFIX_GET_CODIGO_EMPRESA_REGIONAL)) {
    return reduceCodigoEmpresaRegional(state, action);
  }

  switch (action.type) {
    case actions.types.SET_OPEN:
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };
    case actions.types.SET_OPEN_MODAL_ALTERAR:
      return {
        ...state,
        modalAlterar: {
          ...state.modalAlterar,
          open: action.payload.open,
        },
      };
    case actions.types.SET_ETAPA_DESEJADA:
      return {
        ...state,
        modalAlterar: {
          ...state.modalAlterar,
          etapaDesejada: action.payload.etapa,
        },
      };
    case actions.types.UPDATE_DETALHE_PROPERTY:
      return {
        ...state,
        modal: {
          ...state.modal,
          isDirty: true,
          detalhePedido: applyProperty(
            state.modal.detalhePedido,
            action.payload.propertyName,
            action.payload.value,
          ),
        },
      };
    case actions.types.UPDATE_CONDICAO_SELECIONADA:
      return {
        ...state,
        modal: {
          ...state.modal,
          detalhePedido: updateCondicaoSelecionada(
            state.modal.detalhePedido,
            action.payload.condicao,
          ),
          condicaoSelecionadaId: action.payload.condicao?.value,
          isCondicaoNegociada: isCondicaoNegociada(action.payload.condicao),
        },
      };
    case actions.types.GET_REGRESSAO_STATUS_START:
      return {
        ...state,
        regressaoStatus: {
          data: [],
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.GET_REGRESSAO_STATUS_SUCCESS:
      return {
        ...state,
        regressaoStatus: {
          data: action.payload.data,
          isEmpty: _.isEmpty(action.payload.data),
          isLoading: false,
          isError: false,
        },
      };
    case actions.types.GET_REGRESSAO_STATUS_ERROR:
      return {
        ...state,
        regressaoStatus: {
          ...state.regressaoStatus,
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.UPDATE_CONDICAO_PROPERTY:
      return {
        ...state,
        modal: {
          ...state.modal,
          detalhePedido: {
            ...state.modal.detalhePedido,
            condicoes: applyCondicaoComercialProperty(
              state.modal.detalhePedido.condicoes,
              action.payload.propertyName,
              action.payload.value,
              state.modal.condicaoSelecionadaId,
            ),
          },
        },
      };
    case actions.types.SET_CREDITO_APROVADO:
      return {
        ...state,
        modal: {
          ...state.modal,
          creditoAprovado: action.payload.isCreditoAprovado,
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
    case actions.types.SET_TAGLIST_ERROR:
      return {
        ...state,
        modal: {
          ...state.modal,
          taglistHasError: action.payload.hasError,
        },
      };
    case actions.types.UPDATE_MOTIVO:
      return {
        ...state,
        cancelPedido: {
          ...state.cancelPedido,
          motivo: action.payload.value,
        },
      };
    case actions.types.SET_MODAL_CANCEL_PEDIDO_OPEN:
      return {
        ...state,
        cancelPedido: {
          isModalOpen: action.payload.value,
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
    default:
      return state;
  }
};
