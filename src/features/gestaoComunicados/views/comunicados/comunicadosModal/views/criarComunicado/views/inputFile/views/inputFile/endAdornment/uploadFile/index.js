import { connect } from 'react-redux';
import UploadFatura from './uploadFile';

import operations from '../../../../../../../../redux/operations';
import selectors from '../../../../../../../../redux/selectors';

const mapStateToProps = ({ comunicados }) => ({
  isLoading: comunicados.comunicados.modal.isLoading,
  isDisabled: selectors.isDisabledFile(comunicados),
});

const mapDispatchToProps = (dispatch) => ({
  uploadFile: (file) => {
    (dispatch(operations.uploadFile(file)));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadFatura);
