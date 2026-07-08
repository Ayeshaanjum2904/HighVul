import { connect } from 'react-redux';
import DownloadButton from './downloadButton';
import operations from '../../../../../redux/reduxPedidosConcessionaria/operations';

const mapStateToProps = ({ dashboard }) => ({
  tipo: dashboard.principal.pedidosConcessionaria.tipo,
  orderBy: dashboard.principal.pedidosConcessionaria.orderBy,
  isLoading: dashboard.principal.pedidosConcessionaria.downloadStatus.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getPedidosXlsx: (tipo, orderBy) => dispatch(operations.getPedidosXlsx(tipo, orderBy)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DownloadButton);
