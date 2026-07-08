import { connect } from 'react-redux';

import operations from '../../../redux/operations';

import InputNumeroNotaFiscal from './inputNumeroNotaFiscal';

const mapStateToProps = ({ pedidos }) => ({
  status: pedidos.details.modal.detalhePedido?.status,
  numeroNotaFiscal: pedidos.details.modal.detalhePedido?.numeroNotaFiscal,
  camposEditaveis: pedidos.details.modal.detalhePedido?.camposEditaveis,
});

const mapDispatchToProps = (dispatch) => ({
  updateDetalheProperty: (propertyName, value) => {
    dispatch(operations.updateDetalheProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputNumeroNotaFiscal);
