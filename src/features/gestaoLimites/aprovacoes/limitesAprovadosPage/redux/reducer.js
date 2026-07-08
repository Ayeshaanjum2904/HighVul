import { applyProperty } from 'utils/object';
import actions from './actions';
import findVersions from '../helpers/findVersions';

const INITIAL_STATE = {
  snackbarErrors: [],
  lastSnackbarErrorId: 0,

  limitesAprovadosList: {
    isLoading: true,
    isError: false,
    limites: null,
  },

  pageParams: {
    page: 0,
    ipp: 25,
    itensTotais: null,
  },

  limiteDetails: {
    isLoading: false,
    isError: false,
    condicao: [],
    updateCondicao: false,
    motivo: null,
    detalhes: [],
    idLimite: null,
    historico: [],
    alterarStatusList: [],
    openPopperSave: false,
  },

  limitesAprovadosSisgar: {
    isLoading: false,
    isError: false,
    condicaoSisgar: null,
  },

  filters: {
    idLimite: null,
    status: [],
    statusList: [],
    regional: [],
    regionalList: [],
    produto: [],
    produtoList: [],
    brand: [],
    brandList: [],
    matriz: [],
    matrizList: [],
    dataInicioAprovacao: null,
    dataFimAprovacao: null,
    dataInicioVencimento: null,
    dataFimVencimento: null,
    nomeColuna: 'DataAlteracaoStatus',
    sentidoOrdenacao: 'asc',
  },

  cancelamentoSisgar: {
    isLoading: false,
    isError: false,
    errorMessage: null,
  },

  cleaned: false,
  cadastroPage: false,
  isFilterSelected: false,
  isModified: false,
  selectedIds: [],
};

const reduceGetDetalheLimite = (state, action) => {
  switch (action.type) {
    case actions.types.GET_DETALHE_LIMITE_START:
      return {
        ...state,
        limiteDetails: {
          ...state.limiteDetails,
          isLoading: true,
          isError: false,
          detalhes: [],
          historico: [],
          condicao: [],
        },
      };
    case actions.types.GET_DETALHE_LIMITE_SUCCESS:
      return {
        ...state,
        limiteDetails: {
          ...state.limiteDetails,
          isLoading: false,
          isError: false,
          detalhes: action.payload.detalhes,
          historico: action.payload.historico,
        },
      };
    case actions.types.GET_DETALHE_LIMITE_ERROR:
      return {
        ...state,
        limiteDetails: {
          ...state.limiteDetails,
          isLoading: false,
          isError: true,
          detalhe: [],
          historico: [],
        },
      };
    case actions.types.SET_ALTERAR_STATUS_LIST:
      return {
        ...state,
        limiteDetails: {
          ...state.limiteDetails,
          alterarStatusList: action.payload.alterarStatusList,
        },
      };
    case actions.types.SET_CONDICAO: {
      const { idVersao, condicao: novaCondicao } = action.payload;
      const condicaoFinal = state.limiteDetails.condicao.some(
        (item) => item.idVersao === idVersao,
      )
        ? state.limiteDetails.condicao.map((item) => (item.idVersao === idVersao
          ? { ...item, condicao: novaCondicao }
          : item))
        : [...state.limiteDetails.condicao, { idVersao, condicao: novaCondicao }];

      return {
        ...state,
        limiteDetails: {
          ...state.limiteDetails,
          condicao: condicaoFinal,
        },
      };
    }

    default:
      return state;
  }
};

const reduceGetLimitesFilters = (state, action) => {
  switch (action.type) {
    case actions.types.GET_LIMITES_FILTERS_START:
      return {
        ...state,
        limiteFilters: {
          ...state.limiteFilters,
          isLoading: true,
          isError: false,
          limites: [],
        },
      };
    case actions.types.GET_LIMITES_FILTERS_SUCCESS:
      return {
        ...state,
        limiteFilters: {
          ...state.limiteFilters,
          isLoading: false,
          isError: false,
          limites: action.payload.limites,
        },
      };
    case actions.types.GET_LIMITES_FILTERS_ERROR:
      return {
        ...state,
        limiteFilters: {
          ...state.limiteFilters,
          isLoading: false,
          isError: true,
          limites: [],
        },
      };
    default:
      return state;
  }
};

export default (state = INITIAL_STATE, action = { type: 'default' }) => {
  if (action.type.startsWith(actions.types.PREFIX_LIMITES_APROVADOS_DETALHES)) {
    return reduceGetDetalheLimite(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_LIMITES_APROVADOS_FILTERS)) {
    return reduceGetLimitesFilters(state, action);
  }
  switch (action.type) {
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
    case actions.types.SET_PAGE_PARAMS: {
      return {
        ...state,
        pageParams: {
          ...applyProperty(
            state.pageParams,
            action.payload.propertyName,
            action.payload.value,
          ),
        },
      };
    }
    case actions.types.SET_UPDATE_CONDICAO: {
      return {
        ...state,
        limiteDetails: {
          ...state.limiteDetails,
          updateCondicao: action.payload.updateCondicao,
        },
      };
    }
    case actions.types.SET_OPEN_POPPER_SAVE: {
      return {
        ...state,
        limiteDetails: {
          ...state.limiteDetails,
          openPopperSave: action.payload.openPopperSave,
        },
      };
    }
    case actions.types.SET_IS_MODIFIED: {
      return {
        ...state,
        isModified: action.payload.modified,
      };
    }
    case actions.types.SET_MOTIVO: {
      return {
        ...state,
        limiteDetails: {
          ...state.limiteDetails,
          motivo: action.payload.motivo,
        },
      };
    }
    case actions.types.GET_LIMITES_APROVADOS_START:
      return {
        ...state,
        limitesAprovadosList: {
          ...state.limitesAprovadosList,
          isLoading: true,
          isError: false,
          limites: null,
        },
      };
    case actions.types.GET_LIMITES_APROVADOS_ERROR:
      return {
        ...state,
        limitesAprovadosList: {
          ...state.limitesAprovadosList,
          isLoading: false,
          isError: true,
          limites: null,
        },
      };
    case actions.types.GET_LIMITES_APROVADOS_SUCCESS:
      return {
        ...state,
        limitesAprovadosList: {
          ...state.limitesAprovadosList,
          isLoading: false,
          isError: false,
          limites: findVersions(action.payload.limites.limitesAprovados),
        },
        pageParams: {
          ...state.pageParams,
          itensTotais: action.payload.limites.itensTotais,
        },
      };
    case actions.types.GET_LIMITES_APROVADOS_SISGAR_START:
      return {
        ...state,
        limitesAprovadosSisgar: {
          ...state.limitesAprovadosSisgar,
          isLoading: true,
          isError: false,
          condicaoSisgar: null,
        },
      };
    case actions.types.GET_LIMITES_APROVADOS_SISGAR_SUCCESS:
      return {
        ...state,
        limitesAprovadosSisgar: {
          ...state.limitesAprovadosSisgar,
          isLoading: false,
          isError: false,
          condicaoSisgar: action.payload.limiteAprovadoSisgar,
        },
      };
    case actions.types.GET_LIMITES_APROVADOS_SISGAR_ERROR:
      return {
        ...state,
        limitesAprovadosSisgar: {
          ...state.limitesAprovadosSisgar,
          isLoading: false,
          isError: true,
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
    case actions.types.SET_REGIONAL_LIST:
      return {
        ...state,
        filters: {
          ...state.filters,
          regionalList: action.payload.regionalList,
        },
      };
    case actions.types.SET_PRODUTO_LIST:
      return {
        ...state,
        filters: {
          ...state.filters,
          produtoList: action.payload.produtoList,
        },
      };
    case actions.types.SET_BRAND_LIST:
      return {
        ...state,
        filters: {
          ...state.filters,
          brandList: action.payload.brandList,
        },
      };
    case actions.types.SET_MATRIZ_LIST:
      return {
        ...state,
        filters: {
          ...state.filters,
          matrizList: action.payload.matrizList,
        },
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
    case actions.types.SET_REGIONAL:
      return {
        ...state,
        filters: {
          ...state.filters,
          regional: action.payload.regional,
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
    case actions.types.SET_BRAND:
      return {
        ...state,
        filters: {
          ...state.filters,
          brand: action.payload.brand,
        },
        isFilterSelected: true,
      };
    case actions.types.SET_MATRIZ:
      return {
        ...state,
        filters: {
          ...state.filters,
          matriz: action.payload.matriz,
        },
        isFilterSelected: true,
      };
    case actions.types.SET_ID_LIMITE:
      return {
        ...state,
        filters: {
          ...state.filters,
          idLimite: action.payload.texto,
        },
        isFilterSelected: true,
      };
    case actions.types.SET_START_DATE:
      return {
        ...state,
        filters: {
          ...state.filters,
          dataInicioAprovacao: action.payload.dataInicioAprovacao,
        },
        isFilterSelected: true,
      };
    case actions.types.SET_END_DATE:
      return {
        ...state,
        filters: {
          ...state.filters,
          dataFimAprovacao: action.payload.dataFimAprovacao,
        },
        isFilterSelected: true,
      };
    case actions.types.SET_START_DATE_VENC:
      return {
        ...state,
        filters: {
          ...state.filters,
          dataInicioVencimento: action.payload.dataInicioVencimento,
        },
        isFilterSelected: true,
      };
    case actions.types.SET_END_DATE_VENC:
      return {
        ...state,
        filters: {
          ...state.filters,
          dataFimVencimento: action.payload.dataFimVencimento,
        },
        isFilterSelected: true,
      };
    case actions.types.SET_SORTING_ORDER:
      return {
        ...state,
        filters: {
          ...state.filters,
          nomeColuna: action.payload.nomeColuna,
          sentidoOrdenacao: action.payload.sentidoOrdenacao,
        },
      };
    case actions.types.CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          idLimite: null,
          status: [],
          regional: [],
          produto: [],
          brand: [],
          matriz: [],
          dataInicioAprovacao: null,
          dataFimAprovacao: null,
          dataInicioVencimento: null,
          dataFimVencimento: null,
        },
        cleaned: true,
      };
    case actions.types.SET_IS_FILTER_SELECTED:
      return {
        ...state,
        isFilterSelected: action.payload.isFilterSelected,
        cleaned: false,
      };
    case actions.types.SET_SELECTED_IDS:
      return {
        ...state,
        selectedIds: action.payload.idLimite,
      };
    case actions.types.SET_CADASTRO_PAGE:
      return {
        ...state,
        cadastroPage: action.payload.cadastroPage,
      };
    case actions.types.CANCELAMENTO_SISGAR_START:
      return {
        ...state,
        cancelamentoSisgar: {
          isLoading: true,
          isError: false,
          errorMessage: null,
        },
      };
    case actions.types.CANCELAMENTO_SISGAR_SUCCESS:
      return {
        ...state,
        cancelamentoSisgar: {
          isLoading: false,
          isError: false,
          errorMessage: null,
        },
      };
    case actions.types.CANCELAMENTO_SISGAR_ERROR:
      return {
        ...state,
        cancelamentoSisgar: {
          isLoading: false,
          isError: true,
          errorMessage: action.payload.errorMessage,
        },
      };
    case actions.types.UPDATE_LIMITE_STATUS:
      return {
        ...state,
        limiteDetails: {
          ...state.limiteDetails,
          detalhes: {
            ...state.limiteDetails.detalhes,
            statusLimite: action.payload.statusLimite,
          },
        },
      };
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
