import { connect } from 'react-redux';

import operations from '../../redux/operations';
import selectors from '../../redux/selectors';

import SelectRegiao from './selectRegiaoPedidosPage';

const mapStateToProps = ({ pedidos }) => ({
  regiao: pedidos.page.filters.regiao,
  regioesList: selectors.regioesList(pedidos),
  isLoading: pedidos?.page?.pedidosList?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setRegiao: (regiao) => dispatch(operations.setRegiao(regiao)),
  setIsFirstPageLoad: (value) => dispatch(operations.setIsFirstPageLoad(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectRegiao);
