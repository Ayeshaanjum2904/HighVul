import { connect } from 'react-redux';

import SendButton from './sendButton';

import operations from '../../../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: cobrancas.concessionarias.details.statusRequest.isUpdate,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(operations.updateConcessionaria()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SendButton);
