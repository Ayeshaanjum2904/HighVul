import { connect } from 'react-redux';

import TimelinePedidos from './timelinePedidos';

import selectors from '../../redux/selectors';

const mapStateToProps = ({ pedidos }) => ({
  gruposPedidos: selectors.gruposPedidos(pedidos),
  isLoading: pedidos.details.modal.isLoading,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TimelinePedidos);
