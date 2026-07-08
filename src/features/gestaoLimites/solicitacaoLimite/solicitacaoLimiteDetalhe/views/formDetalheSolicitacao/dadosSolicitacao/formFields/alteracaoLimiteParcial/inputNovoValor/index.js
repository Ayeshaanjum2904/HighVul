import { connect } from 'react-redux';

import operations from '../../../../../../redux/operations';
import selectors from '../../../../../../redux/selectors';

import InputNovoValor from './inputNovoValor';

const mapStateToProps = ({ limites }) => ({
  novoValor: limites.details.modal?.novoValor,
  isNovoValorValido: selectors.validateNovoValor(limites),
});

const mapDispatchToProps = (dispatch) => ({
  updateNovoValor: (value) => dispatch(operations.updateNovoValor(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputNovoValor);
