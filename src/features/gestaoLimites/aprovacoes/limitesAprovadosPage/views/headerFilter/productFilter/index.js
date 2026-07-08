import { connect } from 'react-redux';

import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';
import ProductFilter from './productFilter';

const mapStateToProps = ({ limitesAprovados }) => ({
  produto: limitesAprovados.filters.produto,
  produtos: selectors.produtoList(limitesAprovados),
  isLoading: limitesAprovados.limitesAprovadosList.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setProduto: (produto) => dispatch(operations.setProduto(produto)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilter);
