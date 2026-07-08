import { connect } from 'react-redux';

import operations from '../../../redux/operations';
import InputEmail from './inputEmail';

const mapStateToProps = ({ cobrancas }) => ({
  email: cobrancas.gerentes.modal.gerente.email,
  errors: cobrancas.gerentes.modal.insertGerente.errors,
});

const mapDispatchToProps = (dispatch) => ({
  updateGerenteProperty: (propertyName, value) => {
    dispatch(operations.updateGerenteProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputEmail);
