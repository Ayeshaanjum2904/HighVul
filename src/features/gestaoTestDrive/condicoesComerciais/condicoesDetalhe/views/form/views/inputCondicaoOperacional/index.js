import { connect } from 'react-redux';

import Operations from '../../../../redux/operations';
import selector from '../../../../redux/selector';
import InputCondicaoOperacional from './inputCondicaoOperacional';

const mapStateToProps = ({ condicoesComerciais }) => ({
  condicaoOperacional: selector.condicaoOperacional(condicoesComerciais),
});

const mapDispatchToProps = (dispatch) => ({
  setCondicaoOperacional: (value) => dispatch(
    Operations.setMvsCondicaoOperacional(value),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputCondicaoOperacional);
