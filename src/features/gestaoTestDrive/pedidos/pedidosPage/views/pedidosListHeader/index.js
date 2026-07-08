import { connect } from 'react-redux';
import PedidosHeader from './pedidosHeader';
import selectors from '../../redux/selectors';
import operations from '../../redux/operations';

const mapStateToProps = ({ pedidos }) => {
  const currentPagePedidos = pedidos.page.pedidosList.pedidos || [];
  const selectedPedidos = selectors.selectedPedidos({ page: pedidos.page });
  const selectedIds = selectedPedidos.map((p) => p.id);
  const currentPageIds = currentPagePedidos.map((p) => p.id);

  const areAllCurrentPageSelected = currentPagePedidos.length > 0
    && currentPageIds.every((id) => selectedIds.includes(id));

  return {
    hasSelectedPedidos: selectors.hasSelectedPedidos({ page: pedidos.page }),
    areAllCurrentPageSelected,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onToggleSelectAll: (event) => {
    const shouldSelectAll = event.target.checked;
    dispatch(operations.toggleSelectAllCurrentPage(shouldSelectAll));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PedidosHeader);
