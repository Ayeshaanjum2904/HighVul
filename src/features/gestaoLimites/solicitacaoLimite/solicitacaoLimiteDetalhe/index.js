import { connect } from 'react-redux';

import operations from './redux/operations';

import SolicitaoLimiteModal from './solicitacaoLimiteModal';

const mapStateToProps = ({ limites }) => ({
  solicitacaoId: limites.details.modal.detalheSolicitacao?.solicitacaoId,
  isLoadingUpdate: limites.details.updateStatus?.isLoading,
  isLoadingCancel: limites.details.cancelSolicitacao?.isLoading,
  statusErrorModalOpen: limites.details.updateStatus.isModalErrorOpen,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => { dispatch(operations.closeModal()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(SolicitaoLimiteModal);
