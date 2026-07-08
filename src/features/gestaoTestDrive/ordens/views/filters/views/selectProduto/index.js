import { connect } from 'react-redux';
import operations from '../../../../redux/operations';
import selectors from '../../../../redux/selectors';
import SelectProduto from './selectProduto';

const mapStateToProps = ({ ordens }) => ({
  produto: ordens.filters.produto,
  produtosList: selectors.produtoList(ordens),
});

const mapDispatchToProps = (dispatch) => ({
  setProduto: (produtos) => dispatch(operations.setProduto(produtos)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectProduto);
