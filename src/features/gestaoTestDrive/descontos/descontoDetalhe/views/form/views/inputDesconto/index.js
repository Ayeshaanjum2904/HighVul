import { connect } from 'react-redux';

import Operations from '../../../../redux/operations';

import InputDesconto from './inputDesconto';

const mapStateToProps = (state) => ({
  value: state.descontos.details.desconto.descontoGlobal || 0,
});

const mapDispatchToProps = (dispatch) => ({
  setValue: (value) => dispatch(Operations.setDescontoGlobal(parseFloat(value))),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputDesconto);
