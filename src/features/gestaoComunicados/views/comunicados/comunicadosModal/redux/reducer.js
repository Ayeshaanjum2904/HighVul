import actions from './actions';
import { ModalComunicados } from '../../../../redux/enums';

const INITIAL_STATE = {
  isModalOpen: false,
  templateModal: ModalComunicados.edicaoComunicados,
  urlFile: null,
  fileName: null,
  s3Key: null,
  signedUrl: null,
  isLoading: false,
  isError: false,
  dataEmissao: null,
  brands: [],
  key: null,

  selectors: {
    brands: [],
  },
};

export default (state = INITIAL_STATE, action = { type: '@@comunicadosModal/INIT' }) => {
  switch (action.type) {
    case actions.types.SET_TEMPLATE: {
      return {
        ...state,
        templateModal: action.payload.template,
      };
    }
    case actions.types.SET_DATA_EMISSAO: {
      return {
        ...state,
        dataEmissao: action.payload.dataEmissao,
      };
    }
    case actions.types.SET_DOCUMENTO: {
      return {
        ...state,
        documento: action.payload.documento,
      };
    }
    case actions.types.SET_BRAND: {
      return {
        ...state,
        brands: action.payload.brand,
      };
    }
    case actions.types.SET_BRANDS_SELECTOR: {
      return {
        ...state,
        selectors: {
          brands: action.payload.brands,
        },
      };
    }
    case actions.types.SET_FILE_NAME: {
      return {
        ...state,
        fileName: action.payload.fileName,
      };
    }
    case actions.types.UPLOAD_FILE_START: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case actions.types.UPLOAD_FILE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        fileName: action.payload.fileName,
        urlFile: action.payload.url,
      };
    }
    case actions.types.UPLOAD_FILE_ERROR: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case actions.types.SET_URL_FILE: {
      return {
        ...state,
        urlFile: action.payload.fileURL,
      };
    }
    case actions.types.SET_KEY: {
      return {
        ...state,
        key: action.payload.key,
      };
    }
    case actions.types.SET_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: action.payload.state,
      };
    case actions.types.SET_SIGNED_URL:
      return {
        ...state,
        signedUrl: action.payload.signedUrl,
      };
    case actions.types.SET_S3_KEY:
      return {
        ...state,
        s3Key: action.payload.s3Key,
      };
    case actions.types.RESET_STORE: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
