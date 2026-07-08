import { combineReducers } from 'redux';

import CondicoesPageReducer from '../condicoesPage/redux/reducer';
import CondicoesDetalheReducer from '../condicoesDetalhe/redux/reducer';

export default combineReducers({
  page: CondicoesPageReducer,
  details: CondicoesDetalheReducer,
});
