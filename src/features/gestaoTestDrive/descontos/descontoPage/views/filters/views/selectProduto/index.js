import { connect } from 'react-redux';

import Operations from '../../../../redux/operations';
import Selector from '../../../../redux/selector';

import SelectProduto from './selectProdutoFilters';

const mapStateToProps = ({ descontos }) => ({
  produto: descontos.page.filters?.produto,
  produtos: Selector.produtosList(descontos),
  isLoading: descontos?.page?.list?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setProduto: (produto) => dispatch(Operations.setFilter('produto', produto === 0 ? null : produto)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectProduto);
