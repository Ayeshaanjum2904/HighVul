import { connect } from 'react-redux';

import InputRegiaoNome from './inputRegiaoNome';

const mapStateToProps = ({ pedidos }) => ({
  regiaoNome: pedidos.details.modal.detalhePedido?.regiaoNome,
});

export default connect(mapStateToProps)(InputRegiaoNome);
