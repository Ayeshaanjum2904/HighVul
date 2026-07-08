import { connect } from 'react-redux';

import InputContrato from './inputContrato';

const mapStateToProps = ({ pedidos }) => ({
  urlContrato: pedidos.details.modal.detalhePedido?.urlContrato,
  currentStatus: pedidos.details.modal.detalhePedido?.status,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(InputContrato);
