import { connect } from 'react-redux';
import operations from '../../../redux/operations';
import InputCorExterna from './inputCorExterna';

const mapStateToProps = (state) => ({
  corExterna: state.pedidos.details.modal.detalhePedido?.corExterna,
  camposEditaveis: state.pedidos.details.modal.detalhePedido?.camposEditaveis || [],
});

const mapDispatchToProps = (dispatch) => ({
  updateDetalheProperty: (property, value) => (
    dispatch(operations.updateDetalheProperty(property, value))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputCorExterna);
