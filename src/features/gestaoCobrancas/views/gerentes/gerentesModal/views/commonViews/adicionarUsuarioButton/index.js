import { connect } from 'react-redux';

import AdicionarUsuarioButton from './adicionarUsuarioButton';
import selectors from '../../../redux/selectors';
import operations from '../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: cobrancas.gerentes.modal.insertGerente.isLoading,
  disabled: selectors.disableButton(cobrancas),
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(operations.insertGerente()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdicionarUsuarioButton);
