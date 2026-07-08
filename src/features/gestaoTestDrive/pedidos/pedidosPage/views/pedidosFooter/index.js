import { connect } from 'react-redux';

import selectors from '../../redux/selectors';
import PedidosFooter from './pedidosFooter';

const mapStateToProps = ({ pedidos }) => {
  const selectedCount = selectors.selectedPedidosCount({ page: pedidos.page });
  const selectedTotal = selectors.selectedPedidosTotal({ page: pedidos.page });
  const hasSelectedPedidos = selectors.hasSelectedPedidos({ page: pedidos.page });

  return {
    selectedCount,
    selectedTotal,
    hasSelectedPedidos,
  };
};

export default connect(mapStateToProps)(PedidosFooter);
