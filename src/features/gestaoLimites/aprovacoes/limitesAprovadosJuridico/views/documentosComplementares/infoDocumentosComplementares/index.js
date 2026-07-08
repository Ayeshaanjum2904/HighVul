import { connect } from 'react-redux';
import InfoDocumentosComplementares from './infoDocumentosComplementares';
import operations from '../../../redux/operations';

const mapStateToProps = ({ limitesAprovadosJuridico }) => ({
  listaPessoaDocumentacao: limitesAprovadosJuridico.listaPessoaDocumentacao.listaDados,
});

const mapDispatchToProps = (dispatch) => ({
  invalidarDocumento: (
    idDocumento,
    motivo,
    idLimite,
    statusDestino,
    changeStatus,
    onSubmit,
  ) => dispatch(operations.invalidateDocumentoJuridico(
    idDocumento,
    motivo,
    idLimite,
    statusDestino,
    changeStatus,
    onSubmit,
  )),
  updateStatusPendenteAnexo: (status, indexPessoa) => dispatch(
    operations.updateStatusPendenteAnexo(status, indexPessoa),
  ),
  updateStatusValidado: (status, indexPessoa) => dispatch(
    operations.updateStatusValidado(status, indexPessoa),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoDocumentosComplementares);
