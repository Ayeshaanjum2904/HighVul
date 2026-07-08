import actions from './actions';

const INITIAL_STATE = {
  isModalAlertaOpen: false,
  signedUrl: null,
  s3Key: null,

  sendAlerta: {
    isLoading: false,
    isError: false,
  },

  getAlerta: {
    isLoading: false,
    isError: false,
  },

  uploadImagem: {
    isLoading: false,
    isError: false,
  },

  alerta: {
    id: null,
    titulo: null,
    mensagem: null,
    urlImagem: null,
    nomeImagem: null,
    startDate: null,
    endDate: null,
    selectedBrands: [],
  },

};

const reduceSendAlerta = (state, action) => {
  switch (action.type) {
    case actions.types.SEND_ALERTA_START:
      return {
        ...state,
        sendAlerta: {
          ...state.sendAlerta,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.SEND_ALERTA_SUCCESS:
      return {
        ...state,
        sendAlerta: {
          ...state.sendAlerta,
          isLoading: false,
          isError: false,
        },
        alerta: INITIAL_STATE.alerta,
      };
    case actions.types.SEND_ALERTA_ERROR:
      return {
        ...state,
        sendAlerta: {
          ...state.sendAlerta,
          isLoading: false,
          isError: true,
        },
      };
    default:
      return state;
  }
};

const reduceUplodaImagem = (state, action) => {
  switch (action.type) {
    case actions.types.UPLOAD_IMAGEM_START:
      return {
        ...state,
        uploadImagem: {
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.UPLOAD_IMAGEM_SUCCESS:
      return {
        ...state,
        uploadImagem: {
          isLoading: false,
          isError: false,
        },
        alerta: {
          ...state.alerta,
          urlImagem: action.payload.urlImagem,
          nomeImagem: action.payload.nomeImagem,
        },
      };
    case actions.types.UPLOAD_IMAGEM_ERROR:
      return {
        ...state,
        uploadImagem: {
          isLoading: false,
          isError: true,
        },
      };

    default:
      return state;
  }
};

const reduceGetAlerta = (state, action) => {
  switch (action.type) {
    case actions.types.GET_ALERTA_START:
      return {
        ...state,
        getAlerta: {
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.GET_ALERTA_SUCCESS:
      return {
        ...state,
        getAlerta: {
          isLoading: false,
          isError: false,
        },
        alerta: action.payload.alerta,
      };
    case actions.types.GET_ALERTA_ERROR:
      return {
        ...state,
        getAlerta: {
          isLoading: false,
          isError: true,
        },
      };

    default:
      return state;
  }
};

export default (state = INITIAL_STATE, action = { type: '@@alertasModal/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_SEND_ALERTA)) {
    return reduceSendAlerta(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_UPLOAD_IMAGEM)) {
    return reduceUplodaImagem(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_GET_ALERTA)) {
    return reduceGetAlerta(state, action);
  }

  switch (action.type) {
    case actions.types.SET_TITULO: {
      return {
        ...state,
        alerta: {
          ...state.alerta,
          titulo: action.payload.titulo,
        },
      };
    }
    case actions.types.SET_MENSAGEM: {
      return {
        ...state,
        alerta: {
          ...state.alerta,
          mensagem: action.payload.mensagem,
        },
      };
    }
    case actions.types.SET_START_DATE: {
      return {
        ...state,
        alerta: {
          ...state.alerta,
          startDate: action.payload.startDate,
        },
      };
    }
    case actions.types.SET_END_DATE: {
      return {
        ...state,
        alerta: {
          ...state.alerta,
          endDate: action.payload.endDate,
        },
      };
    }
    case actions.types.SET_BRANDS: {
      return {
        ...state,
        alerta: {
          ...state.alerta,
          selectedBrands: action.payload.brands,
        },
      };
    }
    case actions.types.SET_MODAL_ALERTA_OPEN: {
      return {
        ...state,
        isModalAlertaOpen: action.payload.status,
      };
    }
    case actions.types.SET_MODAL_STATUS: {
      return {
        ...state,
        modalStatus: action.payload.status,
      };
    }
    case actions.types.SET_SIGNED_URL: {
      return {
        ...state,
        signedUrl: action.payload.signedUrl,
      };
    }
    case actions.types.SET_S3_KEY: {
      return {
        ...state,
        s3Key: action.payload.s3Key,
      };
    }
    case actions.types.CLEAR_URL_IMAGEM: {
      return {
        ...state,
        signedUrl: null,
        s3Key: null,
        alerta: {
          ...state.alerta,
          urlImagem: null,
          nomeImagem: null,
        },
      };
    }
    case actions.types.RESET_STORE: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
