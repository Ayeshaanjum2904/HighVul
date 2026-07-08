import { connect } from 'react-redux';

import LimiteActions from './limiteActions';
import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';

const mapStateToProps = ({ limitesAprovados, auth }) => ({
  isLoadingAlertModal: limitesAprovados?.cancelamentoSisgar?.isLoading,
  isErrorAlertModal: limitesAprovados?.cancelamentoSisgar?.isError,
  permissionList: selectors.permissionList(auth),
});

const mapDispatchToProps = (dispatch) => ({
  salvarCancelamentoMotivo: (idLimite, documento, motivo) => dispatch(
    operations.salvarCancelamentoMotivo(idLimite, documento, motivo),
  ),
  salvarJustificativa: (idLimite, status, motivo) => dispatch(
    operations.updateComJustificativa(idLimite, status, motivo),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(LimiteActions);
