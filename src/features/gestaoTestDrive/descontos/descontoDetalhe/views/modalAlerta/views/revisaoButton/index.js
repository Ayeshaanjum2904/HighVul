import { connect } from 'react-redux';

import RevisaoButton from './revisaoButton';

import operations from '../../../../redux/operations';

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(operations.setModalErrorClose()),
});

export default connect(null, mapDispatchToProps)(RevisaoButton);
