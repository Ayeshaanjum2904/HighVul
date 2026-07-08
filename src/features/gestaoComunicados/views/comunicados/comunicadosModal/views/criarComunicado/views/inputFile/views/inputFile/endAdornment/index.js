import { connect } from 'react-redux';
import EndAdornment from './endAdornment';

import operations from '../../../../../../../redux/operations';

const mapStateToProps = ({ comunicados }) => ({
  urlFile: comunicados.comunicados.modal?.urlFile,
});

const mapDispatchToProps = (dispatch) => ({
  deleteFile: () => dispatch(operations.deleteFile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EndAdornment);
