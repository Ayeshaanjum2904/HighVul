import { connect } from 'react-redux';
import DocumentoComplementarForm from './documentoComplementarForm';
import operations from '../../../redux/operations';

const mapStateToProps = ({ limitesAprovadosJuridico }) => ({
  documentoOpcoes: limitesAprovadosJuridico.documento.documentoList,
});

const mapDispatchToProps = (dispatch) => ({
  getTipoDocumentoList: () => dispatch(operations.getTipoDocumentoList()),
  insertTipoDocumento: (tipoDocumento) => dispatch(operations.insertTipoDocumento(tipoDocumento)),
  insertPessoaDocumentacao: (data, idLimite, idPessoa) => dispatch(
    operations.insertPessoaDocumentacao(data, idLimite, idPessoa),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentoComplementarForm);
