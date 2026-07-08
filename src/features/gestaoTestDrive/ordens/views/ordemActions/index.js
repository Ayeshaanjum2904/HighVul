import { connect } from 'react-redux';

import OrdemActions from './ordemActions';
import operations from '../../redux/operations';

const mapStateToProps = ({ ordens }) => ({
  isLoadingAlertModal: ordens.isCancelling,
  isErrorAlertModal: ordens.cancelError,
});

const mapDispatchToProps = (dispatch) => ({
  cancelOrder: (id, justificativa) => dispatch(
    operations.cancelOrder(id, justificativa),
  ),
  setModalOrdem: (selectedOrdem) => dispatch(operations.setOpenModalOrdem(true, selectedOrdem)),
  setModalVincularCondicao: (selectedOrdem) => dispatch(
    operations.setOpenModalVincularCondicao(true, selectedOrdem),
  ),
  setModalVincularCondicaoAVista: (selectedOrdem) => dispatch(
    operations.setOpenModalVincularCondicaoAVista(true, selectedOrdem),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdemActions);
