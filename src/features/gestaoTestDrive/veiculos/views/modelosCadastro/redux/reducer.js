import { applyProperty } from 'utils/object';

import actions from './actions';

const INITIAL_STATE = {
  isOpen: false,

  sendModelo: {
    isLoading: false,
    isError: false,
  },

  deleteModelo: {
    isLoading: false,
    isError: false,
  },

  uploadImagem: {
    isLoading: false,
    isError: false,
    urlImagem: null,
    urlDownload: null,
  },

  modelo: {
    id: null,
    marca: null,
    codigoModelo: null,
    descricaoModelo: null,
    urlModelo: null,
  },
};

const reduceSendModelo = (state, action) => {
  switch (action.type) {
    case actions.types.SEND_MODELO_START:
      return {
        ...state,
        sendModelo: {
          ...state.sendModelo,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.SEND_MODELO_SUCCESS:
      return {
        ...state,
        isOpen: false,
        sendModelo: {
          ...state.sendModelo,
          isLoading: false,
          isError: false,
        },
        modelo: INITIAL_STATE.modelo,
        uploadImagem: INITIAL_STATE.uploadImagem,
      };
    case actions.types.SEND_MODELO_ERROR:
      return {
        ...state,
        sendModelo: {
          ...state.sendModelo,
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
          urlImagem: action.payload.urlImagem,
          urlDownload: action.payload.urlDownload,
        },
        modelo: {
          ...state.modelo,
          urlModelo: null,
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

const reduceDeleteModelo = (state, action) => {
  switch (action.type) {
    case actions.types.DELETE_MODELO_START:
      return {
        ...state,
        deleteModelo: {
          ...state.deleteModelo,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.DELETE_MODELO_SUCCESS:
      return {
        ...state,
        isOpen: false,
        deleteModelo: {
          ...state.deleteModelo,
          isLoading: false,
          isError: false,
        },
        modelo: INITIAL_STATE.modelo,
      };
    case actions.types.DELETE_MODELO_ERROR:
      return {
        ...state,
        deleteModelo: {
          ...state.deleteModelo,
          isLoading: false,
          isError: true,
        },
      };

    default:
      return state;
  }
};

export default (state = INITIAL_STATE, action = { type: '@@modeloCadastro/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_SEND_MODELO)) {
    return reduceSendModelo(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_UPLOAD_IMAGEM)) {
    return reduceUplodaImagem(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_DELETE_MODELO)) {
    return reduceDeleteModelo(state, action);
  }

  switch (action.type) {
    case actions.types.UPDATE_MODELO_PROPERTY:
      return {
        ...state,
        modelo: applyProperty(
          state.modelo,
          action.payload.propertyName,
          action.payload.value?.toUpperCase(),
        ),
      };
    case actions.types.SET_URL_MODELO:
      return {
        ...state,
        modelo: {
          ...state.modelo,
          urlModelo: action.payload.urlModelo,
        },
      };
    case actions.types.SET_OPEN:
      return {
        ...state,
        isOpen: action.payload.isOpen,
        snackbarErrors: [],
        lastSnackbarErrorId: 0,
      };
    case actions.types.EDIT_MODELO:
      return {
        ...state,
        modelo: action.payload.modelo,
      };
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
