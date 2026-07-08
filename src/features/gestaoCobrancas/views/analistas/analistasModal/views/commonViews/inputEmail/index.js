import { connect } from 'react-redux';

import operations from '../../../redux/operations';
import InputEmail from './inputEmail';

const mapStateToProps = ({ cobrancas }) => ({
  email: cobrancas.analistas.modal.analista.email,
  errors: cobrancas.analistas.modal.insertAnalista.errors,
});

const mapDispatchToProps = (dispatch) => ({
  updateAnalistaProperty: (propertyName, value) => {
    dispatch(operations.updateAnalistaProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputEmail);
