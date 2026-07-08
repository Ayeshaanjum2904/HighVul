import { connect } from 'react-redux';

import CadastroModeloButton from './cadastroModeloButton';

import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';

const mapStateToProps = ({ veiculos }) => ({
  disabled: selectors.isButtonDisabled(veiculos),
  isLoading: veiculos.cadastroModelo.sendModelo.isLoading,
  title: selectors.buttonTitle(veiculos),
});

const mapDispatchToProps = (dispatch) => ({
  sendModelo: () => dispatch(operations.sendModelo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CadastroModeloButton);
