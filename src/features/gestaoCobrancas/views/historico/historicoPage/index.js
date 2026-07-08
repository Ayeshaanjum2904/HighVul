import { connect } from 'react-redux';

import HistoricoPage from './historicoPage';
import operations from './redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  isModalOpen: cobrancas.historico.details.isModalOpen,
});

const mapDispatchToProps = (dispatch) => ({
  getHistorico: () => dispatch(operations.getHistorico()),
  resetStore: () => dispatch(operations.resetStore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoricoPage);
