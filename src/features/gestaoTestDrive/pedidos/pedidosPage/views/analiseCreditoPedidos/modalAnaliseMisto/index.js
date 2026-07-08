import { connect } from 'react-redux';

import ModalAnaliseMisto from './modalAnaliseMisto';
import { categorizarPedidosPorStatusAnaliseCredito } from '../../../utils/analiseCreditoUtils';
import operations from '../../../redux/operations';
import actions from '../../../redux/actions';
import selectors from '../../../redux/selectors';

const mapStateToProps = ({ pedidos }) => {
  const { selectedPedidos } = pedidos.page;
  const categorizedData = categorizarPedidosPorStatusAnaliseCredito(selectedPedidos);
  const { pedidosValidos, pedidosInvalidos } = categorizedData;
  const isAprovando = selectors.isAprovandoPedidos({ page: pedidos.page });
  const isReprovando = selectors.isReprovandoPedidos({ page: pedidos.page });

  return {
    open: selectors.modalAnaliseMistoState({ page: pedidos.page }).open,
    pedidosValidos,
    pedidosInvalidos,
    isLoading: isAprovando || isReprovando,
    tipoAcao: selectors.tipoAcaoAnaliseCredito({ page: pedidos.page }),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(actions.closeModalAnaliseMisto()),
  onConfirmar: (pedidosIds, tipoAcao) => {
    const aprovacao = tipoAcao === 'aprovar';
    dispatch(operations.processarAnaliseCreditoPedidos(pedidosIds, aprovacao));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalAnaliseMisto);
