import { connect } from 'react-redux';

import AlertasModalForm from './alertasModalForm';

const mapStateToProps = ({ comunicados }) => ({
  isError: comunicados.alertas.modal.getAlerta.isError,
  isLoading: comunicados.alertas.modal.getAlerta.isLoading,

});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertasModalForm);
