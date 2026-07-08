import { combineReducers } from 'redux';

import veiculosPageReducer from '../views/veiculosPage/redux/reducer';
import veiculosDetalheReducer from '../views/veiculosDetalhe/redux/reducer';
import modelosCadastroReducer from '../views/modelosCadastro/redux/reducer';
import veiculosCadastroReducer from '../views/veiculosCadastro/redux/reducer';

export default combineReducers({
  page: veiculosPageReducer,
  details: veiculosDetalheReducer,
  cadastroVeiculo: veiculosCadastroReducer,
  cadastroModelo: modelosCadastroReducer,
});
