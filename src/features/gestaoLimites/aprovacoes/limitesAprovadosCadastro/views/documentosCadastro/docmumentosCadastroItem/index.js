import { connect } from 'react-redux';
import DocumentosCadastroItem from './documentosCadastroItem';
import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';

const mapStateToProps = ({ auth }) => ({
  permissionList: selectors.permissionList(auth),
});

const mapDispatchToProps = (dispatch) => ({
  deletePessoaDocumentacao: (idPessoaDocumentacao, idLimite) => dispatch(
    operations.deletePessoaDocumentacao(idPessoaDocumentacao, idLimite),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentosCadastroItem);
