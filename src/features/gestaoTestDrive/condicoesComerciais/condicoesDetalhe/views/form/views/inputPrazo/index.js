import { connect } from 'react-redux';

import Operations from '../../../../redux/operations';
import selector from '../../../../redux/selector';

import InputPrazo from './inputPrazo';

const mapStateToProps = ({ condicoesComerciais }) => ({
  prazo: selector.prazo(condicoesComerciais),
});

const mapDispatchToProps = (dispatch) => ({
  // eslint-disable-next-line radix
  setPrazo: (id, value) => dispatch(Operations.setMvsPrazo(id, parseInt(value))),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputPrazo);
