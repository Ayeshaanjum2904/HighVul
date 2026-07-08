import { connect } from 'react-redux';

import CancelarPedidos from './cancelarPedidos';
import { determinarTipoModal, MODAL_TYPES } from '../../utils/cancelamentoUtils';
import actions from '../../redux/actions';

const mapStateToProps = ({ pedidos }) => ({
  selectedPedidos: pedidos.page.selectedPedidos,
  isLoading: pedidos.page.cancelarPedidos.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onCancelarClick: (selectedPedidos) => {
    const tipoModal = determinarTipoModal(selectedPedidos);

    switch (tipoModal) {
      case MODAL_TYPES.CONFIRMACAO:
        dispatch(actions.openModalConfirmacao());
        break;
      case MODAL_TYPES.AVISO:
        dispatch(actions.openModalAviso());
        break;
      case MODAL_TYPES.MISTO:
        dispatch(actions.openModalMisto());
        break;
      default:
        break;
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CancelarPedidos);
