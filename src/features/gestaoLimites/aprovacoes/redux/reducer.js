import { combineReducers } from 'redux';

import LimitesAprovadosCadastroReducer from '../limitesAprovadosCadastro/redux/reducer';
import LimitesAprovadosJuridicoReducer from '../limitesAprovadosJuridico/redux/reducer';
import LimitesAprovadosReducer from '../limitesAprovadosPage/redux/reducer';

export default combineReducers({
  limitesAprovados: LimitesAprovadosReducer,
  limitesAprovadosCadastro: LimitesAprovadosCadastroReducer,
  limitesAprovadosJuridico: LimitesAprovadosJuridicoReducer,
});
