import { combineReducers } from 'redux';

import GerentesPageReducer from '../gerentesPage/redux/reducer';
import GerentesModal from '../gerentesModal/redux/reducer';

export default combineReducers({
  page: GerentesPageReducer,
  modal: GerentesModal,
});
