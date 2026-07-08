import { connect } from 'react-redux';

import InputSerie from './inputSerie';

const mapStateToProps = ({ pedidos }) => ({
  serie: pedidos.details.modal.detalhePedido?.serie,
});

export default connect(mapStateToProps)(InputSerie);
