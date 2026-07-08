import { connect } from 'react-redux';

import CreditoRegiao from './creditoRegiao';
import * as PageSelectors from '../../../../redux/reduxPage/selectors';
import selectors from '../../../../redux/reduxPedidosRegiao/selectors';

const mapStateToProps = ({ dashboard }) => ({
  dateFilter: PageSelectors.formattedDateFilter(dashboard),
  isLoading: selectors.isLoading(dashboard),
  isError: selectors.isError(dashboard),
  isEmpty: selectors.isCreditoRegiaoEmpty(dashboard),
  data: selectors.creditoRegiaoChartData(dashboard),
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CreditoRegiao);
