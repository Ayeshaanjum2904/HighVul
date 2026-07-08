import { applyProperty } from 'utils/object';
import actions from './actions';

import { INITIAL_STATE_INSERT_GERENTE, reduceInsertGerente } from './reduceInsertGerente';
import { INITIAL_STATE_GET_GERENTES, reduceGetGerentes } from './reduceGetGerentes';
import { INITIAL_STATE_DELETE_GERENTE, reduceDeleteGerente } from './reduceDeleteGerente';

const INITIAL_STATE = {
  isOpen: false,
  modal: null,
  marcas: [],
  regionais: [],

  gerente: {
    regional: null,
    marca: null,
    nome: null,
    email: null,
  },
  ...INITIAL_STATE_INSERT_GERENTE,
  ...INITIAL_STATE_GET_GERENTES,
  ...INITIAL_STATE_DELETE_GERENTE,
};

export default (state = INITIAL_STATE, action = { type: '@@gerentesModal/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_INSERT_GERENTE)) {
    return reduceInsertGerente(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_GET_GERENTES)) {
    return reduceGetGerentes(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_DELETE_GERENTE)) {
    return reduceDeleteGerente(state, action);
  }
  switch (action.type) {
    case actions.types.SET_MARCAS: {
      return {
        ...state,
        marcas: action.payload.marcas,
      };
    }
    case actions.types.SET_REGIONAIS: {
      return {
        ...state,
        regionais: action.payload.regionais,
      };
    }
    case actions.types.UPDATE_GERENTE_PROPERTY:
      return {
        ...state,
        gerente: applyProperty(
          state.gerente,
          action.payload.propertyName,
          action.payload.value,
        ),
      };
    case actions.types.SET_MODAL_OPEN: {
      return {
        ...state,
        isOpen: action.payload.status,
      };
    }
    case actions.types.SET_MODAL_TYPE: {
      return {
        ...state,
        modal: action.payload.modal,
      };
    }
    case actions.types.SET_SELECTED_MARCA: {
      return {
        ...state,
        gerente: {
          ...state.gerente,
          marca: action.payload.marca,
        },
      };
    }
    case actions.types.SET_SELECTED_REGIONAL: {
      return {
        ...state,
        gerente: {
          ...state.gerente,
          regional: action.payload.regional,
        },
      };
    }
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
