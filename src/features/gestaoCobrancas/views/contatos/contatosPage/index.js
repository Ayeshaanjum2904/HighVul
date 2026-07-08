import { connect } from 'react-redux';

import ContatosPage from './contatosPage';

import operations from './redux/operations';
import operationsModalContatos from '../contatosModal/redux/operations/operations';

const mapStateToProps = ({ cobrancas }) => ({
  isModalContatosOpen: cobrancas.contatos.modal.isOpen,
  snackbarErrors: cobrancas.contatos.page.snackbarErrors,
  page: cobrancas.contatos.page.pageParams.page,
  ipp: cobrancas.contatos.page.pageParams.ipp,
  totalItems: cobrancas.contatos.page.pageParams.totalItems,
  isLoading: cobrancas.contatos.page.list.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  resetStore: () => dispatch(operations.resetStore()),
  getContatos: () => dispatch(operations.getContatos()),
  onSnackbarClose: (id) => dispatch(operations.dismissSnackbar(id)),
  sendContato: (setModalOpen) => dispatch(operationsModalContatos.sendContato(setModalOpen)),
  setContato: (contato) => dispatch(operationsModalContatos.setContato(contato)),
  setPage: (page) => dispatch(operations.setPage(page)),
  setIpp: (ipp) => dispatch(operations.setIpp(ipp)),
  resetModal: () => dispatch(operationsModalContatos.resetStore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContatosPage);
