import { connect } from 'react-redux';

import InputUsuarioNome from './inputUsuarioNome';

const mapStateToProps = ({ pedidos }) => ({
  usuarioNome: pedidos.details.modal.detalhePedido?.usuarioNome,
});

export default connect(mapStateToProps)(InputUsuarioNome);
