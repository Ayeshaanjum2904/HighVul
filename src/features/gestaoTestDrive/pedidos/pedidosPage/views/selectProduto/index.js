import { connect } from 'react-redux';

import operations from '../../redux/operations';

import SelectProduto from './selectProdutoSelectProdutoPedidosPage';

const mapStateToProps = ({ pedidos }) => ({
  produto: pedidos.page.filters.produto,
  produtos: pedidos.page.filters.produtos,
  isLoading: pedidos?.page?.pedidosList?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setProduto: (produto) => dispatch(operations.setProduto(produto)),
  setIsFirstPageLoad: (value) => dispatch(operations.setIsFirstPageLoad(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectProduto);
