import { combineReducers } from 'redux';

import ContatosPageReducer from '../concessionariasPage/redux/reducer';
import ContatosDetalheReducer from '../concessionariasDetalhe/redux/reducer';

export default combineReducers({
  page: ContatosPageReducer,
  details: ContatosDetalheReducer,
});
