import { sortBy } from 'utils/array';
import _ from 'lodash';
import actions from '../actions/actions';

const addContatos = (array, associacoes, contatos = null) => {
  if (!_.isArray(array) || !_.isArray(associacoes)
    || (!_.isArray(contatos) && contatos)) return array;
  const contatosToAdd = [];
  associacoes.forEach((c) => {
    if (array.some((a) => a.id === c.value)) return;
    if (contatos === null)contatosToAdd.push(c);
    else contatosToAdd.push(contatos.find((contato) => contato.id === c.value));
  });
  return sortBy([...array, ...contatosToAdd], 'nome');
};

export const INITIAL_STATE_UPDATE_CONTATOS = {
  updateContato: {
    isAssociacaoOpen: false,
    isLoading: false,
    isError: false,
    associacoes: [],
    contatos: [],
  },
};

export const reduceUpdateContato = (state, action) => {
  switch (action.type) {
    case actions.types.UPDATE_CONTATO_START:
      return {
        ...state,
        updateContato: {
          ...state.updateContato,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.UPDATE_CONTATO_SUCCESS:
      return {
        ...state,
        updateContato: {
          ...state.updateContato,
          isError: false,
          isLoading: false,
          isDeleteOpen: false,
          isEditOpen: false,
          data: INITIAL_STATE_UPDATE_CONTATOS.updateContato.data,
        },
        contatos: action.payload.contato ? state.contatos.map((c) => {
          if (c.id === action.payload.contato.id) {
            return action.payload.contato;
          }
          return c;
        }) : state.contatos,
      };
    case actions.types.UPDATE_CONTATO_ERROR:
      return {
        ...state,
        updateContato: {
          ...state.updateContato,
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.DELETE_CONTATO:
      return {
        ...state,
        contatos: state.contatos.filter((c) => c.id !== action.payload.id),
      };
    case actions.types.SET_CONTATO_ID: {
      return {
        ...state,
        updateContato: {
          ...state.updateContato,
          data: {
            id: action.payload.id,
          },
        },
      };
    }
    case actions.types.SET_ASSOCIACAR_CONTATO_OPEN: {
      return {
        ...state,
        updateContato: {
          ...state.updateContato,
          isAssociacaoOpen: action.payload.value,
          associacoes: [],
        },
      };
    }
    case actions.types.ASSOCIAR_CONTATO: {
      return {
        ...state,
        updateContato: {
          ...state.updateContato,
          associacoes: action.payload.contatos,
        },
      };
    }
    case actions.types.DESASSOCIAR_CONTATO: {
      return {
        ...state,
        updateContato: {
          ...state.updateContato,
          associacoes: state.updateContato.associacoes
            .filter((i) => i.value !== action.payload.id),
        },
      };
    }
    case actions.types.ADD_CONTATOS_TO_LIST: {
      return {
        ...state,
        contatos: addContatos(
          state.contatos,
          action.payload.contatos,
          state.updateContato.contatos,
        ),
      };
    }
    case actions.types.ADD_CONTATO_TO_SELECTOR: {
      return {
        ...state,
        updateContato: {
          ...state.updateContato,
          contatos: addContatos(
            state.updateContato.contatos,
            [action.payload.contato],
          ),
        },
      };
    }
    case actions.types.SET_CONTATOS_ASSOCIACAO: {
      return {
        ...state,
        updateContato: {
          ...state.updateContato,
          contatos: action.payload.contatos,
        },
      };
    }
    case actions.types.UPDATE_CONTATO: {
      return {
        ...state,
        contatos: state.contatos.map((c) => {
          if (c.id === action.payload.contato.id) return action.payload.contato;
          return c;
        }),
      };
    }

    default:
      return state;
  }
};
