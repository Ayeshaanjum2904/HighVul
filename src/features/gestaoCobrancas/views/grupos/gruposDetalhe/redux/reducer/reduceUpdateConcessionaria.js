import { sortBy } from 'utils/array';
import _ from 'lodash';
import actions from '../actions/actions';

const addConcessionarias = (array, concessionarias) => {
  if (!_.isArray(array) || !_.isArray(concessionarias)) return array;
  const concessionarisToAdd = [];
  concessionarias.forEach((c) => {
    if (array.some((a) => a.codBuc === c.codBuc)) return;
    concessionarisToAdd.push(c);
  });
  return sortBy([...array, ...concessionarisToAdd], 'nome');
};

export const INITIAL_STATE_UPDATE_CONCESSIONARIAS = {
  updateConcessionaria: {
    isDetailsOpen: false,
    isAssociacaoOpen: false,
    isLoading: false,
    isError: false,
    associacoes: [],
    dealers: [],
    data: {
      nome: null,
      codigoBuc: null,
    },
  },
};

export const reduceUpdateConcessionaria = (state, action) => {
  switch (action.type) {
    case actions.types.UPDATE_CONCESSIONARIA_START:
      return {
        ...state,
        updateConcessionaria: {
          ...state.updateConcessionaria,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.UPDATE_CONCESSIONARIA_SUCCESS:
      return {
        ...state,
        updateConcessionaria: {
          ...state.updateConcessionaria,
          isEditing: false,
          isLoading: false,
          isDeleteOpen: false,
          data: action.payload.concessionaria
             ?? INITIAL_STATE_UPDATE_CONCESSIONARIAS.updateConcessionaria.data,
        },
        concessionarias: state.concessionarias.filter(
          (c) => c.codBuc !== action.payload.concessionaria?.codBuc,
        ),
      };
    case actions.types.UPDATE_CONCESSIONARIA_ERROR:
      return {
        ...state,
        updateConcessionaria: {
          ...state.updateConcessionaria,
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.DELETE_CONCESSIONARIA:
      return {
        ...state,
        concessionarias: state.concessionarias.filter((c) => c.codBuc !== action.payload.id),
      };
    case actions.types.SET_CONCESSIONARIA: {
      return {
        ...state,
        updateConcessionaria: {
          ...state.updateConcessionaria,
          data: {
            codBuc: action.payload.concessionaria?.codBuc,
          },
        },
      };
    }
    case actions.types.SET_ASSOCIACIAR_CONCESSIONARIA_OPEN: {
      return {
        ...state,
        updateConcessionaria: {
          ...state.updateConcessionaria,
          isAssociacaoOpen: action.payload.value,
          associacoes: [],
        },
      };
    }
    case actions.types.ASSOCIAR_CONCESSIONARIA: {
      return {
        ...state,
        updateConcessionaria: {
          ...state.updateConcessionaria,
          associacoes: state.updateConcessionaria.associacoes
            .some((c) => c.codBuc === action.payload.concessionaria.codBuc)
            ? state.updateConcessionaria.associacoes
            : [...state.updateConcessionaria.associacoes, action.payload.concessionaria],
        },
      };
    }
    case actions.types.DESASSOCIAR_CONCESSIONARIA: {
      return {
        ...state,
        updateConcessionaria: {
          ...state.updateConcessionaria,
          associacoes: state.updateConcessionaria.associacoes
            .filter((i) => i.codBuc !== action.payload.id),
        },
      };
    }
    case actions.types.ADD_CONCESSIONARIAS: {
      return {
        ...state,
        concessionarias: addConcessionarias(state.concessionarias, action.payload.concessionarias),
      };
    }
    case actions.types.SET_DETAILS_CONCESSIONARIA_OPEN: {
      return {
        ...state,
        updateConcessionaria: {
          ...state.updateConcessionaria,
          isDetailsOpen: action.payload.value,
          data: {
            nome: action.payload.concessionaria?.nome,
            codBuc: action.payload.concessionaria?.codBuc,
          },
        },
      };
    }
    default:
      return state;
  }
};
