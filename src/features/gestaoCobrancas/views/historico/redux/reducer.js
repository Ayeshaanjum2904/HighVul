import { combineReducers } from 'redux';

import HistoricoPageReducer from '../historicoPage/redux/reducer';
import HistoricoDetalheReducer from '../historicoDetalhe/redux/reducer';

export default combineReducers({
  page: HistoricoPageReducer,
  details: HistoricoDetalheReducer,
});
