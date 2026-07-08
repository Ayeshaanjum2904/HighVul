import { connect } from 'react-redux';

import EditButton from './editButton';

import operations from '../../../../../redux/operations';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(operations.setIsDisabled(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditButton);
