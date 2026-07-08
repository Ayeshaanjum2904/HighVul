import { combineReducers } from 'redux';

import ContatosReducer from '../views/contatos/redux/reducer';
import ConcessionariasReducer from '../views/concessionarias/redux/reducer';
import GruposReducer from '../views/grupos/redux/reducer';
import EmailsReducer from '../views/emails/redux/reducer';
import HistoricoReducer from '../views/historico/redux/reducer';
import AnalistasReducer from '../views/analistas/redux/reducer';
import GerentesReducer from '../views/gerentes/redux/reducer';

export default combineReducers({
  contatos: ContatosReducer,
  concessionarias: ConcessionariasReducer,
  grupos: GruposReducer,
  emails: EmailsReducer,
  historico: HistoricoReducer,
  analistas: AnalistasReducer,
  gerentes: GerentesReducer,
});
