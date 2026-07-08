import { connect } from 'react-redux';

import VoltarButton from './voltarButton';

import operations from '../../../../redux/operations';

const mapStateToProps = ({ comunicados }) => ({
  isLoading: comunicados.alertas.modal.sendAlerta.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setModalStatus: (status) => dispatch(operations.setModalStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VoltarButton);
