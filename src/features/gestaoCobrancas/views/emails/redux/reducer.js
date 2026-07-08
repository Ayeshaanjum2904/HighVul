import { combineReducers } from 'redux';

import EmailsPageReducer from '../emailsPage/redux/reducer';
import EmailsModalReducer from '../emailsModal/redux/reducer';

export default combineReducers({
  page: EmailsPageReducer,
  modal: EmailsModalReducer,
});
