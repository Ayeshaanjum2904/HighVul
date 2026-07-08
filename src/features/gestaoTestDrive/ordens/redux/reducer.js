import actions from './actions';

const INITIAL_STATE = {
  filters: {
    ordem: null,
    status: [],
    produto: [],
    usuario: false,
  },

  template: {
    isLoading: false,
    isError: false,
    errorMessage: null,
  },

  novaOrdem: {
    isLoading: false,
    isError: false,
    errorMessage: null,
    validationErrors: null,
    data: null,
  },

  validacaoOrdem: {
    isLoading: false,
    isRelatorioErrosLoading: false,
    isError: false,
    resultado: null,
    relatorioGerado: false,
  },

  isFilterSelected: false,

  statusList: [],
  produtosList: [],
  feriadosList: [],

  loadingStatus: true,
  loadingProdutos: true,

  ordensList: {
    ordens: [],
    isLoading: false,
    isError: false,
  },

  pageParams: {
    page: 0,
    ipp: 25,
    totalItems: null,
  },

  ordenacao: {
    nomeColuna: 'id',
    sentidoOrdenacao: 'desc',
  },

  modalOrdem: {
    open: false,
    selectedOrdem: null,
  },

  modalVincularCondicao: {
    open: false,
    selectedOrdem: null,
    condicoes: [],
    isLoading: false,
    isError: false,
    errorMessage: null,
    loadingCondicoes: {},
    veiculosSemCondicao: [],
    isLoadingVeiculosSemCondicao: false,
    isErrorVeiculosSemCondicao: false,
    isListaVeiculosVisible: false,
  },

  modalVincularCondicaoAVista: {
    open: false,
    selectedOrdem: null,
    condicoes: [],
    isLoading: false,
    isError: false,
    errorMessage: null,
    loadingCondicoes: {},
    veiculosSemCondicao: [],
    isLoadingVeiculosSemCondicao: false,
    isErrorVeiculosSemCondicao: false,
    isListaVeiculosVisible: false,
  },

  resetStore: true,
  isRelatorioLoading: false,
  isRelatorioError: false,
  isCancelling: false,
  cancelError: null,
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case actions.types.SET_ID_ORDEM:
      return {
        ...state,
        filters: {
          ...state.filters,
          ordem: action.payload.ordem,
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
    case actions.types.SET_PRODUTO:
      return {
        ...state,
        filters: {
          ...state.filters,
          produto: action.payload.produto,
        },
        isFilterSelected: true,
      };
    case actions.types.SET_USUARIO:
      return {
        ...state,
        filters: {
          ...state.filters,
          usuario: action.payload.usuario,
        },
        isFilterSelected: true,
      };
    case actions.types.SET_MODAL_ORDEM_OPEN:
      return {
        ...state,
        modalOrdem: {
          open: true,
          selectedOrdem: action.payload.modalOrdem,
        },
      };
    case actions.types.SET_MODAL_ORDEM_CLOSE:
      return {
        ...state,
        modalOrdem: {
          open: false,
          selectedOrdem: null,
        },
      };
    case actions.types.SET_MODAL_VINCULAR_CONDICAO_OPEN:
      return {
        ...state,
        modalVincularCondicao: {
          ...state.modalVincularCondicao,
          open: true,
          selectedOrdem: action.payload.selectedOrdem,
        },
      };
    case actions.types.SET_MODAL_VINCULAR_CONDICAO_CLOSE:
      return {
        ...state,
        modalVincularCondicao: {
          open: false,
          selectedOrdem: null,
          condicoes: [],
          isLoading: false,
          isError: false,
          errorMessage: null,
          loadingCondicoes: {},
          veiculosSemCondicao: [],
          isLoadingVeiculosSemCondicao: false,
          isErrorVeiculosSemCondicao: false,
          isListaVeiculosVisible: false,
        },
      };
    case actions.types.SET_MODAL_VINCULAR_CONDICAO_AVISTA_OPEN:
      return {
        ...state,
        modalVincularCondicaoAVista: {
          ...state.modalVincularCondicaoAVista,
          open: true,
          selectedOrdem: action.payload.selectedOrdem,
        },
      };
    case actions.types.SET_MODAL_VINCULAR_CONDICAO_AVISTA_CLOSE:
      return {
        ...state,
        modalVincularCondicaoAVista: {
          open: false,
          selectedOrdem: null,
          condicoes: [],
          isLoading: false,
          isError: false,
          errorMessage: null,
          loadingCondicoes: {},
          veiculosSemCondicao: [],
          isLoadingVeiculosSemCondicao: false,
          isErrorVeiculosSemCondicao: false,
          isListaVeiculosVisible: false,
        },
      };
    case actions.types.GET_CONDICOES_COMERCIAIS_START:
      return {
        ...state,
        modalVincularCondicao: {
          ...state.modalVincularCondicao,
          isLoading: true,
          isError: false,
          errorMessage: null,
        },
      };
    case actions.types.GET_CONDICOES_COMERCIAIS_SUCCESS:
      return {
        ...state,
        modalVincularCondicao: {
          ...state.modalVincularCondicao,
          isLoading: false,
          isError: false,
          condicoes: action.payload.condicoes,
        },
      };
    case actions.types.GET_CONDICOES_COMERCIAIS_ERROR:
      return {
        ...state,
        modalVincularCondicao: {
          ...state.modalVincularCondicao,
          isLoading: false,
          isError: true,
          errorMessage: action.payload.error,
        },
      };
    case actions.types.CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ordem: null,
          status: state.statusList.map((s) => ({ value: s, text: s })),
          produto: state.produtosList.map((p) => ({ value: p.Id, text: p.Nome })),
          usuario: false,
        },
        isFilterSelected: false,
      };
    case actions.types.GET_STATUS_OPTIONS:
      return {
        ...state,
        statusList: action.payload.statusList,
        loadingStatus: false,
      };
    case actions.types.GET_PRODUTOS_OPTIONS:
      return {
        ...state,
        produtosList: action.payload.produtosList,
        loadingProdutos: false,
      };
    case actions.types.GET_ORDENS_START:
      return {
        ...state,
        ordensList: {
          ...state.ordensList,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.GET_ORDENS_SUCCESS:
      return {
        ...state,
        ordensList: { ordens: action.payload.ordens, isLoading: false, isError: false },
        pageParams: action.payload.pageParams,
        isFilterSelected: false,
        resetStore: false,
      };
    case actions.types.GET_ORDENS_ERROR:
      return {
        ...state,
        ordensList: {
          ...state.ordensList,
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.SET_PAGE: {
      return {
        ...state,
        pageParams: {
          ...state.pageParams,
          page: action.payload.page,
        },
      };
    }
    case actions.types.SET_IPP: {
      return {
        ...state,
        pageParams: {
          ...state.pageParams,
          ipp: action.payload.ipp,
        },
      };
    }
    case actions.types.SET_SORTING_ORDER:
      return {
        ...state,
        ordenacao: {
          nomeColuna: action.payload.nomeColuna,
          sentidoOrdenacao: action.payload.sentidoOrdenacao,
        },
      };
    case actions.types.DOWNLOAD_TEMPLATE_START:
      return {
        ...state,
        template: {
          ...state.template,
          isLoading: true,
          isError: false,
          errorMessage: null,
        },
      };
    case actions.types.DOWNLOAD_TEMPLATE_SUCCESS:
      return {
        ...state,
        template: {
          ...state.template,
          isLoading: false,
          isError: false,
        },
      };
    case actions.types.DOWNLOAD_TEMPLATE_ERROR:
      return {
        ...state,
        template: {
          ...state.template,
          isLoading: false,
          isError: true,
          errorMessage: action.payload.error,
        },
      };
    case actions.types.GET_FERIADOS:
      return {
        ...state,
        feriadosList: action.payload.feriadosList,
      };
    case actions.types.CREATE_NOVA_ORDEM_START:
      return {
        ...state,
        novaOrdem: {
          ...state.novaOrdem,
          isLoading: true,
          isError: false,
          errorMessage: null,
          validationErrors: null,
          data: null,
        },
      };
    case actions.types.CREATE_NOVA_ORDEM_SUCCESS:
      return {
        ...state,
        novaOrdem: {
          ...state.novaOrdem,
          isLoading: false,
          isError: false,
          errorMessage: null,
          validationErrors: null,
          data: action.payload,
        },
      };
    case actions.types.CREATE_NOVA_ORDEM_ERROR:
      return {
        ...state,
        novaOrdem: {
          ...state.novaOrdem,
          isLoading: false,
          isError: true,
          errorMessage: action.payload.message || 'Erro desconhecido na criação da Ordem.',
          validationErrors: action.payload.parsedDetails || null,
        },
      };
    case actions.types.CLEAR_NOVA_ORDEM_ERRORS:
      return {
        ...state,
        novaOrdem: {
          ...state.novaOrdem,
          isLoading: false,
          isError: false,
          errorMessage: null,
          validationErrors: null,
        },
      };
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    case actions.types.GET_RELATORIO_ORDENS_START:
      return {
        ...state,
        isRelatorioLoading: true,
        isRelatorioError: false,
      };
    case actions.types.GET_RELATORIO_ORDENS_SUCCESS:
      return {
        ...state,
        isRelatorioLoading: false,
      };
    case actions.types.GET_RELATORIO_ORDENS_ERROR:
      return {
        ...state,
        isRelatorioLoading: false,
        isRelatorioError: true,
      };
    case actions.types.CANCEL_ORDER_START:
      return {
        ...state,
        isCancelling: true,
        cancelError: null,
      };
    case actions.types.CANCEL_ORDER_SUCCESS:
      return {
        ...state,
        isCancelling: false,
        ordensList: {
          ...state.ordensList,
          ordens: state.ordensList.ordens.map((o) => (
            o.id === action.payload ? { ...o, status: 'Cancelada' } : o
          )),
        },
      };
    case actions.types.CANCEL_ORDER_ERROR:
      return {
        ...state,
        isCancelling: false,
        cancelError: action.payload,
      };
    case actions.types.VINCULAR_CONDICAO_START:
      return {
        ...state,
        modalVincularCondicao: {
          ...state.modalVincularCondicao,
          loadingCondicoes: {
            ...state.modalVincularCondicao.loadingCondicoes,
            [action.payload.condicaoId]: true,
          },
        },
      };
    case actions.types.VINCULAR_CONDICAO_SUCCESS:
      return {
        ...state,
        modalVincularCondicao: {
          ...state.modalVincularCondicao,
          loadingCondicoes: {
            ...state.modalVincularCondicao.loadingCondicoes,
            [action.payload.condicaoId]: false,
          },
          condicoes: state.modalVincularCondicao.condicoes.map(
            (condicao) => (condicao.id === action.payload.condicaoId
              ? { ...condicao, atrelada: action.payload.associar }
              : condicao),
          ),
        },
      };
    case actions.types.VINCULAR_CONDICAO_ERROR:
      return {
        ...state,
        modalVincularCondicao: {
          ...state.modalVincularCondicao,
          loadingCondicoes: {
            ...state.modalVincularCondicao.loadingCondicoes,
            [action.payload.condicaoId]: false,
          },
        },
      };

    case actions.types.GET_CONDICOES_AVISTA_START:
      return {
        ...state,
        modalVincularCondicaoAVista: {
          ...state.modalVincularCondicaoAVista,
          isLoading: true,
          isError: false,
          errorMessage: null,
        },
      };

    case actions.types.GET_CONDICOES_AVISTA_SUCCESS:
      return {
        ...state,
        modalVincularCondicaoAVista: {
          ...state.modalVincularCondicaoAVista,
          condicoes: action.payload.condicoes,
          isLoading: false,
          isError: false,
        },
      };

    case actions.types.GET_CONDICOES_AVISTA_ERROR:
      return {
        ...state,
        modalVincularCondicaoAVista: {
          ...state.modalVincularCondicaoAVista,
          isLoading: false,
          isError: true,
          errorMessage: action.payload.error,
        },
      };

    case actions.types.VINCULAR_CONDICAO_AVISTA_START:
      return {
        ...state,
        modalVincularCondicaoAVista: {
          ...state.modalVincularCondicaoAVista,
          loadingCondicoes: {
            ...state.modalVincularCondicaoAVista.loadingCondicoes,
            [action.payload.descontoId]: true,
          },
        },
      };

    case actions.types.VINCULAR_CONDICAO_AVISTA_SUCCESS:
      return {
        ...state,
        modalVincularCondicaoAVista: {
          ...state.modalVincularCondicaoAVista,
          condicoes: state.modalVincularCondicaoAVista.condicoes.map((condicao) => {
            if (condicao.id === action.payload.descontoId) {
              return { ...condicao, vinculada: action.payload.associar };
            }
            return condicao;
          }),
          loadingCondicoes: {
            ...state.modalVincularCondicaoAVista.loadingCondicoes,
            [action.payload.descontoId]: false,
          },
        },
      };

    case actions.types.VINCULAR_CONDICAO_AVISTA_ERROR:
      return {
        ...state,
        modalVincularCondicaoAVista: {
          ...state.modalVincularCondicaoAVista,
          loadingCondicoes: {
            ...state.modalVincularCondicaoAVista.loadingCondicoes,
            [action.payload.descontoId]: false,
          },
        },
      };

    case actions.types.GET_VEICULOS_SEM_CONDICAO_COMERCIAL_START:
      return {
        ...state,
        modalVincularCondicao: {
          ...state.modalVincularCondicao,
          isLoadingVeiculosSemCondicao: true,
          isErrorVeiculosSemCondicao: false,
        },
      };

    case actions.types.GET_VEICULOS_SEM_CONDICAO_COMERCIAL_SUCCESS:
      return {
        ...state,
        modalVincularCondicao: {
          ...state.modalVincularCondicao,
          veiculosSemCondicao: action.payload.veiculos,
          isLoadingVeiculosSemCondicao: false,
          isErrorVeiculosSemCondicao: false,
        },
      };

    case actions.types.GET_VEICULOS_SEM_CONDICAO_COMERCIAL_ERROR:
      return {
        ...state,
        modalVincularCondicao: {
          ...state.modalVincularCondicao,
          isLoadingVeiculosSemCondicao: false,
          isErrorVeiculosSemCondicao: true,
          veiculosSemCondicao: [],
        },
      };

    case actions.types.TOGGLE_VEICULOS_SEM_CONDICAO_COMERCIAL_VISIBILITY:
      return {
        ...state,
        modalVincularCondicao: {
          ...state.modalVincularCondicao,
          isListaVeiculosVisible: !state.modalVincularCondicao.isListaVeiculosVisible,
        },
      };

    case actions.types.GET_VEICULOS_SEM_CONDICAO_AVISTA_START:
      return {
        ...state,
        modalVincularCondicaoAVista: {
          ...state.modalVincularCondicaoAVista,
          isLoadingVeiculosSemCondicao: true,
          isErrorVeiculosSemCondicao: false,
        },
      };

    case actions.types.GET_VEICULOS_SEM_CONDICAO_AVISTA_SUCCESS:
      return {
        ...state,
        modalVincularCondicaoAVista: {
          ...state.modalVincularCondicaoAVista,
          veiculosSemCondicao: action.payload.veiculos,
          isLoadingVeiculosSemCondicao: false,
          isErrorVeiculosSemCondicao: false,
        },
      };

    case actions.types.GET_VEICULOS_SEM_CONDICAO_AVISTA_ERROR:
      return {
        ...state,
        modalVincularCondicaoAVista: {
          ...state.modalVincularCondicaoAVista,
          isLoadingVeiculosSemCondicao: false,
          isErrorVeiculosSemCondicao: true,
          veiculosSemCondicao: [],
        },
      };

    case actions.types.TOGGLE_VEICULOS_SEM_CONDICAO_AVISTA_VISIBILITY:
      return {
        ...state,
        modalVincularCondicaoAVista: {
          ...state.modalVincularCondicaoAVista,
          isListaVeiculosVisible: !state.modalVincularCondicaoAVista.isListaVeiculosVisible,
        },
      };

    case actions.types.VALIDAR_ORDEM_START:
      return {
        ...state,
        validacaoOrdem: {
          isLoading: true,
          isError: false,
          resultado: null,
          relatorioGerado: false,
        },
      };

    case actions.types.VALIDAR_ORDEM_SUCCESS:
      return {
        ...state,
        validacaoOrdem: {
          ...state.validacaoOrdem,
          isLoading: false,
          isError: false,
          resultado: action.payload.resultado,
        },
      };

    case actions.types.VALIDAR_ORDEM_ERROR:
      return {
        ...state,
        validacaoOrdem: {
          ...state.validacaoOrdem,
          isLoading: false,
          isError: true,
        },
      };

    case actions.types.GERAR_RELATORIO_ERROS_START:
      return {
        ...state,
        validacaoOrdem: {
          ...state.validacaoOrdem,
          isRelatorioErrosLoading: true,
          isError: false,
        },
      };

    case actions.types.GERAR_RELATORIO_ERROS_SUCCESS:
      return {
        ...state,
        validacaoOrdem: {
          ...state.validacaoOrdem,
          isRelatorioErrosLoading: false,
          isError: false,
          relatorioGerado: true,
        },
      };

    case actions.types.GERAR_RELATORIO_ERROS_ERROR:
      return {
        ...state,
        validacaoOrdem: {
          ...state.validacaoOrdem,
          isRelatorioErrosLoading: false,
          isError: true,
        },
      };

    case actions.types.RESET_VALIDACAO_ORDEM:
      return {
        ...state,
        validacaoOrdem: {
          isLoading: false,
          isRelatorioErrosLoading: false,
          isError: false,
          resultado: null,
          relatorioGerado: false,
        },
      };

    default:
      return state;
  }
};
