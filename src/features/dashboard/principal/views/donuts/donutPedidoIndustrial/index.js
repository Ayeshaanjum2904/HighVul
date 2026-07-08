import { connect } from 'react-redux';

import * as PageSelectors from '../../../redux/reduxPage/selectors';
import * as FluxoSelectors from '../../../redux/reduxFluxo/selectors';

import DonutPedidoIndustrial from './donutPedidoIndustrial';

const mapStateToProps = ({ dashboard }) => ({
  isLoading: FluxoSelectors.isLoading(dashboard),
  isError: FluxoSelectors.isError(dashboard),
  dateFilter: PageSelectors.formattedDateFilter(dashboard),
  data: FluxoSelectors.donutData.pedidoIndusrial(dashboard),
});

export default connect(mapStateToProps)(DonutPedidoIndustrial);
