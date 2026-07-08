import { connect } from 'react-redux';
import LimitesAprovadosCadastro from './limitesAprovadosCadastro';
import operations from './redux/operations';
import selectors from '../limitesAprovadosPage/redux/selectors';

const mapStateToProps = ({ limitesAprovados, auth }) => ({
  detalhes: limitesAprovados.limiteDetails.detalhes,
  historico: limitesAprovados.limiteDetails.historico,
  cadastroPage: limitesAprovados.cadastroPage,
  permissionList: selectors.permissionList(auth),
});

const mapDispatchToProps = (dispatch) => ({
  getPessoaDocumentacao: (idLimite) => dispatch(operations.getPessoaDocumentacao(idLimite)),
  enviarProposta: (id, status, motivo) => dispatch(
    operations.updateAndSaveStatus(id, status, motivo),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(LimitesAprovadosCadastro);
