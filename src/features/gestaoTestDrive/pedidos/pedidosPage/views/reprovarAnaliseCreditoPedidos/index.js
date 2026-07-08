import { connect } from 'react-redux';

import ReprovarAnaliseCreditoPedidos from './reprovarAnaliseCreditoPedidos';
import { determinarTipoModalAnaliseCredito, MODAL_TYPES } from '../../utils/analiseCreditoUtils';
import actions, { setTipoAcaoAnaliseCredito } from '../../redux/actions';

const mapStateToProps = ({ pedidos }) => ({
  selectedPedidos: pedidos.page.selectedPedidos,
  isLoading: pedidos.page.analiseCreditoPedidos.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onReprovarClick: (selectedPedidos) => {
    dispatch(setTipoAcaoAnaliseCredito('reprovar'));

    const tipoModal = determinarTipoModalAnaliseCredito(selectedPedidos);

    switch (tipoModal) {
      case MODAL_TYPES.CONFIRMACAO:
        dispatch(actions.openModalAnaliseConfirmacao());
        break;
      case MODAL_TYPES.AVISO:
        dispatch(actions.openModalAnaliseAviso());
        break;
      case MODAL_TYPES.MISTO:
        dispatch(actions.openModalAnaliseMisto());
        break;
      default:
        break;
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReprovarAnaliseCreditoPedidos);
