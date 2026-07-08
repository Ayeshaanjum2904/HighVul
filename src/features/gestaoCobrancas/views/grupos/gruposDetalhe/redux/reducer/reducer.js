import actions from '../actions/actions';
import { reduceLoadData } from './reduceLoadData';
import { INITIAL_STATE_UPDATE_GRUPO, reduceUpdateGrupo } from './reduceUpdateGrupo';
import { INITIAL_STATE_UPDATE_CONCESSIONARIAS, reduceUpdateConcessionaria } from './reduceUpdateConcessionaria';
import { INITIAL_STATE_UPDATE_CONTATOS, reduceUpdateContato } from './reduceUpdateContato';

const INITIAL_STATE = {
  snackbarErrors: [],
  lastSnackbarErrorId: 0,
  dataLoader: [],
  marcas: [],
  regionais: [],

  grupo: null,
  concessionarias: [],
  contatos: [],
  historico: [],

  ...INITIAL_STATE_UPDATE_GRUPO,
  ...INITIAL_STATE_UPDATE_CONCESSIONARIAS,
  ...INITIAL_STATE_UPDATE_CONTATOS,
};

export default (state = INITIAL_STATE, action = { type: '@@gruposDetalhe/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_LOADER)) {
    return reduceLoadData(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_UPDATE_GRUPO)) {
    return reduceUpdateGrupo(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_UPDATE_CONCESSIONARIA)) {
    return reduceUpdateConcessionaria(state, action);
  }
  if (action.type.startsWith(actions.types.PREFIX_UPDATE_CONTATO)) {
    return reduceUpdateContato(state, action);
  }
  switch (action.type) {
    case actions.types.SET_GRUPO:
      return {
        ...state,
        grupo: action.payload.grupo,
      };
    case actions.types.SET_CONCESSIONARIAS_GRUPO:
      return {
        ...state,
        concessionarias: action.payload.concessionarias,
      };
    case actions.types.SET_CONTATOS_GRUPO:
      return {
        ...state,
        contatos: action.payload.contatos,
      };
    case actions.types.SET_HISTORICO_GRUPO:
      return {
        ...state,
        historico: action.payload.historico,
      };
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
    case actions.types.SET_DEALERS: {
      return {
        ...state,
        updateConcessionaria: {
          ...state.updateConcessionaria,
          dealers: action.payload.dealers,
        },
      };
    }
    case actions.types.SET_PAPEIS: {
      return {
        ...state,
        updateContato: {
          ...state.updateContato,
          papeis: action.payload.papeis,
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
    case actions.types.RESET_STORE:
      return {
        ...INITIAL_STATE,
        grupo: {
          id: state.grupo?.id,
          nomeConta: state.grupo?.nomeConta,
        },
      };
    default:
      return state;
  }
};
