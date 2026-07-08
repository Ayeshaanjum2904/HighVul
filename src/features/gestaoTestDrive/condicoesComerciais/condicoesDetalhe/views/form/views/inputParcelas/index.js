import { connect } from 'react-redux';

import Operations from '../../../../redux/operations';
import selector from '../../../../redux/selector';

import InputParcelas from './inputParcelas';

const mapStateToProps = ({ condicoesComerciais }) => ({
  parcelas: selector.parcelas(condicoesComerciais),
});

const mapDispatchToProps = (dispatch) => ({
  // eslint-disable-next-line radix
  setParcelas: (id, value) => dispatch(Operations.setMvsParcelas(id, parseInt(value))),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputParcelas);
