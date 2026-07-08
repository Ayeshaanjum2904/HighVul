import { applyProperty } from 'utils/object';
import actions from './actions';

const INITIAL_STATE = {
  filters: {
    texto: null,
    regiao: [],
    regiaoFilter: [],
    statusFilter: [],
    status: [],
  },

  isFilterSelected: false,

  solicitacoesList: {
    isLoading: false,
    isError: false,
    page: null,
    ipp: 25,
    totalItems: null,
    solicitacoes: null,
  },
};

const reduceGetSolicitacoes = (state, action) => {
  switch (action.type) {
    case actions.types.GET_SOLICITACOES_START:
      return {
        ...state,
        solicitacoesList: {
          ...state.solicitacoesList,
          isLoading: true,
          isError: false,
          solicitacoes: null,
        },
      };
    case actions.types.GET_SOLICITACOES_SUCCESS:
      return {
        ...state,
        solicitacoesList: {
          ...state.solicitacoesList,
          isLoading: false,
          isError: false,
          solicitacoes: action.payload.solicitacoes,
          page: action.payload.pagina,
          totalItems: action.payload.itensTotal,
          ipp: action.payload.itensPorPagina,
        },
        isFilterSelected: false,
      };
    case actions.types.GET_SOLICITACOES_ERROR:
      return {
        ...state,
        solicitacoesList: {
          ...state.solicitacoesList,
          isLoading: false,
          isError: true,
          solicitacoes: null,
          page: null,
          totalItems: null,
        },
      };
    case actions.types.SET_REGIAO_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          regiaoFilter: action.payload.regiao,
        },
      };
    case actions.types.SET_STATUS_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          statusFilter: action.payload.status,
        },
      };
    default:
      return state;
  }
};

// eslint-disable-next-line no-unused-vars
export default (state = INITIAL_STATE, action = { type: 'default' }) => {
  if (action.type.startsWith(actions.types.PREFIX_GET_SOLICITACOES)) {
    return reduceGetSolicitacoes(state, action);
  }

  switch (action.type) {
    case actions.types.SET_PAGE:
      return {
        ...state,
        solicitacoesList: {
          ...state.solicitacoesList,
          page: action.payload.page,
        },
      };
    case actions.types.SET_TEXTO:
      return {
        ...state,
        filters: {
          ...state.filters,
          texto: action.payload.texto,
        },
        isFilterSelected: true,
      };
    case actions.types.SET_IPP:
      return {
        ...state,
        solicitacoesList: {
          ...state.solicitacoesList,
          ipp: action.payload.ipp,
          page: 0,
        },
      };
    case actions.types.SET_SOLICITACAO_VISUALIZADA:
      return {
        ...state,
        solicitacoesList: {
          ...state.solicitacoesList,
          solicitacoes: (state.solicitacoesList?.solicitacoes || []).map((s) => {
            if (s.solicitacaoId === action.payload.solicitacaoId) {
              return { ...applyProperty(s, 'visualizado', true) };
            }
            return s;
          }),
        },
      };
    case actions.types.SET_REGIAO:
      return {
        ...state,
        filters: {
          ...state.filters,
          regiao: action.payload.regiao,
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
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
