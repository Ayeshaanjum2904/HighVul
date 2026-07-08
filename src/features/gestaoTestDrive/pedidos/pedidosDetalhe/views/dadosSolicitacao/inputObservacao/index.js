import { connect } from 'react-redux';

import InputObservacao from './inputObservacao';

const mapStateToProps = ({ pedidos }) => ({
  observacao: pedidos.details.modal.detalhePedido?.observacao,

});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(InputObservacao);
