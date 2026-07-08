import { connect } from 'react-redux';

import operations from './redux/operations';
import ObservacoesAprovacao from './observacoesAprovacao';
import selectors from './redux/selectors';

const mapStateToProps = ({ limitesAprovadosObservacao, auth }) => ({
  observacaoAprovacao: limitesAprovadosObservacao.observacaoAprovacao,
  user: auth.user,
  observacoesList: limitesAprovadosObservacao.observacoes?.observacoesList,
  isLoadingObservacoes: limitesAprovadosObservacao.observacoes?.isLoading,
  visualizado: limitesAprovadosObservacao.observacoes?.visualizado,
  perfis: selectors.perfilList(auth),
});

const mapDispatchToProps = (dispatch) => ({
  getObservacoes: (idLimite) => dispatch(operations.getObservacoes(idLimite)),
  insertControleObservacao: (idLimite, dataLeitura) => dispatch(
    operations.insertControleObservacao(idLimite, dataLeitura),
  ),
  insertObservacao: (data, idLimite) => dispatch(
    operations.insertObservacao(data, idLimite),
  ),
  uploadArquivoTemporario: async (file) => dispatch(operations.uploadArquivoTemporario(file)),
  getDocumentoDownload: (guidDocumento) => dispatch(operations.getDocumentoDownload(guidDocumento)),
  resetStore: () => dispatch(operations.resetStore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ObservacoesAprovacao);
