import { connect } from 'react-redux';

import InputConcessionariaCodigo from './inputConcessionariaCodigo';

const mapStateToProps = ({ pedidos }) => ({
  corretorId: pedidos.details.modal.detalhePedido?.corretorId,
});

export default connect(mapStateToProps)(InputConcessionariaCodigo);
