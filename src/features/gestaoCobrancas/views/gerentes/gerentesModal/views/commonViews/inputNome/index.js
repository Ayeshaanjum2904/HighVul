import { connect } from 'react-redux';

import operations from '../../../redux/operations';
import InputNome from './inputNome';

const mapStateToProps = ({ cobrancas }) => ({
  nome: cobrancas.gerentes.modal.gerente.nome,
  errors: cobrancas.gerentes.modal.insertGerente.errors,
});

const mapDispatchToProps = (dispatch) => ({
  updateGerenteProperty: (propertyName, value) => {
    dispatch(operations.updateGerenteProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputNome);
