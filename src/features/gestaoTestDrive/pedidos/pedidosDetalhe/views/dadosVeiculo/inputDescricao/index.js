import { connect } from 'react-redux';

import InputDescricao from './inputDescricao';

const mapStateToProps = ({ pedidos }) => ({
  descricao: pedidos.details.modal.detalhePedido?.descricao,
});

export default connect(mapStateToProps)(InputDescricao);
