import { connect } from 'react-redux';
import LimitesAprovadosJuridico from './limitesAprovadosJuridico';
import operations from './redux/operations';
import operationsCadastro from '../limitesAprovadosCadastro/redux/operations';
import selectors from '../limitesAprovadosPage/redux/selectors';

const mapStateToProps = ({
  limitesAprovados, limitesAprovadosJuridico, auth,
}) => ({
  listaPessoaDocumentacao: limitesAprovadosJuridico.listaPessoaDocumentacao,
  listaPessoaDocumentacaoLoading: limitesAprovadosJuridico.listaPessoaDocumentacao.isLoading,
  listaDocumentosFormalizar: limitesAprovadosJuridico.documentosFormalizar.documentosFormalizarList,
  listaDocumentosFormalizarLoading: limitesAprovadosJuridico.documentosFormalizar.isLoading,
  detalhes: limitesAprovados.limiteDetails.detalhes,
  historico: limitesAprovados.limiteDetails.historico,
  isLoadingDetalhes: limitesAprovados.limiteDetails.isLoading,
  user: auth.user,
  condicaoSisgar: limitesAprovados?.limitesAprovadosSisgar?.condicaoSisgar?.condicao,
  permissionList: selectors.permissionList(auth),
});

const mapDispatchToProps = (dispatch) => ({
  getPessoaDocumentacao: (idLimite) => dispatch(operations.getPessoaDocumentacao(idLimite)),
  getDocumentosFormalizar: (idLimite) => dispatch(operations.getDocumentoFormalizarList(idLimite)),
  enviarProposta: (id, status, motivo) => dispatch(
    operationsCadastro.updateAndSaveStatus(id, status, motivo),
  ),
  resetStore: () => dispatch(operations.resetStore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LimitesAprovadosJuridico);
