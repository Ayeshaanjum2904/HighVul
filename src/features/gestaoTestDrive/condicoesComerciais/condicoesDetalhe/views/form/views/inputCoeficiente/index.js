import { connect } from 'react-redux';

import Operations from '../../../../redux/operations';
import selector from '../../../../redux/selector';

import InputCoeficiente from './inputCoeficiente';

const mapStateToProps = ({ condicoesComerciais }) => ({
  coeficiente: selector.coeficiente(condicoesComerciais),
});

const mapDispatchToProps = (dispatch) => ({
  setCoeficiente: (value) => dispatch(Operations.setMvsCoeficiente(parseFloat(value))),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputCoeficiente);
