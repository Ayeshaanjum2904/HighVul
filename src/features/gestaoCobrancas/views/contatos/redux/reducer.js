import { combineReducers } from 'redux';

import ContatosPageReducer from '../contatosPage/redux/reducer';
import ContatosModalReducer from '../contatosModal/redux/reducer/reducer';

export default combineReducers({
  page: ContatosPageReducer,
  modal: ContatosModalReducer,
});
