import { connect } from 'react-redux';

import operations from '../../../redux/operations';

import InputNumeroContrato from './inputNumeroContrato';

const mapStateToProps = ({ pedidos }) => ({
  numeroContrato: pedidos.details.modal.detalhePedido?.numeroContrato,
  camposEditaveis: pedidos.details.modal.detalhePedido?.camposEditaveis,
});

const mapDispatchToProps = (dispatch) => ({
  updateDetalheProperty: (propertyName, value) => {
    dispatch(operations.updateDetalheProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputNumeroContrato);
