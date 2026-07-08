import { connect } from 'react-redux';

import * as PageSelectors from '../../../redux/reduxPage/selectors';
import * as FluxoSelectors from '../../../redux/reduxFluxo/selectors';
import PedidosAreaSelectors from '../../../redux/reduxPedidosArea/selectors';

import DonutTipoPedidos from './donutTipoPedidos';

const mapStateToProps = ({ dashboard }) => ({
  isLoading: FluxoSelectors.isLoading(dashboard),
  isError: FluxoSelectors.isError(dashboard),
  dateFilter: PageSelectors.formattedDateFilter(dashboard),
  data: PedidosAreaSelectors.tipoPedidos(dashboard),
});

export default connect(mapStateToProps)(DonutTipoPedidos);
