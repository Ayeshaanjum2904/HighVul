import { connect } from 'react-redux';

import ListaDocumentos from './listaDocumentos';
import operations from '../../redux/operations';

const mapStateToProps = ({ limitesAprovadosCadastro }) => ({
  listaPessoaDocumentacao: limitesAprovadosCadastro.listaPessoaDocumentacao.listaDados,
  isLoading: limitesAprovadosCadastro.listaPessoaDocumentacao.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  invalidarDocumento: (documento, motivo, closeModal) => dispatch(
    operations.deletePessoaDocumento(documento, motivo, closeModal),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListaDocumentos);
