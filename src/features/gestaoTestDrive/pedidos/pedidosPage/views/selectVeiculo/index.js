import { connect } from 'react-redux';

import operations from '../../redux/operations';
import SelectVeiculo from './selectVeiculo';

const mapStateToProps = ({ pedidos }) => ({
  veiculo: pedidos.page.filters.veiculo,
  isLoading: pedidos?.page?.pedidosList?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setVeiculo: (veiculo) => dispatch(operations.setVeiculo(veiculo)),
  setIsFirstPageLoad: (value) => dispatch(operations.setIsFirstPageLoad(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectVeiculo);
