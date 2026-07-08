import { connect } from 'react-redux';
import UploadFatura from './uploadFatura';

import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';

const mapStateToProps = ({ pedidos }) => ({
  disabled: selectors.isUploadDisabled(pedidos),
  isLoading: pedidos.details.uploadFaturaPedido.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  uploadFaturaPedido: (file) => {
    (dispatch(operations.uploadFaturaPedido(file)));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadFatura);
