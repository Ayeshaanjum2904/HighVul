import { connect } from 'react-redux';

import InputVersao from './inputVersao';

const mapStateToProps = ({ pedidos }) => ({
  versao: pedidos.details.modal.detalhePedido?.versao,
});

export default connect(mapStateToProps)(InputVersao);
