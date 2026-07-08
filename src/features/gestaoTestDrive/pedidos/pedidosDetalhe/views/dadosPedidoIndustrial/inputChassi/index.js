import { connect } from 'react-redux';

import operations from '../../../redux/operations';

import InputChassi from './inputChassi';

const mapStateToProps = ({ pedidos }) => ({
  chassi: pedidos.details.modal.detalhePedido?.chassi,
  camposEditaveis: pedidos.details.modal.detalhePedido?.camposEditaveis,
});

const mapDispatchToProps = (dispatch) => ({
  updateDetalheProperty: (propertyName, value) => {
    dispatch(operations.updateDetalheProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputChassi);
