import { connect } from 'react-redux';

import * as PageSelectors from '../../../redux/reduxPage/selectors';
import * as FluxoSelectors from '../../../redux/reduxFluxo/selectors';

import DonutPedidosFaturados from './donutPedidosFaturados';

const mapStateToProps = ({ dashboard }) => ({
  isLoading: FluxoSelectors.isLoading(dashboard),
  isError: FluxoSelectors.isError(dashboard),
  dateFilter: PageSelectors.formattedDateFilter(dashboard),
  data: FluxoSelectors.donutData.prontoParaFaturamento(dashboard),
});

export default connect(mapStateToProps)(DonutPedidosFaturados);
