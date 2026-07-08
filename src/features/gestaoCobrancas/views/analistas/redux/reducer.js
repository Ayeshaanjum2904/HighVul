import { combineReducers } from 'redux';

import AnalistasPageReducer from '../analistasPage/redux/reducer';
import AnalistasModal from '../analistasModal/redux/reducer';

export default combineReducers({
  page: AnalistasPageReducer,
  modal: AnalistasModal,
});
