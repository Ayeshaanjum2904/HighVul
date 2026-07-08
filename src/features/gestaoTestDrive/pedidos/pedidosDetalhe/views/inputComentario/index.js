import { connect } from 'react-redux';
import InputComentario from './inputComentario';

import operations from '../../redux/operations';

const mapStateToProps = ({ pedidos }) => ({
  mensagem: pedidos.details.modal?.mensagem,
  isLoading: pedidos.details.sendComentario.isLoading,
  isLoadingModal: pedidos.details.modal.isLoading,
  isError: pedidos.details.sendComentario.isError,
});

const mapDispatchToProps = (dispatch) => ({
  updateMessage: (value) => {
    dispatch(operations.updateMessage(value));
  },
  sendComentario: (mensagem) => {
    dispatch(operations.sendComentario(mensagem));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputComentario);
