import { connect } from 'react-redux';

import actions from '../../redux/actions';

import StatusErrorModal from './statusErrorModal';

const mapStateToProps = ({ pedidos }) => ({
  errors: pedidos.details.updateStatusPedido.errors,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(actions.closeStatusErrorModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatusErrorModal);
