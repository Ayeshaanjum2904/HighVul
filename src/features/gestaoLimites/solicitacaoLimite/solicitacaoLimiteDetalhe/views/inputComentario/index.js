import { connect } from 'react-redux';
import InputComentario from './inputComentario';

import operations from '../../redux/operations';

const mapStateToProps = ({ limites }) => ({
  mensagem: limites.details.modal?.mensagem,
  isLoading: limites.details.sendComentario.isLoading,
  isLoadingModal: limites.details.modal.isLoading,
  isError: limites.details.sendComentario.isError,
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
