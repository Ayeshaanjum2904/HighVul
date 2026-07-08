import { connect } from 'react-redux';

import GruposModal from './gruposModal';

import operations from './redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: cobrancas.grupos.modal.insertGrupo.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  resetStore: () => dispatch(operations.resetStore()),
  getRegionais: () => dispatch(operations.getRegionais()),
  getMarcas: () => dispatch(operations.getMarcas()),
  closeModal: () => dispatch(operations.closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GruposModal);
