import { connect } from 'react-redux';

import ContatosModal from './contatosModal';

import operations from './redux/operations/operations';
import selectors from './redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: cobrancas.contatos.modal.sendContato.isLoading,
  id: cobrancas.contatos.modal.contato.id,
  modalInfo: selectors.modalInfo(cobrancas),
  disableSubmit: selectors.isButtonEnabled(cobrancas),
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(operations.closeModal()),
  resetStore: () => dispatch(operations.resetStore()),
  getPapeis: () => dispatch(operations.getPapeis()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContatosModal);
