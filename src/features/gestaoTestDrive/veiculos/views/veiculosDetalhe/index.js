import { connect } from 'react-redux';

import VeiculosDetalhe from './veiculosDetalhe';

import operations from './redux/operations';

const mapStateToProps = ({ veiculos }) => ({
  isLoading: veiculos.details.modal.isLoading,
  isError: veiculos.details.modal.isError,
  detalheVeiculo: veiculos.details.modal.detalheVeiculo,
});

const mapDispatchToProps = (dispatch) => ({
  resetStore: dispatch(operations.resetStore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VeiculosDetalhe);
