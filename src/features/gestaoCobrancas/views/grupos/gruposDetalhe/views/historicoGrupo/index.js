import { connect } from 'react-redux';

import HistoricoGrupo from './historicoGrupo';
import operations from '../../redux/operations/operations';

const mapStateToProps = ({ cobrancas }) => ({
  isModalOpen: cobrancas.historico.details.isModalOpen,
});

const mapDispatchToProps = (dispatch) => ({
  registerLoader: (id, loadOp) => {
    dispatch(operations.registerLoader(id, loadOp));
  },
  getHistoricoGrupos: () => operations.getHistoricoGrupo(),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoricoGrupo);
