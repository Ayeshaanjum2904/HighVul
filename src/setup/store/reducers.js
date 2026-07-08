import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import AuthReducer from 'modules/auth/redux/authReducer';
import SnackbarReducer from 'modules/snackbar/redux/reducer';
import LimitesReducer from 'features/gestaoLimites/solicitacaoLimite/redux/reducer';
import LimitesAprovadosReducer from 'features/gestaoLimites/aprovacoes/limitesAprovadosPage/redux/reducer';
import LimitesAprovadosJuridicoReducer from 'features/gestaoLimites/aprovacoes/limitesAprovadosJuridico/redux/reducer';
import LimitesAprovadosCadastroReducer from 'features/gestaoLimites/aprovacoes/limitesAprovadosCadastro/redux/reducer';
import DescontoReducer from 'features/gestaoTestDrive/descontos/redux/reducer';
import CondicoesComerciaisReducer from 'features/gestaoTestDrive/condicoesComerciais/redux/reducer';
import OfertasReducer from 'features/gestaoTestDrive/ofertas/redux/reducer';
import PedidosReducer from 'features/gestaoTestDrive/pedidos/redux/reducer';
import OrdensReducer from 'features/gestaoTestDrive/ordens/redux/reducer';
import DashboardReducer from 'features/dashboard/redux/reducer';
import NotificationsReducer from 'features/notification/redux/reducer';
import ComunicadosReducer from 'features/gestaoComunicados/redux/reducer';
import VeiculosReducer from 'features/gestaoTestDrive/veiculos/redux/reducer';
import CobrancasReducer from 'features/gestaoCobrancas/redux/reducer';
import TaxaReducer from 'features/gestaoTestDrive/taxas/redux/reducer';
import LimitesAprovadosCreditoReducer from 'features/gestaoLimites/aprovacoes/limitesAprovadosCredito/redux/reducer';
import LimitesAprovadosObservacaoReducer from 'features/gestaoLimites/aprovacoes/observacoesAprovacao/redux/reducer';
import ContaCorrenteDealerReducer from 'features/fidc/views/contaCorrenteDealer/redux/reducer';
import SimuladorReducer from 'features/gestaoCorporate/views/simulador/redux/reducer';
import history from './history';

export default combineReducers({
  router: connectRouter(history),
  auth: AuthReducer,
  snackbar: SnackbarReducer,
  descontos: DescontoReducer,
  condicoesComerciais: CondicoesComerciaisReducer,
  ofertas: OfertasReducer,
  pedidos: PedidosReducer,
  ordens: OrdensReducer,
  dashboard: DashboardReducer,
  limites: LimitesReducer,
  comunicados: ComunicadosReducer,
  veiculos: VeiculosReducer,
  cobrancas: CobrancasReducer,
  taxas: TaxaReducer,
  limitesAprovados: LimitesAprovadosReducer,
  limitesAprovadosCadastro: LimitesAprovadosCadastroReducer,
  limitesAprovadosJuridico: LimitesAprovadosJuridicoReducer,
  limitesAprovadosCredito: LimitesAprovadosCreditoReducer,
  limitesAprovadosObservacao: LimitesAprovadosObservacaoReducer,
  notificationStore: NotificationsReducer,
  contaCorrenteDealer: ContaCorrenteDealerReducer,
  simulador: SimuladorReducer,
});
