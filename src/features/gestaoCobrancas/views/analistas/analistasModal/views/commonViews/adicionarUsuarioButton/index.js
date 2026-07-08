import { connect } from 'react-redux';

import AdicionarUsuarioButton from './adicionarUsuarioButton';
import selectors from '../../../redux/selectors';
import operations from '../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: cobrancas.analistas.modal.insertAnalista.isLoading,
  disabled: selectors.disableButton(cobrancas),
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(operations.insertAnalista()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdicionarUsuarioButton);
