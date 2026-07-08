import { connect } from 'react-redux';
import UploadContrato from './uploadContrato';

import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';

const mapStateToProps = ({ pedidos }) => ({
  isLoading: pedidos.details.uploadContrato.isLoading,
  disabled: selectors.isUploadContratoDisabled(pedidos),
});

const mapDispatchToProps = (dispatch) => ({
  uploadContrato: (file) => {
    (dispatch(operations.uploadContrato(file)));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadContrato);
