import actions from './actions';

const INITIAL_STATE = {
  snackbarErrors: [],
  lastSnackbarErrorId: 0,

  filters: {
    texto: null,
  },

  isFilterSelected: false,

  deleteContato: {
    isOpen: false,
    contatoId: null,
    isLoading: false,
    isError: false,
  },

  exportRelatorio: {
    isExporting: false,
    isError: false,
  },

  list: {
    isLoading: false,
    isError: false,
    contatos: null,
  },

  pageParams: {
    page: null,
    ipp: 25,
    totalItems: null,
  },
};

const reduceGetContatos = (state, action) => {
  switch (action.type) {
    case actions.types.GET_CONTATOS_START:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: true,
          isError: false,
          contatos: null,
        },
      };
    case actions.types.GET_CONTATOS_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          isError: false,
          contatos: action.payload.contatos,
        },
        isFilterSelected: false,
        pageParams: action.payload.pageParams,
      };
    case actions.types.GET_CONTATOS_ERROR:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          isError: true,
          contatos: null,
        },
      };
    default:
      return state;
  }
};

const reduceDeleteContato = (state, action) => {
  switch (action.type) {
    case actions.types.DELETE_CONTATO_START:
      return {
        ...state,
        deleteContato: {
          ...state.deleteContato,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.DELETE_CONTATO_SUCCESS:
      return {
        ...state,
        deleteContato: {
          ...state.deleteContato,
          isLoading: false,
          isError: false,
          isOpen: false,
        },
      };
    case actions.types.DELETE_CONTATO_ERROR:
      return {
        ...state,
        deleteContato: {
          ...state.deleteContato,
          isLoading: false,
          isError: true,
        },
      };

    default:
      return state;
  }
};

const reduceExportRelatorio = (state, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default (state = INITIAL_STATE, action = { type: '@@alertasPage/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_GET_CONTATOS)) {
    return reduceGetContatos(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_DELETE_CONTATO)) {
    return reduceDeleteContato(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_EXPORT_RELATORIO)) {
    return reduceExportRelatorio(state, action);
  }
  switch (action.type) {
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
    case actions.types.SET_CONTATO_ID: {
      return {
        ...state,
        deleteContato: {
          ...state.deleteContato,
          contatoId: action.payload.id,
        },
      };
    }
    case actions.types.SET_TEXTO_CONTATO:
      return {
        ...state,
        filters: {
          ...state.filters,
          texto: action.payload.texto,
        },
        isFilterSelected: true,
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
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
