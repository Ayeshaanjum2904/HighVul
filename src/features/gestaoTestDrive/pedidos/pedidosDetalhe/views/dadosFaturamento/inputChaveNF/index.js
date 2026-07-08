import { connect } from 'react-redux';

import InputChaveNF from './inputChaveNF';

const mapStateToProps = ({ pedidos }) => ({
  chaveNF: pedidos.details.modal.detalhePedido?.chaveNf,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(InputChaveNF);
