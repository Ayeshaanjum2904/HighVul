import { connect } from 'react-redux';

import InputUsuarioEmail from './inputUsuarioEmail';

const mapStateToProps = ({ pedidos }) => ({
  usuarioEmail: pedidos.details.modal.detalhePedido?.usuarioEmail,
});

export default connect(mapStateToProps)(InputUsuarioEmail);
