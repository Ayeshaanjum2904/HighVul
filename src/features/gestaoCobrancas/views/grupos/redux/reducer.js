import { combineReducers } from 'redux';

import GruposPageReducer from '../gruposPage/redux/reducer';
import GruposDetalheReducer from '../gruposDetalhe/redux/reducer/reducer';
import GruposModalReducer from '../gruposModal/redux/reducer';

export default combineReducers({
  page: GruposPageReducer,
  details: GruposDetalheReducer,
  modal: GruposModalReducer,
});
