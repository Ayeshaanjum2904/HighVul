import { connect } from 'react-redux';

import VoltarButton from './voltarButton';

import operations from '../../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: cobrancas.emails.modal.updateStatus.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setModalStatus: (status) => dispatch(operations.setModalTemplate(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VoltarButton);
