import { applyProperty } from 'utils/object';
import actions from './actions';
import { ModalEmail } from '../../../../redux/enums';

const INITIAL_STATE = {
  isOpen: false,

  template: null,

  updateStatus: {
    isLoading: false,
    isError: false,
  },

  modalTemplate: ModalEmail.edicaoEmail,
};

export default (state = INITIAL_STATE, action = { type: '@@emailsModal/INIT' }) => {
  switch (action.type) {
    case actions.types.UPDATE_START: {
      return {
        ...state,
        updateStatus: {
          isLoading: true,
          isError: false,
        },
      };
    }
    case actions.types.UPDATE_ERROR:
      return {
        ...state,
        updateStatus: {
          isLoading: false,
          isError: true,
        },
        modalTemplate: ModalEmail.edicaoEmail,
      };
    case actions.types.SET_TEMPLATE_EMAIL: {
      return {
        ...state,
        template: action.payload.template,
      };
    }
    case actions.types.SET_MODAL_OPEN: {
      return {
        ...state,
        isOpen: action.payload.status,
      };
    }
    case actions.types.SET_MODAL_TEMPLATE: {
      return {
        ...state,
        modalTemplate: action.payload.template,
        updateStatus: {
          ...state.updateStatus,
          isError: false,
        },
      };
    }
    case actions.types.UPDATE_EMAIL_PROPERTY:
      return {
        ...state,
        template: applyProperty(
          state.template,
          action.payload.propertyName,
          action.payload.property,
        ),
      };
    case actions.types.RESET_STORE: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
