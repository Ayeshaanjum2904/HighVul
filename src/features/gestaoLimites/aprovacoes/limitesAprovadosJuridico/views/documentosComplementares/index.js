import { connect } from 'react-redux';
import DocumentosComplementares from './documentosComplementares';
import operations from '../../redux/operations';

const mapStateToProps = ({ auth, limitesAprovadosJuridico, limitesAprovados }) => ({
  listaPessoaDocumentacao: limitesAprovadosJuridico.listaPessoaDocumentacao.listaDados,
  statusLimite: limitesAprovados.limiteDetails.detalhes.statusLimite,
  user: auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  deleteDocumentosComplementares: (idPessoaDocumentacao, idLimite) => dispatch(
    operations.deletePessoaDocumentacao(idPessoaDocumentacao, idLimite),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentosComplementares);
