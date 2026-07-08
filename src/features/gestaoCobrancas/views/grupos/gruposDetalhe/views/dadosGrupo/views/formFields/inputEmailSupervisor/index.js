import { connect } from 'react-redux';

import InputEmailSupervisor from './inputEmailSupervisor';

import operations from '../../../../../redux/operations/operations';
import selectors from '../../../../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  emailSupervisor: selectors.select.emailSupervisor(cobrancas),
  errors: cobrancas.grupos.details.updateGrupo.errors,
  isEditing: cobrancas.grupos.details.updateGrupo.isEditing,
});

const mapDispatchToProps = (dispatch) => ({
  updateGrupoProperty: (propertyName, value) => {
    dispatch(operations.updateGrupoProperty(propertyName, value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(InputEmailSupervisor);
