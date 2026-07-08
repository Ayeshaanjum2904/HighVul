import { connect } from 'react-redux';

import PedidosConcessionariaTabs from './pedidosConcessionariaTabs';

import PageOperations from '../../../../../redux/reduxPage/operations/operations';
import operations from '../../../../../redux/reduxPedidosConcessionaria/operations';

const mapStateToProps = ({ dashboard }) => ({
  selectedTab: dashboard.principal.pedidosConcessionaria.selectedTab,
});

const mapDispatchToProps = (dispatch) => ({
  registerLoader: (id, loadOp) => dispatch(PageOperations.registerLoader(id, loadOp)),
  setSelectedTab: (selectedTab) => dispatch(operations.setSelectedTab(selectedTab)),
  getPedidosConcessionaria: (tipo, orderBy) => operations.getPedidosConcessionaria(tipo, orderBy),
  loadData: () => dispatch(PageOperations.loadData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PedidosConcessionariaTabs);
