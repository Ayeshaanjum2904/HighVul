import { applyProperty } from 'utils/object';
import actions from './actions';

import { INITIAL_STATE_INSERT_ANALISTA, reduceInsertAnalista } from './reduceInsertAnalista';
import { INITIAL_STATE_GET_ANALISTAS, reduceGetAnalistas } from './reduceGetAnalistas';
import { INITIAL_STATE_DELETE_ANALISTA, reduceDeleteAnalista } from './reduceDeleteAnalista';

const INITIAL_STATE = {
  isOpen: false,
  modal: null,
  marcas: [],
  regionais: [],

  analista: {
    regional: null,
    marca: null,
    nome: null,
    email: null,
  },
  ...INITIAL_STATE_INSERT_ANALISTA,
  ...INITIAL_STATE_GET_ANALISTAS,
  ...INITIAL_STATE_DELETE_ANALISTA,
};

export default (state = INITIAL_STATE, action = { type: '@@analistasModal/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_INSERT_ANALISTA)) {
    return reduceInsertAnalista(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_GET_ANALISTAS)) {
    return reduceGetAnalistas(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_DELETE_ANALISTA)) {
    return reduceDeleteAnalista(state, action);
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
    case actions.types.UPDATE_ANALISTA_PROPERTY:
      return {
        ...state,
        analista: applyProperty(
          state.analista,
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
        analista: {
          ...state.analista,
          marca: action.payload.marca,
        },
      };
    }
    case actions.types.SET_SELECTED_REGIONAL: {
      return {
        ...state,
        analista: {
          ...state.analista,
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
