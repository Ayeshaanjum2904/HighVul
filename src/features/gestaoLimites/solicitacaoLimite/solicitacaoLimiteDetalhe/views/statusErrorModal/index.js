import { connect } from 'react-redux';

import actions from '../../redux/actions';

import StatusErrorModal from './statusErrorModal';

const mapStateToProps = ({ limites }) => ({
  errors: limites.details.updateStatus.errors,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(actions.closeStatusErrorModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatusErrorModal);
