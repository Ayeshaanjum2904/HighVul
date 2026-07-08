import { connect } from 'react-redux';

import FooterError from './footerError';

import selectors from '../../../redux/selectors';

const mapStateToProps = ({ pedidos }) => ({
  isError: selectors.isModalSendingError(pedidos),
  isErrorComentario: pedidos.details.sendComentario.isError,
  status: pedidos.details.modal.detalhePedido?.status,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(FooterError);
