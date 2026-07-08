import { connect } from 'react-redux';

import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';
import EmpresaOrigemFaturamentoSelect from './empresaOrigemFaturamentoSelect';

const mapStateToProps = (state) => ({
  empresaOrigemFaturamento: state.pedidos.details.modal.detalhePedido?.empresaOrigemFaturamento,
  camposEditaveis: state.pedidos.details.modal.detalhePedido?.camposEditaveis || [],
  options: selectors.empresaOrigemOptions(state.pedidos),
});

const mapDispatchToProps = (dispatch) => ({
  updateDetalheProperty: (property, value) => (
    dispatch(operations.updateDetalheProperty(property, value))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmpresaOrigemFaturamentoSelect);
