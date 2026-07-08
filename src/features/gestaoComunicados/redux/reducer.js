import { combineReducers } from 'redux';

import AlertaReducer from '../views/mensagens/redux/reducer';
import ComunicadosReducer from '../views/comunicados/redux/reducer';

export default combineReducers({
  alertas: AlertaReducer,
  comunicados: ComunicadosReducer,
});
