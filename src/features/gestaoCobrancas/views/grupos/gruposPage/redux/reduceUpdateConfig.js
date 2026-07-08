import { applyProperty } from 'utils/object';
import actions from './actions';

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
        list: {
          ...state.list,
          grupos: (state.list.grupos || []).map((g) => {
            if (g.id === action.payload.id) {
              return applyProperty(g, action.payload.propertyName, action.payload.status);
            }
            return g;
          }),
        },
      };
    case actions.types.UPDATE_CONFIG_ERROR:
      return {
        ...state,
        updateConfigList: state.updateConfigList
          .filter((item) => item.action !== action.payload.action && item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
