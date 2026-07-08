import { connect } from 'react-redux';

import operations from '../../redux/operations';

import SelectDataFaturamento from './selectDataFaturamento';

const mapStateToProps = ({ pedidos }) => ({
  dataFaturamento: pedidos.page.filters.dataFaturamento,
  isLoading: pedidos?.page?.pedidosList?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setDataFaturamento: (dataFaturamento) => {
    dispatch(operations.setDataFaturamento(dataFaturamento));
    dispatch(operations.setIsFirstPageLoad(false));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectDataFaturamento);
