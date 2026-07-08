import { connect } from 'react-redux';

import DadosPedidoIndustrial from './dadosPedidoIndustrial';

const mapStateToProps = ({ pedidos }) => ({
  camposEditaveis: pedidos.details.modal.detalhePedido?.camposEditaveis,
  pedidoIndustrial: pedidos.details.modal.detalhePedido?.pedidoIndustrial,
  chassi: pedidos.details.modal.detalhePedido?.chassi,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DadosPedidoIndustrial);
