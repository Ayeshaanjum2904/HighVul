import { combineReducers } from 'redux';

import PrincipalReducer from '../principal/redux/reducer';

export default combineReducers({
  principal: PrincipalReducer,
});
