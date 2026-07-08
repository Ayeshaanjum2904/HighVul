import { combineReducers } from 'redux';

import CadastroReducer from '../cadastro/redux/reducer';
import HistoricoTaxaReducer from '../historico/redux/reducer';

export default combineReducers({
  historico: HistoricoTaxaReducer,
  cadastro: CadastroReducer,
});
