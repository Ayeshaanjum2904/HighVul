import { connect } from 'react-redux';

import AlertasModal from './alertasModal';
import operations from './redux/operations';

const mapStateToProps = ({ comunicados }) => ({
  status: comunicados.alertas.modal.modalStatus,
  isLoading: comunicados.alertas.modal.sendAlerta.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  closeModalAlertas: () => dispatch(operations.closeModalAlerta()),
  setModalStatus: (status) => dispatch(operations.setModalStatus(status)),
  resetStore: () => dispatch(operations.resetStore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertasModal);
