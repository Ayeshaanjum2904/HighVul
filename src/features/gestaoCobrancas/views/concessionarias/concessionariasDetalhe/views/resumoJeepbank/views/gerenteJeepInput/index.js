import { connect } from 'react-redux';

import GerenteJeepInput from './inputGerenteJeep';

import selectors from '../../../../redux/selectors';
import operations from '../../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  gerente: selectors.selectGerente(cobrancas),
  isDisabled: cobrancas.concessionarias.details.isDisabled,
  errors: cobrancas.concessionarias.details.statusRequest.errors,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch(operations.setUpdateData('gerenteJeep', value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GerenteJeepInput);
