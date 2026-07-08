import { connect } from 'react-redux';

import SendButton from './cancelButton';

import operations from '../../../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: cobrancas.concessionarias.details.statusRequest.isUpdate,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(operations.setIsDisabled(true)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SendButton);
