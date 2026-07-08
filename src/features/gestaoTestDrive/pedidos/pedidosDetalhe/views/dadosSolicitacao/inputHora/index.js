import { connect } from 'react-redux';

import InputHora from './inputHora';

const mapStateToProps = ({ pedidos }) => ({
  data: pedidos.details.modal.detalhePedido?.data,
});

export default connect(mapStateToProps)(InputHora);
