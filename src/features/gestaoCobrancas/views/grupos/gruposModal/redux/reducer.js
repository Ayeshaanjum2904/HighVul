import { applyProperty } from 'utils/object';
import actions from './actions';

const INITIAL_STATE = {
  isOpen: false,
  marcas: [],
  regionais: [],

  insertGrupo: {
    isLoading: false,
    isError: false,
    errors: [],
  },

  grupo: {
    nomeConta: null,
    razaoSocial: null,
    cnpj: null,
    marcaId: null,
    regionalId: null,
    emailSupervisor: null,
    analistaRede: null,
    inscricaoMunicipal: null,
    inscricaoEstadual: null,
  },
};

const reduceInsertGrupo = (state, action) => {
  switch (action.type) {
    case actions.types.INSERT_GRUPO_START:
      return {
        ...state,
        insertGrupo: {
          ...state.insertGrupo,
          isLoading: true,
          isError: false,
          errors: [],
        },
      };
    case actions.types.INSERT_GRUPO_SUCCESS:
      return {
        ...state,
        insertGrupo: {
          ...state.insertGrupo,
          isLoading: false,
          isError: false,
          errors: [],
        },
        grupo: INITIAL_STATE.grupo,
        isOpen: false,
      };
    case actions.types.INSERT_GRUPO_ERROR:
      return {
        ...state,
        insertGrupo: {
          ...state.insertGrupo,
          isLoading: false,
          isError: true,
          errors: action.payload.errors,
        },
      };
    default:
      return state;
  }
};

export default (state = INITIAL_STATE, action = { type: '@@gruposModal/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_INSERT_GRUPO)) {
    return reduceInsertGrupo(state, action);
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
    case actions.types.UPDATE_GRUPO_PROPERTY:
      return {
        ...state,
        grupo: applyProperty(
          state.grupo,
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
    case actions.types.RESET_STORE: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
