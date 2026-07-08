import { applyProperty, copyProperties } from 'utils/object';
import actions from '../actions/actions';

export const INITIAL_STATE_UPDATE_GRUPO = {
  updateGrupo: {
    isEditing: false,
    isLoading: false,
    isError: false,
    errors: [],
    data: {
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
  },
};

export const reduceUpdateGrupo = (state, action) => {
  switch (action.type) {
    case actions.types.UPDATE_GRUPO_START:
      return {
        ...state,
        updateGrupo: {
          ...state.updateGrupo,
          isLoading: true,
          isError: false,
          errors: [],
        },
      };
    case actions.types.UPDATE_GRUPO_SUCCESS:
      return {
        ...state,
        updateGrupo: {
          ...state.updateGrupo,
          isEditing: false,
          isLoading: false,
          isError: false,
          data: INITIAL_STATE_UPDATE_GRUPO.updateGrupo.data,
          errors: [],
        },
        grupo: copyProperties(state.grupo, state.updateGrupo.data),
      };
    case actions.types.UPDATE_GRUPO_ERROR:
      return {
        ...state,
        updateGrupo: {
          ...state.updateGrupo,
          isLoading: false,
          isError: true,
          errors: action.payload.errors,
        },
      };
    case actions.types.UPDATE_GRUPO_PROPERTY:
      return {
        ...state,
        updateGrupo: {
          ...state.updateGrupo,
          data: applyProperty(
            state.updateGrupo.data,
            action.payload.propertyName,
            action.payload.value,
          ),
        },
      };
    case actions.types.SET_IS_EDITING: {
      return {
        ...state,
        updateGrupo: {
          ...state.updateGrupo,
          data: INITIAL_STATE_UPDATE_GRUPO.updateGrupo.data,
          isEditing: action.payload.value,
          errors: [],
        },
      };
    }
    default:
      return state;
  }
};
