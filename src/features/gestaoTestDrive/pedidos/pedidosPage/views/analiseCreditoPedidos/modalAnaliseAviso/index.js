import { connect } from 'react-redux';

import ModalAnaliseAviso from './modalAnaliseAviso';
import { categorizarPedidosPorStatusAnaliseCredito } from '../../../utils/analiseCreditoUtils';
import actions from '../../../redux/actions';
import selectors from '../../../redux/selectors';

const mapStateToProps = ({ pedidos }) => {
  const { selectedPedidos } = pedidos.page;
  const categorizedData = categorizarPedidosPorStatusAnaliseCredito(selectedPedidos);
  const { pedidosInvalidos } = categorizedData;

  return {
    open: selectors.modalAnaliseAvisoState({ page: pedidos.page }).open,
    tipoAcao: selectors.tipoAcaoAnaliseCredito({ page: pedidos.page }),
    pedidosInvalidos,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(actions.closeModalAnaliseAviso()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalAnaliseAviso);
