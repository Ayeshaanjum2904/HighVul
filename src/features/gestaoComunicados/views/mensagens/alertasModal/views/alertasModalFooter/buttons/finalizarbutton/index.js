import { connect } from 'react-redux';

import FinalizarButton from './finalizarButton';

import operations from '../../../../redux/operations';

const mapStateToProps = ({ comunicados }) => ({
  isLoading: comunicados.alertas.modal.sendAlerta.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  sendAlerta: () => dispatch(operations.sendAlerta()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FinalizarButton);
