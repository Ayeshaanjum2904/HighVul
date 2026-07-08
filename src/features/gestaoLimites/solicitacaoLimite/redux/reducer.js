import { combineReducers } from 'redux';

import limitesPageReducer from '../solicitacaoLimitePage/redux/reducer';
import limitesDetailsReducer from '../solicitacaoLimiteDetalhe/redux/reducer';

export default combineReducers({
  page: limitesPageReducer,
  details: limitesDetailsReducer,
});
