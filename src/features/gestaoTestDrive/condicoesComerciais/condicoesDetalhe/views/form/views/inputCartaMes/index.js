import { connect } from 'react-redux';

import Operations from '../../../../redux/operations';

import InputCartaMes from './inputCartaMes';

const mapStateToProps = ({ condicoesComerciais }) => ({
  cartaMes: condicoesComerciais.details.condicao?.cartaMes,
});

const mapDispatchToProps = (dispatch) => ({
  setCartaMes: (cartaMes) => dispatch(Operations.setCartaMes(cartaMes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputCartaMes);
