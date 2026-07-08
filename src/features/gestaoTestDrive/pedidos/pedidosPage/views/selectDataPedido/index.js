import { connect } from 'react-redux';

import operations from '../../redux/operations';

import SelectDataPedido from './selectDataPedido';

const mapStateToProps = ({ pedidos }) => ({
  dataInicioPedido: pedidos.page.filters.dataInicioPedido,
  dataFimPedido: pedidos.page.filters.dataFimPedido,
  isLoading: pedidos.page.pedidosList.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setDataInicioPedido: (dataInicioPedido) => {
    dispatch(operations.setDataInicioPedido(dataInicioPedido));
    dispatch(operations.setIsFirstPageLoad(false));
  },
  setDataFimPedido: (dataFimPedido) => {
    dispatch(operations.setDataFimPedido(dataFimPedido));
    dispatch(operations.setIsFirstPageLoad(false));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectDataPedido);
