import { connect } from 'react-redux';

import InputData from './inputData';

const mapStateToProps = ({ pedidos }) => ({
  data: pedidos.details.modal.detalhePedido?.data,
});

export default connect(mapStateToProps)(InputData);
