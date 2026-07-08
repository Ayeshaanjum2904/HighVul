import { connect } from 'react-redux';

import FinalizarButton from './finalizarButton';

import operations from '../../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: cobrancas.emails.modal.updateStatus.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  sendTemplate: () => dispatch(operations.updateTemplate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FinalizarButton);
