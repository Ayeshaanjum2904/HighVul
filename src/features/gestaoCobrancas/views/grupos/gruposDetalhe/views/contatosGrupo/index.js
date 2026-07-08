import { connect } from 'react-redux';

import ContatosGrupo from './contatosGrupo';

import operations from '../../redux/operations/operations';
import contatosModalOperations from '../../../../contatos/contatosModal/redux/operations/operations';
import selectors from '../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: cobrancas.grupos.details.updateContato.isLoading,
  isModalEditOpen: cobrancas.contatos.modal.isOpen,
  isModalAssociacaoOpen: cobrancas.grupos.details.updateContato.isAssociacaoOpen,
  isLoadingContato: selectors.isLoading.contatos(cobrancas),
});

const mapDispatchToProps = (dispatch) => ({
  registerLoader: (id, loadOp) => {
    dispatch(operations.registerLoader(id, loadOp));
  },
  getContatosGrupo: () => operations.getContatosGrupo(),
  closeModalAssociacao: () => dispatch(operations.closeModalAssociacarContato()),
  insertContatos: () => dispatch(operations.insertContatos()),
  openModalAssociacao: () => dispatch(operations.openModalAssociarContato()),
  getContatosAssociacao: () => dispatch(operations.getContatosAssociacao()),
  sendContato: (setModalOpen) => dispatch(operations.sendContato(setModalOpen)),
  resetModal: () => dispatch(contatosModalOperations.resetStore()),
  openModal: (contato) => dispatch(contatosModalOperations.openModal(contato)),
  closeModal: () => dispatch(contatosModalOperations.closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContatosGrupo);
