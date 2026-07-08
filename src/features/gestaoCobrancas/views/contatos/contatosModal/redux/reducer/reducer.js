import { applyProperty } from 'utils/object';
import actions from '../actions/actions';

import { reduceSendContato, INITIAL_STATE_SEND_CONTATO } from './reduceSendContato';
import {
  reduceValidateEmail,
  INITIAL_STATE_VALIDATE_EMAIL,
  INITIAL_STATE_VALIDATE_TELEFONE,
  reduceValidateTelefone,
} from './reduceValidate';

export const INITIAL_STATE = {
  isOpen: false,
  papeis: [],

  ...INITIAL_STATE_SEND_CONTATO,
  ...INITIAL_STATE_VALIDATE_EMAIL,
  ...INITIAL_STATE_VALIDATE_TELEFONE,
};

export default (state = INITIAL_STATE, action = { type: '@@contatosModal/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_SEND_CONTATO)) {
    return reduceSendContato(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_VALIDATE_EMAIL)) {
    return reduceValidateEmail(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_VALIDATE_TELEFONE)) {
    return reduceValidateTelefone(state, action);
  }
  switch (action.type) {
    case actions.types.SET_PAPEIS: {
      return {
        ...state,
        papeis: action.payload.papeis,
      };
    }
    case actions.types.SET_MODAL_OPEN: {
      return {
        ...state,
        isOpen: action.payload.status,
      };
    }
    case actions.types.UPDATE_CONTATO_PROPERTY:
      return {
        ...state,
        contato: applyProperty(
          state.contato,
          action.payload.propertyName,
          action.payload.value,
        ),
      };
    case actions.types.SET_PAPEL:
      return {
        ...state,
        contato: {
          ...state.contato,
          papel: state.papeis.find((p) => p.id === action.payload.papel),
        },
      };
    case actions.types.SET_CONTATO:
      return {
        ...state,
        contato: action.payload.contato ?? INITIAL_STATE.contato,
      };

    case actions.types.RESET_STORE: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
