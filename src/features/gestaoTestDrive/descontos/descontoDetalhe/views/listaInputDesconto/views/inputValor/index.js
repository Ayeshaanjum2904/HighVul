import { connect } from 'react-redux';

import Operations from '../../../../redux/operations';

import InputValor from './inputValor';

const mapDispatchToProps = (dispatch) => ({
  setValue: (id, value) => dispatch(Operations.setDescontoValue(id, parseFloat(value))),
});

export default connect(null, mapDispatchToProps)(InputValor);
