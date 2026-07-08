import { combineReducers } from 'redux';

import AlertaPageReducer from '../alertasPage/redux/reducer';
import AlertaModalReducer from '../alertasModal/redux/reducer';

export default combineReducers({
  page: AlertaPageReducer,
  modal: AlertaModalReducer,
});
