import { connect } from 'react-redux';

import DadosDoPedido from './dadosDoPedido';

const mapStateToProps = ({ pedidos }) => ({
  camposEditaveis: pedidos.details.modal.detalhePedido?.camposEditaveis,
  pedidoComercial: pedidos.details.modal.detalhePedido?.pedidoComercial,
  pedidoIndustrial: pedidos.details.modal.detalhePedido?.pedidoIndustrial,
  chassi: pedidos.details.modal.detalhePedido?.chassi,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DadosDoPedido);
