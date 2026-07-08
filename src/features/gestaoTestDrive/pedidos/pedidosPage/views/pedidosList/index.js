/* eslint-disable object-property-newline */
import { connect } from 'react-redux';
import PedidosList from './pedidosList';

const mapStateToProps = ({ pedidos }) => ({
  isLoading: pedidos.page.pedidosList.isLoading,
  isError: pedidos.page.pedidosList.isError,
  pedidos: pedidos.page.pedidosList.pedidos,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PedidosList);
