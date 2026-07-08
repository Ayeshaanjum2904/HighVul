import { connect } from 'react-redux';

import AlertasModalFooter from './alertasModalFooter';

const mapStateToProps = ({ comunicados }) => ({
  isError: comunicados.alertas.modal.sendAlerta.isError,
  status: comunicados.alertas.modal.modalStatus,
  isLoading: comunicados.alertas.modal.getAlerta.isLoading,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AlertasModalFooter);
