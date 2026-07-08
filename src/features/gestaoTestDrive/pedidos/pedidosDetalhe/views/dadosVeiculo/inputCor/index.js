import { connect } from 'react-redux';

import InputCor from './inputCor';

const mapStateToProps = ({ pedidos }) => ({
  cor: pedidos.details.modal.detalhePedido?.cor,

});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(InputCor);
