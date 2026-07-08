import { applyProperty } from 'utils/object';
import actions from './actions';

const INITIAL_STATE = {
  marcas: null,
  modelos: [],
  urlVeiculosList: [],
  snackbarErrors: [],
  lastSnackbarErrorId: 0,

  sendVeiculo: {
    isLoading: false,
    isError: false,
  },

  uploadImagem: {
    isLoading: false,
    isError: false,
    urlImagem: null,
    urlDownload: null,
  },

  veiculo: {
    id: null,
    codigoModelo: null,
    codigoVersao: null,
    codigoSerie: null,
    descricaoModelo: null,
    descricaoVersao: null,
    descricaoSerie: null,
    nomeComercial: null,
    modelYear: null,
    urlVeiculo: null,
    marca: null,
    allestimento: null,
    valor: null,
  },

  mvsDisabled: false,
  allestimentoDisabled: false,

};

const reduceSendVeiculo = (state, action) => {
  switch (action.type) {
    case actions.types.SEND_VEICULO_START:
      return {
        ...state,
        sendVeiculo: {
          ...state.sendVeiculo,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.SEND_VEICULO_SUCCESS:
      return {
        ...state,
        sendVeiculo: {
          ...state.sendVeiculo,
          isLoading: false,
          isError: false,
        },
        uploadImagem: INITIAL_STATE.uploadImagem,
        veiculo: {
          ...INITIAL_STATE.veiculo,
          marca: state.veiculo.marca,
          codigoModelo: state.veiculo.codigoModelo,
          descricaoModelo: state.veiculo.descricaoModelo,
        },
      };
    case actions.types.SEND_VEICULO_UPDATE_SUCCESS:
      return {
        ...state,
        sendVeiculo: {
          ...state.sendVeiculo,
          isLoading: false,
          isError: false,
        },
        uploadImagem: INITIAL_STATE.uploadImagem,
        veiculo: {
          ...action.payload.veiculo,
          urlVeiculo: action.payload.veiculo.urlVeiculo,
        },
        allestimentoDisabled: !!action.payload.veiculo.allestimento,
      };
    case actions.types.SEND_VEICULO_ERROR:
      return {
        ...state,
        sendVeiculo: {
          ...state.sendVeiculo,
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
          ...state.uploadImagem,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.UPLOAD_IMAGEM_SUCCESS:
      return {
        ...state,
        uploadImagem: {
          ...state.uploadImagem,
          isLoading: false,
          isError: false,
          urlImagem: action.payload.urlImagem,
          urlDownload: action.payload.urlDownload,
        },
      };
    case actions.types.UPLOAD_IMAGEM_ERROR:
      return {
        ...state,
        uploadImagem: {
          ...state.uploadImagem,
          isLoading: false,
          isError: true,
        },
      };
    default:
      return state;
  }
};

export default (state = INITIAL_STATE, action = { type: '@@veiculosCadastro/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_SEND_VEICULO)) {
    return reduceSendVeiculo(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_UPLOAD_IMAGEM)) {
    return reduceUplodaImagem(state, action);
  }

  switch (action.type) {
    case actions.types.UPDATE_VEICULO_PROPERTY:
      return {
        ...state,
        veiculo: applyProperty(
          state.veiculo,
          action.payload.propertyName,
          action.payload.propertyName === 'valor'
            ? action.payload.value
            : action.payload.value?.toUpperCase(),
        ),
      };
    case actions.types.SET_BRANDS: {
      return {
        ...state,
        marcas: action.payload.brands,
      };
    }
    case actions.types.GET_URL_VEICULOS_LIST: {
      return {
        ...state,
        urlVeiculosList: [],
        veiculo: {
          ...state.veiculo,
          urlVeiculo: null,
        },
      };
    }
    case actions.types.SET_URL_VEICULO: {
      return {
        ...state,
        veiculo: {
          ...state.veiculo,
          urlVeiculo: action.payload.urlVeiculo,
        },
      };
    }
    case actions.types.SET_URL_VEICULOS_LIST: {
      return {
        ...state,
        urlVeiculosList: action.payload.urlVeiculosList,
      };
    }
    case actions.types.GET_MODELOS: {
      return {
        ...state,
        modelos: [],
        veiculo: {
          ...state.veiculo,
          codigoModelo: null,
          descricaoModelo: null,
        },
      };
    }
    case actions.types.SET_MODELOS: {
      return {
        ...state,
        modelos: action.payload.modelos,
      };
    }
    case actions.types.SET_MODELO: {
      return {
        ...state,
        veiculo: {
          ...state.veiculo,
          codigoModelo: action.payload.modelo?.codigoModelo ?? null,
          descricaoModelo: action.payload.modelo?.descricaoModelo ?? null,
        },
      };
    }
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

    case actions.types.EDIT_VEICULO:
      return {
        ...state,
        veiculo: action.payload.veiculo,
        mvsDisabled: !!(action.payload.veiculo.codigoModelo
          || action.payload.veiculo.codigoVersao
          || action.payload.veiculo.codigoSerie),
        allestimentoDisabled: !!action.payload.veiculo.allestimento,
      };
    case actions.types.RESET_STORE: {
      return {
        ...INITIAL_STATE,
        veiculo: {
          ...INITIAL_STATE.veiculo,
          marca: null,
        },
      };
    }
    default:
      return state;
  }
};
