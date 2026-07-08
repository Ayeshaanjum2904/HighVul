import { connect } from 'react-redux';

import InputMarca from './inputMarca';

const mapStateToProps = ({ pedidos }) => ({
  marca: pedidos.details.modal.detalhePedido?.marca,
});

export default connect(mapStateToProps)(InputMarca);
