import { connect } from 'react-redux';

import SendButton from './sendButton';

import operations from '../../redux/operations';
import selectors from '../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: cobrancas.grupos.modal.insertGrupo.isLoading,
  disabled: selectors.isButtonEnabled(cobrancas),
});

const mapDispatchToProps = (dispatch) => ({
  insertGrupo: () => dispatch(operations.insertGrupo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SendButton);
