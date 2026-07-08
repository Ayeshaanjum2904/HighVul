import { combineReducers } from 'redux';

import ComunicadoModalReducer from '../comunicadosModal/redux/reducer';
import ComunicadoPageReducer from '../comunicadosPage/redux/reducer';

export default combineReducers({
  page: ComunicadoPageReducer,
  modal: ComunicadoModalReducer,
});
