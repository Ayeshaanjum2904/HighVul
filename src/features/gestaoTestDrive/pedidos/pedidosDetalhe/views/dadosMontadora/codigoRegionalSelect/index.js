import { connect } from 'react-redux';

import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';
import CodigoRegionalSelect from './codigoRegionalSelect';

const mapStateToProps = (state) => ({
  codigoRegional: state.pedidos.details.modal.detalhePedido?.codigoRegional || '',
  camposEditaveis: state.pedidos.details.modal.detalhePedido?.camposEditaveis || [],
  options: selectors.codigoRegionalOptions(state.pedidos),
});

const mapDispatchToProps = (dispatch) => ({
  updateDetalheProperty: (property, value) => (
    dispatch(operations.updateDetalheProperty(property, value))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CodigoRegionalSelect);
