import { connect } from 'react-redux';
import operations from '../../../redux/operations';
import InputRevestimento from './inputRevestimento';

const mapStateToProps = (state) => ({
  revestimento: state.pedidos.details.modal.detalhePedido?.revestimento,
  camposEditaveis: state.pedidos.details.modal.detalhePedido?.camposEditaveis || [],
});

const mapDispatchToProps = (dispatch) => ({
  updateDetalheProperty: (property, value) => (
    dispatch(operations.updateDetalheProperty(property, value))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputRevestimento);
