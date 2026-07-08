import { connect } from 'react-redux';

import InputModelYear from './inputModelYear';

const mapStateToProps = ({ pedidos }) => ({
  modelYear: pedidos.details.modal.detalhePedido?.modelYear,
});

export default connect(mapStateToProps)(InputModelYear);
