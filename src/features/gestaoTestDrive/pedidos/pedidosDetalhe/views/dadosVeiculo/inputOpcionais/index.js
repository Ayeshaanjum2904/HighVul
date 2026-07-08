import { connect } from 'react-redux';
import operations from '../../../redux/operations';
import InputOpcionais from './inputOpcionais';

const mapStateToProps = (state) => ({
  opcionais: state.pedidos.details.modal.detalhePedido?.opcionais,
  camposEditaveis: state.pedidos.details.modal.detalhePedido?.camposEditaveis || [],
});

const mapDispatchToProps = (dispatch) => ({
  updateOpcionais: (property, value) => (
    dispatch(operations.updateDetalheProperty(property, value))
  ),
  onValidationChange: (isValid) => dispatch(operations.setTaglistError(!isValid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputOpcionais);
