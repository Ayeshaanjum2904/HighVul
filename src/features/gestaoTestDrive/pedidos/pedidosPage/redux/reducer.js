import { applyProperty } from 'utils/object';
import actions from './actions';

const INITIAL_STATE = {
  filters: {
    texto: null,
    dataInicioPedido: null,
    dataFimPedido: null,
    dataFaturamento: null,
    produto: [],
    produtos: [],
    marca: [],
    brands: [],
    regiao: [],
    regioes: [],
    veiculo: [],
    concessionaria: [],
    status: [],
    statusList: [],
    modalidade: [],
    isAscSort: false,
  },

  isFilterSelected: false,

  isFirstPageLoad: true,

  pedidosList: {
    isLoading: false,
    isError: false,
    page: 0,
    ipp: 25,
    totalItems: null,
    pedidos: null,
  },

  selectedPedidos: [],

  exportRelatorio: {
    isExporting: false,
    isError: false,
  },

  cancelarPedidos: {
    isLoading: false,
    isError: false,
    error: null,
    justificativa: '',
    modals: {
      confirmacao: {
        open: false,
      },
      aviso: {
        open: false,
      },
      misto: {
        open: false,
      },
    },
  },

  analiseCreditoPedidos: {
    isLoading: false,
    isError: false,
    error: null,
    tipoAcao: null,
    modals: {
      confirmacao: {
        open: false,
      },
      aviso: {
        open: false,
      },
      misto: {
        open: false,
      },
    },
  },
};

const reduceGetPedidos = (state, action) => {
  switch (action.type) {
    case actions.types.GET_PEDIDOS_START:
      return {
        ...state,
        pedidosList: {
          ...state.pedidosList,
          isLoading: true,
          isError: false,
          pedidos: null,
        },
      };
    case actions.types.GET_PEDIDOS_SUCCESS:
      return {
        ...state,
        pedidosList: {
          ...state.pedidosList,
          isLoading: false,
          isError: false,
          pedidos: action.payload.pedidos,
          page: action.payload.pageParams.page,
          totalItems: action.payload.pageParams.totalItems,
        },
        filters: {
          ...state.filters,
          brands: action.payload.brands,
          produtos: action.payload.produtos,
        },
        isFilterSelected: false,
      };
    case actions.types.GET_PEDIDOS_ERROR:
      return {
        ...state,
        pedidosList: {
          ...state.pedidosList,
          isLoading: false,
          isError: true,
          pedidos: null,
          page: null,
          totalItems: null,
        },
      };
    case actions.types.SET_REGIOES:
      return {
        ...state,
        filters: {
          ...state.filters,
          regioes: action.payload.regioes,
        },
      };
    case actions.types.SET_STATUS_LIST:
      return {
        ...state,
        filters: {
          ...state.filters,
          statusList: action.payload.statusList,
        },
      };
    default:
      return state;
  }
};

const reduceFilters = (state, action) => {
  switch (action.type) {
    case actions.types.SET_TEXTO:
      return {
        ...state,
        filters: {
          ...state.filters,
          texto: action.payload.texto,
        },
        isFilterSelected: action.payload.isFilterSelected,
      };
    case actions.types.SET_DATA_INICIO_PEDIDO:
      return {
        ...state,
        filters: {
          ...state.filters,
          dataInicioPedido: action.payload.dataInicioPedido,
        },
        isFilterSelected: action.payload.isFilterSelected,
      };
    case actions.types.SET_DATA_FIM_PEDIDO:
      return {
        ...state,
        filters: {
          ...state.filters,
          dataFimPedido: action.payload.dataFimPedido,
        },
        isFilterSelected: action.payload.isFilterSelected,
      };
    case actions.types.SET_DATA_FATURAMENTO:
      return {
        ...state,
        filters: {
          ...state.filters,
          dataFaturamento: action.payload.dataFaturamento,
        },
        isFilterSelected: action.payload.isFilterSelected,
      };
    case actions.types.SET_MARCA:
      return {
        ...state,
        filters: {
          ...state.filters,
          marca: action.payload.marca,
        },
        isFilterSelected: action.payload.isFilterSelected,
      };
    case actions.types.SET_REGIAO:
      return {
        ...state,
        filters: {
          ...state.filters,
          regiao: action.payload.regiao,
        },
        isFilterSelected: action.payload.isFilterSelected,
      };
    case actions.types.SET_STATUS:
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload.status,
        },
        isFilterSelected: action.payload.isFilterSelected,
      };
    case actions.types.SET_PRODUTO:
      return {
        ...state,
        filters: {
          ...state.filters,
          produto: action.payload.produto,
        },
        isFilterSelected: action.payload.isFilterSelected,
      };
    case actions.types.SET_MODALIDADE:
      return {
        ...state,
        filters: {
          ...state.filters,
          modalidade: action.payload.modalidade,
        },
        isFilterSelected: action.payload.isFilterSelected,
      };
    case actions.types.SET_VEICULO:
      return {
        ...state,
        filters: {
          ...state.filters,
          veiculo: action.payload.veiculo,
        },
        isFilterSelected: action.payload.isFilterSelected,
      };
    case actions.types.SET_CONCESSIONARIA:
      return {
        ...state,
        filters: {
          ...state.filters,
          concessionaria: action.payload.concessionaria,
        },
        isFilterSelected: action.payload.isFilterSelected,
      };
    case actions.types.SET_SORTING:
      return {
        ...state,
        filters: {
          ...state.filters,
          isAscSort: action.payload.isAscSort,
        },
      };
    case actions.types.CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          texto: null,
          dataInicioPedido: null,
          dataFimPedido: null,
          dataFaturamento: null,
          marca: [],
          regiao: [],
          status: [],
          produto: [],
          modalidade: [],
          veiculo: [],
          concessionaria: [],
        },
        isFilterSelected: false,
      };
    default:
      return state;
  }
};

const reduceSelectedPedidos = (state, action) => {
  switch (action.type) {
    case actions.types.SELECT_PEDIDO: {
      const pedidoToSelect = action.payload.pedido;
      const isAlreadySelected = state.selectedPedidos.some((p) => p.id === pedidoToSelect.id);

      if (isAlreadySelected) {
        return state;
      }

      return {
        ...state,
        selectedPedidos: [...state.selectedPedidos, pedidoToSelect],
      };
    }

    case actions.types.UNSELECT_PEDIDO:
      return {
        ...state,
        selectedPedidos: state.selectedPedidos.filter((p) => p.id !== action.payload.pedidoId),
      };

    case actions.types.CLEAR_SELECTED:
      return {
        ...state,
        selectedPedidos: [],
      };

    case actions.types.SELECT_ALL_PAGE: {
      const currentPagePedidos = action.payload.pedidos || [];
      const alreadySelectedIds = state.selectedPedidos.map((p) => p.id);
      const newSelectedPedidos = currentPagePedidos.filter(
        (pedido) => !alreadySelectedIds.includes(pedido.id),
      );

      return {
        ...state,
        selectedPedidos: [...state.selectedPedidos, ...newSelectedPedidos],
      };
    }

    default:
      return state;
  }
};

export default (state = INITIAL_STATE, action = { type: '@@pedidosPage/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_FILTERS)) {
    return reduceFilters(state, action);
  }

  if (action.type.startsWith(actions.types.PREFIX_GET_PEDIDOS)) {
    return reduceGetPedidos(state, action);
  }

  if (action.type.startsWith(actions.types.PREFIX_SELECTED_PEDIDOS)) {
    return reduceSelectedPedidos(state, action);
  }

  switch (action.type) {
    case actions.types.SET_PAGE:
      return {
        ...state,
        pedidosList: {
          ...state.pedidosList,
          page: action.payload.page,
        },
      };
    case actions.types.SET_IPP:
      return {
        ...state,
        pedidosList: {
          ...state.pedidosList,
          ipp: action.payload.ipp,
          page: 0,
        },
      };
    case actions.types.SET_PEDIDO_VISUALIZADO:
      return {
        ...state,
        pedidosList: {
          ...state.pedidosList,
          pedidos: (state.pedidosList?.pedidos || []).map((p) => {
            if (p.id === action.payload.idPedido) {
              return { ...applyProperty(p, 'visualizado', true) };
            }
            return p;
          }),
        },
      };
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    case actions.types.SET_IS_FIRST_PAGE_LOAD:
      return {
        ...state,
        isFirstPageLoad: action.payload?.isFirstPageLoad,
      };

    case actions.types.EXPORT_RELATORIO_START:
      return {
        ...state,
        exportRelatorio: {
          ...state.exportRelatorio,
          isExporting: true,
          isError: false,
        },
      };
    case actions.types.EXPORT_RELATORIO_SUCCESS:
      return {
        ...state,
        exportRelatorio: {
          ...state.exportRelatorio,
          isExporting: false,
          isError: false,
        },
      };
    case actions.types.EXPORT_RELATORIO_ERROR:
      return {
        ...state,
        exportRelatorio: {
          ...state.exportRelatorio,
          isExporting: false,
          isError: true,
        },
      };

    case actions.types.CANCELAR_PEDIDOS_START:
      return {
        ...state,
        cancelarPedidos: {
          ...state.cancelarPedidos,
          isLoading: true,
          isError: false,
          error: null,
        },
      };
    case actions.types.CANCELAR_PEDIDOS_SUCCESS:
      return {
        ...state,
        cancelarPedidos: {
          ...state.cancelarPedidos,
          isLoading: false,
          isError: false,
          error: null,
          justificativa: '',
          modals: {
            confirmacao: {
              open: false,
            },
            aviso: {
              open: false,
            },
            misto: {
              open: false,
            },
          },
        },
        selectedPedidos: [],
      };
    case actions.types.CANCELAR_PEDIDOS_ERROR:
      return {
        ...state,
        cancelarPedidos: {
          ...state.cancelarPedidos,
          isLoading: false,
          isError: true,
          error: action.payload?.error,
        },
      };

    case actions.types.OPEN_MODAL_CONFIRMACAO:
      return {
        ...state,
        cancelarPedidos: {
          ...state.cancelarPedidos,
          modals: {
            ...state.cancelarPedidos.modals,
            confirmacao: {
              open: true,
            },
          },
        },
      };
    case actions.types.CLOSE_MODAL_CONFIRMACAO:
      return {
        ...state,
        cancelarPedidos: {
          ...state.cancelarPedidos,
          justificativa: '',
          modals: {
            ...state.cancelarPedidos.modals,
            confirmacao: {
              open: false,
            },
          },
        },
      };

    case actions.types.OPEN_MODAL_AVISO:
      return {
        ...state,
        cancelarPedidos: {
          ...state.cancelarPedidos,
          modals: {
            ...state.cancelarPedidos.modals,
            aviso: {
              open: true,
            },
          },
        },
      };
    case actions.types.CLOSE_MODAL_AVISO:
      return {
        ...state,
        cancelarPedidos: {
          ...state.cancelarPedidos,
          modals: {
            ...state.cancelarPedidos.modals,
            aviso: {
              open: false,
            },
          },
        },
      };

    case actions.types.OPEN_MODAL_MISTO:
      return {
        ...state,
        cancelarPedidos: {
          ...state.cancelarPedidos,
          modals: {
            ...state.cancelarPedidos.modals,
            misto: {
              open: true,
            },
          },
        },
      };
    case actions.types.CLOSE_MODAL_MISTO:
      return {
        ...state,
        cancelarPedidos: {
          ...state.cancelarPedidos,
          justificativa: '',
          modals: {
            ...state.cancelarPedidos.modals,
            misto: {
              open: false,
            },
          },
        },
      };

    case actions.types.SET_JUSTIFICATIVA_CANCELAMENTO:
      return {
        ...state,
        cancelarPedidos: {
          ...state.cancelarPedidos,
          justificativa: action.payload.justificativa,
        },
      };

    case actions.types.ANALISE_CREDITO_START:
      return {
        ...state,
        analiseCreditoPedidos: {
          ...state.analiseCreditoPedidos,
          isLoading: true,
          isError: false,
          error: null,
        },
      };
    case actions.types.ANALISE_CREDITO_SUCCESS:
      return {
        ...state,
        analiseCreditoPedidos: {
          ...state.analiseCreditoPedidos,
          isLoading: false,
          isError: false,
          error: null,
          modals: {
            confirmacao: {
              open: false,
            },
            aviso: {
              open: false,
            },
            misto: {
              open: false,
            },
          },
        },
        selectedPedidos: [],
      };
    case actions.types.ANALISE_CREDITO_ERROR:
      return {
        ...state,
        analiseCreditoPedidos: {
          ...state.analiseCreditoPedidos,
          isLoading: false,
          isError: true,
          error: action.payload?.error,
        },
      };

    case actions.types.OPEN_MODAL_ANALISE_CONFIRMACAO:
      return {
        ...state,
        analiseCreditoPedidos: {
          ...state.analiseCreditoPedidos,
          modals: {
            ...state.analiseCreditoPedidos.modals,
            confirmacao: {
              open: true,
            },
          },
        },
      };
    case actions.types.CLOSE_MODAL_ANALISE_CONFIRMACAO:
      return {
        ...state,
        analiseCreditoPedidos: {
          ...state.analiseCreditoPedidos,
          modals: {
            ...state.analiseCreditoPedidos.modals,
            confirmacao: {
              open: false,
            },
          },
        },
      };

    case actions.types.OPEN_MODAL_ANALISE_AVISO:
      return {
        ...state,
        analiseCreditoPedidos: {
          ...state.analiseCreditoPedidos,
          modals: {
            ...state.analiseCreditoPedidos.modals,
            aviso: {
              open: true,
            },
          },
        },
      };
    case actions.types.CLOSE_MODAL_ANALISE_AVISO:
      return {
        ...state,
        analiseCreditoPedidos: {
          ...state.analiseCreditoPedidos,
          modals: {
            ...state.analiseCreditoPedidos.modals,
            aviso: {
              open: false,
            },
          },
        },
      };

    case actions.types.OPEN_MODAL_ANALISE_MISTO:
      return {
        ...state,
        analiseCreditoPedidos: {
          ...state.analiseCreditoPedidos,
          modals: {
            ...state.analiseCreditoPedidos.modals,
            misto: {
              open: true,
            },
          },
        },
      };
    case actions.types.CLOSE_MODAL_ANALISE_MISTO:
      return {
        ...state,
        analiseCreditoPedidos: {
          ...state.analiseCreditoPedidos,
          modals: {
            ...state.analiseCreditoPedidos.modals,
            misto: {
              open: false,
            },
          },
        },
      };

    case actions.types.SET_TIPO_ACAO_ANALISE_CREDITO:
      return {
        ...state,
        analiseCreditoPedidos: {
          ...state.analiseCreditoPedidos,
          tipoAcao: action.payload,
        },
      };

    default:
      return state;
  }
};
