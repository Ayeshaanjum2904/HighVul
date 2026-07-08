import { connect } from 'react-redux';

import Operations from '../../../../redux/operations';
import selector from '../../../../redux/selector';

import InputDesconto from './inputDesconto';

const mapStateToProps = ({ condicoesComerciais }) => ({
  desconto: selector.desconto(condicoesComerciais),
});

const mapDispatchToProps = (dispatch) => ({
  setDesconto: (value) => dispatch(Operations.setDescontoValue(parseFloat(value))),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputDesconto);
