import { connect } from 'react-redux';

import Operations from '../../../../redux/operations';

import InputNumDve from './inputNumDve';

const mapStateToProps = ({ descontos }) => ({
  numeroDve: descontos.details.desconto?.dve,
});

const mapDispatchToProps = (dispatch) => ({
  setNumeroDve: (dve) => dispatch(Operations.setDve(dve)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputNumDve);
