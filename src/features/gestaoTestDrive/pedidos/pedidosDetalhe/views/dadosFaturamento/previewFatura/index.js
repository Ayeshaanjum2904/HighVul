import { connect } from 'react-redux';
import PreviewFatura from './previewFatura';

import selectors from '../../../redux/selectors';
import operations from '../../../redux/operations';

const mapStateToProps = ({ pedidos }) => ({
  disabled: selectors.isPreviewDisabled(pedidos),
  urlFatura: pedidos.details.modal.detalhePedido?.urlFatura,
  currentStatus: pedidos.details.modal.detalhePedido?.status,
});

const mapDispatchToProps = (dispatch) => ({
  onDownload: () => dispatch(operations.getDownloadFaturaPedido()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviewFatura);
