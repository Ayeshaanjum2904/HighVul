import { connect } from 'react-redux';

import detalhesOperations from '../../../pedidosDetalhe/redux/operations';
import operations from '../../redux/operations';
import selectors from '../../redux/selectors';

import PedidoRow from './pedidoRow';

const mapStateToProps = ({ pedidos }, ownProps) => {
  const selectedPedidos = selectors.selectedPedidos({ page: pedidos.page });
  const isSelected = selectedPedidos.some((p) => p.id === ownProps.pedido?.id);

  return {
    isSelected,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onRowClicked: (id) => { dispatch(detalhesOperations.openModal(id)); },
  onToggleSelection: (pedido, isSelected) => {
    dispatch(operations.togglePedidoSelection(pedido, isSelected));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PedidoRow);
