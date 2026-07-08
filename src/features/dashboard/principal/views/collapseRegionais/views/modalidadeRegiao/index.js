import { connect } from 'react-redux';

import ModalidadeRegiao from './modalidadeRegiao';
import * as PageSelectors from '../../../../redux/reduxPage/selectors';
import selectors from '../../../../redux/reduxPedidosRegiao/selectors';

const mapStateToProps = ({ dashboard }) => ({
  dateFilter: PageSelectors.formattedDateFilter(dashboard),
  isLoading: selectors.isLoading(dashboard),
  isError: selectors.isError(dashboard),
  data: selectors.modalidadeRegiaoChartData(dashboard),
  isEmpty: selectors.isModalidadeRegiaoEmpty(dashboard),
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalidadeRegiao);
