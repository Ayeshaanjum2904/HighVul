import { connect } from 'react-redux';

import ConcluirButton from './concluirButton';
import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  disabled: selectors.disableCloseButton(cobrancas),
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(operations.closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConcluirButton);
