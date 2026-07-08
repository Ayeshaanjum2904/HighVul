import { connect } from 'react-redux';

import operations from '../../../redux/operations';
import CodigoConcessionariaEntregaInput from './codigoConcessionariaEntregaInput';

const mapStateToProps = (state) => ({
  codigoConcessionariaEntrega: state.pedidos.details.modal.detalhePedido?.codigoConcessionariaEntrega || '',
  camposEditaveis: state.pedidos.details.modal.detalhePedido?.camposEditaveis || [],
});

const mapDispatchToProps = (dispatch) => ({
  updateDetalheProperty: (property, value) => (
    dispatch(operations.updateDetalheProperty(property, value))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CodigoConcessionariaEntregaInput);
