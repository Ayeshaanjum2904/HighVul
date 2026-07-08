import { combineReducers } from 'redux';

import DescontosPageReducer from '../descontoPage/redux/reducer';
import DescontoDetalheReducer from '../descontoDetalhe/redux/reducer';

export default combineReducers({
  page: DescontosPageReducer,
  details: DescontoDetalheReducer,
});
