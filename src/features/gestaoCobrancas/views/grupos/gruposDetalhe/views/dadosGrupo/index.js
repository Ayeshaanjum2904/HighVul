import { connect } from 'react-redux';

import DadosGrupo from './dadosGrupo';

import operations from '../../redux/operations/operations';
import selectors from '../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: selectors.isLoading.dados(cobrancas),
});

const mapDispatchToProps = (dispatch) => ({
  registerLoader: (id, loadOp) => {
    dispatch(operations.registerLoader(id, loadOp));
  },
  getDetalhesGrupo: () => operations.getDetalhesGrupo(),
});

export default connect(mapStateToProps, mapDispatchToProps)(DadosGrupo);
