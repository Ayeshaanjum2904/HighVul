import { connect } from 'react-redux';

import InputModelo from './inputModelo';

const mapStateToProps = ({ pedidos }) => ({
  modelo: pedidos.details.modal.detalhePedido?.modelo,
});

export default connect(mapStateToProps)(InputModelo);
