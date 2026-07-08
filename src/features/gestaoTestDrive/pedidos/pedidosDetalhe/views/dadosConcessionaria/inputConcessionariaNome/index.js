import { connect } from 'react-redux';

import InputConcessionariaNome from './inputConcessionariaNome';

const mapStateToProps = ({ pedidos }) => ({
  concessionariaNome: pedidos.details.modal.detalhePedido?.concessionariaNome,
});

export default connect(mapStateToProps)(InputConcessionariaNome);
