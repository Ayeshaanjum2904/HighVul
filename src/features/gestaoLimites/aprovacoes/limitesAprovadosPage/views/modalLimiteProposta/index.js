import { connect } from 'react-redux';

import ModalLimiteProposta from './modalLimiteProposta';
import operations from '../../redux/operations';

const mapStateToProps = ({ limitesAprovados, auth }) => ({
  limites: limitesAprovados.limitesAprovadosList.limites,
  historicoLimite: limitesAprovados.limiteDetails.historico,
  historicoIsLoading: limitesAprovados.limiteDetails.isLoading,
  motivo: limitesAprovados.limiteDetails.motivo,
  condicao: limitesAprovados.limiteDetails.condicao,
  snackbarErrors: limitesAprovados.snackbarErrors,
  isLoadingAlertModal: limitesAprovados?.cancelamentoSisgar?.isLoading,
  isErrorAlertModal: limitesAprovados?.cancelamentoSisgar?.isError,
  user: auth.user,
  updateCondicao: limitesAprovados.limiteDetails.updateCondicao,
  condicaoSisgar: limitesAprovados?.limitesAprovadosSisgar?.condicaoSisgar?.condicao,
});

const mapDispatchToProps = (dispatch) => ({
  onSnackbarClose: (id) => dispatch(operations.dismissSnackbar(id)),
  setAlterarStatusList: (list) => dispatch(operations.setAlterarStatusList(list)),
  getLimitesAprovados: () => dispatch(operations.getLimitesAprovados()),
  enviarProposta: (idLimite, status) => {
    dispatch(
      operations.updateAndSaveStatus(idLimite, status),
    );
  },
  setMotivo: (motivo) => {
    dispatch(
      operations.setMotivo(motivo),
    );
  },
  setUpdateCondicao: (updateCondicao) => {
    dispatch(operations.setUpdateCondicao(updateCondicao));
  },
  setCondicao: (idVersao, condicao) => dispatch(operations.setCondicao(idVersao, condicao)),
  salvarCancelamentoMotivo: (idLimite, documento, motivo) => {
    dispatch(operations.salvarCancelamentoMotivo(idLimite, documento, motivo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalLimiteProposta);
