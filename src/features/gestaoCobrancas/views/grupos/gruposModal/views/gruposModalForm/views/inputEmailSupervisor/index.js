import { connect } from 'react-redux';

import InputEmailSupervisor from './inputEmailSupervisor';

import operations from '../../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  emailSupervisor: cobrancas.grupos.modal.grupo.emailSupervisor,
  errors: cobrancas.grupos.modal.insertGrupo.errors,
});

const mapDispatchToProps = (dispatch) => ({
  updateGrupoProperty: (propertyName, value) => {
    dispatch(operations.updateGrupoProperty(propertyName, value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(InputEmailSupervisor);
