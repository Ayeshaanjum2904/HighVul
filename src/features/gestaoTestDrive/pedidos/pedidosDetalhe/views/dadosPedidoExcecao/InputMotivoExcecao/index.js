import { connect } from 'react-redux';

import InputMotivoExcecao from './inputMotivoExcecao';

const mapStateToProps = ({ pedidos }) => ({
  motivo: pedidos.details.modal.detalhePedido?.motivo,
});

export default connect(mapStateToProps)(InputMotivoExcecao);
