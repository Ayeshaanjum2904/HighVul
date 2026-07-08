import { connect } from 'react-redux';

import operations from '../../../../redux/operations';
import selectors from '../../../../redux/selectors';

import Button from './salvarAlteracoesVeiculoButton';

const mapStateToProps = ({ pedidos }) => ({
  isLoading: pedidos.details.modal.isLoading,
  isFormValido: selectors.isDetalhesVeiculoValido(pedidos),
  isDirty: pedidos.details.modal.isDirty,
});

const mapDispatchToProps = (dispatch) => ({
  saveDetalhesVeiculo: () => { dispatch(operations.saveDetalhesVeiculo()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
