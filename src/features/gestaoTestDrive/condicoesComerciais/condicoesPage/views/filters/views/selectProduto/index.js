import { connect } from 'react-redux';

import Operations from '../../../../redux/operations';
import Selector from '../../../../redux/selectors';

import SelectProduto from './selectProdutoCondicoesPage';

const mapStateToProps = ({ condicoesComerciais }) => ({
  produto: condicoesComerciais.page.filters?.produto,
  produtos: Selector.produtosList(condicoesComerciais),
  isLoading: condicoesComerciais?.page?.list?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setProduto: (produto) => dispatch(Operations.setFilter('produto', produto === 'all' ? null : produto)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectProduto);
