import { connect } from 'react-redux';

import selectors from '../../../../redux/selectors';
import operations from '../../../../redux/operations';

import Button from './cancelarContratoButton';

const mapStateToProps = ({ pedidos }) => ({
  isModalSending: selectors.isModalSending(pedidos),
});

const mapDispatchToProps = (dispatch) => ({
  openCancelPedidoModal: () => { dispatch(operations.setOpenCancelPedidoModal(true)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
