import { connect } from 'react-redux';

import HistoricoDetail from './historicoDetalhe';
import operations from './redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: cobrancas.historico.details.isLoading,
  isError: cobrancas.historico.details.isError,
});

const mapDispatchToProps = (dispatch) => ({
  onCloseModal: () => dispatch(operations.setModalClose()),
  getDetails: () => dispatch(operations.getDetails()),
  resetStore: () => dispatch(operations.resetStore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoricoDetail);
