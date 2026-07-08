import { connect } from 'react-redux';
import selectors from 'features/gestaoTestDrive/ordens/redux/selectors';
import operations from 'features/gestaoTestDrive/ordens/redux/operations';
import SelectProduto from './selectProduto';

const mapStateToProps = ({ ordens }) => ({
  listProdutos: selectors.produtoList(ordens).map((produto) => ({
    value: produto.value,
    label: produto.text,
  })),
});

const mapDispatchToProps = (dispatch) => ({
  getProdutosList: () => dispatch(operations.getProdutosList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectProduto);
