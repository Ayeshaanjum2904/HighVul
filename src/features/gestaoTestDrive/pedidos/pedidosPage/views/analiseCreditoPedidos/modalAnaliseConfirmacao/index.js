import { connect } from 'react-redux';

import ModalAnaliseConfirmacao from './modalAnaliseConfirmacao';
import { categorizarPedidosPorStatusAnaliseCredito } from '../../../utils/analiseCreditoUtils';
import operations from '../../../redux/operations';
import actions from '../../../redux/actions';
import selectors from '../../../redux/selectors';

const mapStateToProps = ({ pedidos }) => {
  const { selectedPedidos } = pedidos.page;
  const { pedidosValidos } = categorizarPedidosPorStatusAnaliseCredito(selectedPedidos);
  const isAprovando = selectors.isAprovandoPedidos({ page: pedidos.page });
  const isReprovando = selectors.isReprovandoPedidos({ page: pedidos.page });

  return {
    open: selectors.modalAnaliseConfirmacaoState({ page: pedidos.page }).open,
    pedidosValidos,
    isLoading: isAprovando || isReprovando,
    tipoAcao: selectors.tipoAcaoAnaliseCredito({ page: pedidos.page }),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(actions.closeModalAnaliseConfirmacao()),
  onConfirmar: (pedidosIds, tipoAcao) => {
    const aprovacao = tipoAcao === 'aprovar';
    dispatch(operations.processarAnaliseCreditoPedidos(pedidosIds, aprovacao));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalAnaliseConfirmacao);
