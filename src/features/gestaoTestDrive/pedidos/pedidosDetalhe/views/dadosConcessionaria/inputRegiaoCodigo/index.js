import { connect } from 'react-redux';

import InputRegiaoCodigo from './inputRegiaoCodigo';

const mapStateToProps = ({ pedidos }) => ({
  regiaoCodigo: pedidos.details.modal.detalhePedido?.regiaoCodigo,
});

export default connect(mapStateToProps)(InputRegiaoCodigo);
