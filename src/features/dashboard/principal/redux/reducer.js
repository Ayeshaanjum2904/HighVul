import { combineReducers } from 'redux';

import PageReducer from './reduxPage/reducer/reducer';
import PedidosReducer from './reduxPedidos/reducer';
import FluxoReducer from './reduxFluxo/reducer';
import PedidosAreaReducer from './reduxPedidosArea/reducer';
import PedidosPeriodoReducer from './reduxPedidosPeriodo/reducer';
import PedidosModeloReducer from './reduxPedidosModelo/reducer';
import PedidosRegiaoReducer from './reduxPedidosRegiao/reducer';
import ModeloRegiaoReducer from './reduxModeloRegiao/reducer';
import PedidosConcessionariaReducer from './reduxPedidosConcessionaria/reducer';

export default combineReducers({
  page: PageReducer,
  pedidos: PedidosReducer,
  fluxo: FluxoReducer,
  pedidosPeriodo: PedidosPeriodoReducer,
  pedidosArea: PedidosAreaReducer,
  pedidosModelo: PedidosModeloReducer,
  pedidosRegiao: PedidosRegiaoReducer,
  modeloRegiao: ModeloRegiaoReducer,
  pedidosConcessionaria: PedidosConcessionariaReducer,
});
