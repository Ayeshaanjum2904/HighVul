import { connect } from 'react-redux';

import InputValorNF from './inputValorNF';

const mapStateToProps = ({ pedidos }) => ({
  valorNF: pedidos.details.modal.detalhePedido?.valorNf,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(InputValorNF);
