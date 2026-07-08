import { connect } from 'react-redux';

import operations from '../../../redux/operations';
import InputNome from './inputNome';

const mapStateToProps = ({ cobrancas }) => ({
  nome: cobrancas.analistas.modal.analista.nome,
  errors: cobrancas.analistas.modal.insertAnalista.errors,
});

const mapDispatchToProps = (dispatch) => ({
  updateAnalistaProperty: (propertyName, value) => {
    dispatch(operations.updateAnalistaProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputNome);
