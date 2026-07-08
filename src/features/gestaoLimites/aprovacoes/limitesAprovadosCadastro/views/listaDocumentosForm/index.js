import { connect } from 'react-redux';

import ListaDocumentosForm from './listaDocumentosForm';
import operations from '../../redux/operations';

const mapStateToProps = ({ limitesAprovadosCadastro }) => ({
  documentoOpcoes: limitesAprovadosCadastro.documento.documentoList,
});

const mapDispatchToProps = (dispatch) => ({
  insertPessoaDocumentacao: (data, idLimite) => dispatch(
    operations.insertPessoaDocumentacao(data, idLimite),
  ),
  insertTipoRelacionamento: (
    listaRelacionamentos,
  ) => dispatch(operations.insertTipoRelacionamento(listaRelacionamentos)),
  insertTipoDocumento: (
    listaDocumentos,
  ) => dispatch(operations.insertTipoDocumento(listaDocumentos)),
  getPessoaDocumentacao: (idLimite) => dispatch(operations.getPessoaDocumentacao(idLimite)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListaDocumentosForm);
