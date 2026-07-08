import _ from 'lodash';
import { applyProperty } from 'utils/object';
import actions from './actions';

const updateConfig = (configuracoes, configuracao) => {
  if (!_.isArray(configuracoes) || _.isEmpty(configuracoes)) return configuracoes;

  return ((configuracoes || []).map((c) => {
    if (c.id === configuracao.id) {
      return applyProperty(c, 'status', !configuracao.status);
    }
    return c;
  }));
};

export const INITIAL_STATE_UPDATE_CONFIG = {
  updateConfigList: [],
};

export const reduceUpdateConfig = (state, action) => {
  switch (action.type) {
    case actions.types.UPDATE_CONFIG_START:
      return {
        ...state,
        updateConfigList: [
          ...state.updateConfigList,
          {
            id: action.payload.id,
            action: action.payload.action,
          },
        ],
      };
    case actions.types.UPDATE_CONFIG_SUCCESS:
      return {
        ...state,
        updateConfigList: state.updateConfigList
          .filter((item) => item.action !== action.payload.action && item.id !== action.payload.id),
      };
    case actions.types.UPDATE_CONFIG_ERROR:
      return {
        ...state,
        updateConfigList: state.updateConfigList
          .filter((item) => item.action !== action.payload.action && item.id !== action.payload.id),
      };
    case actions.types.UPDATE_PRODUTO:
      return {
        ...state,
        configuracoes: {
          ...state.configuracoes,
          produto: updateConfig(state.configuracoes?.produto, action.payload.configuracao),
        },
      };
    case actions.types.UPDATE_TIPO:
      return {
        ...state,
        configuracoes: {
          ...state.configuracoes,
          tipo: updateConfig(state.configuracoes?.tipo, action.payload.configuracao),
        },
      };
    default:
      return state;
  }
};
