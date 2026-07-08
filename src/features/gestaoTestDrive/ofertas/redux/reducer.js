import actions from './actions';

const INITIAL_STATE = {
  search: {
    status: 'all',
    marcas: [],
    produtos: [],
    produto: [],
    data: null,
    texto: null,
    itensPorPagina: 10,
    pagina: 0,
  },

  isFilterSelected: false,

  ofertas: {
    isLoading: true,
    isError: null,
    isSuccess: null,
    ofertas: [],
  },
  marcasComOfertas: [],

};

export default (state = INITIAL_STATE, action = { type: 'default' }) => {
  switch (action.type) {
    case actions.types.SET_MARCAS:
      return {
        ...state,
        search: {
          ...state.search,
          marcas: action.payload.marcas,
          pagina: 0,
        },
        isFilterSelected: true,
      };
    case actions.types.SET_PRODUTO:
      return {
        ...state,
        search: {
          ...state.search,
          produto: action.payload.produto,
          pagina: 0,
        },
        isFilterSelected: true,
      };
    case actions.types.SET_DATA:
      return {
        ...state,
        search: {
          ...state.search,
          data: action.payload.data,
          pagina: 0,
        },
        isFilterSelected: true,
      };
    case actions.types.SET_TEXTO:
      return {
        ...state,
        search: {
          ...state.search,
          texto: action.payload.texto,
        },
        isFilterSelected: true,
      };
    case actions.types.SET_STATUS:
      return {
        ...state,
        search: {
          ...state.search,
          status: action.payload.status,
        },
        isFilterSelected: true,
      };
    case actions.types.SET_PAGINA:
      return {
        ...state,
        search: {
          ...state.search,
          pagina: action.payload.pagina,
        },
      };
    case actions.types.GET_OFERTAS_START:
      return {
        ...state,
        ofertas: {
          ...state.ofertas,
          isLoading: true,
          isSuccess: false,
          isError: false,
          ofertas: [],
        },
      };
    case actions.types.GET_OFERTAS_SUCCESS:
      return {
        ...state,
        ofertas: {
          ...state.ofertas,
          isLoading: false,
          isSuccess: true,
          isError: false,
          ofertas: action.payload.gruposOfertas,
        },
        marcasComOfertas: action.payload.marcasComOfertas,
        search: {
          ...state.search,
          produtos: action.payload.produtos,
        },
        isFilterSelected: false,
      };
    case actions.types.GET_OFERTAS_ERROR:
      return {
        ...state,
        ofertas: {
          ...state.ofertas,
          isLoading: false,
          isSuccess: false,
          isError: true,
        },
      };
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
