import { connect } from 'react-redux';

import BotaoPublicar from './botaoPublicar';
import operations from '../../../../redux/operations';

const mapStateToProps = ({ comunicados }) => ({
  isLoading: comunicados.comunicados.modal.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(operations.insertFile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BotaoPublicar);
