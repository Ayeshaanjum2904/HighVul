import { connect } from 'react-redux';

import ConfirmacaoDeleteModelo from './confirmacaoDeleteModelo';

import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';

const mapStateToProps = ({ veiculos }) => ({
  isLoading: veiculos.cadastroModelo.deleteModelo.isLoading,
  disabled: selectors.isCloseDisabled(veiculos),
});

const mapDispatchToProps = (dispatch) => ({
  deleteModelo: () => dispatch(operations.deleteModelo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmacaoDeleteModelo);
