import { connect } from 'react-redux';

import operations from '../../../redux/reduxPedidosArea/operations';

import SelectProduto from './selectProdutoPedidosArea';

const mapStateToProps = ({ dashboard }) => ({
  produto: dashboard.principal.pedidosArea.selectedProduct,
});

const mapDispatchToProps = (dispatch) => ({
  setProduto: (produto) => dispatch(operations.setProduto(produto)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectProduto);
