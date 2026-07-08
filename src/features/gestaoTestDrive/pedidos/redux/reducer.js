import { combineReducers } from 'redux';

import pageReducer from '../pedidosPage/redux/reducer';
import detailsReducer from '../pedidosDetalhe/redux/reducer';

export default combineReducers({
  page: pageReducer,
  details: detailsReducer,
});
