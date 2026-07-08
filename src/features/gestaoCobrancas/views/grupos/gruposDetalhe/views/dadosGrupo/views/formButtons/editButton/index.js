import { connect } from 'react-redux';

import EditButton from './editButton';

import operations from '../../../../../redux/operations/operations';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  setIsEditing: (value) => dispatch(operations.setIsEditing(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditButton);
