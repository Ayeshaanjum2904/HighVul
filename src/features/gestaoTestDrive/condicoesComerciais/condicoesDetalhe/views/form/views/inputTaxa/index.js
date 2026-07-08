import { connect } from 'react-redux';

import Operations from '../../../../redux/operations';
import selector from '../../../../redux/selector';

import InputTaxa from './inputTaxa';

const mapStateToProps = ({ condicoesComerciais }) => ({
  taxa: selector.taxa(condicoesComerciais),
});

const mapDispatchToProps = (dispatch) => ({
  setTaxa: (id, value) => dispatch(Operations.setMvsTaxa(id, parseFloat(value))),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputTaxa);
