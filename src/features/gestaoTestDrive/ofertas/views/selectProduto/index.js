import { connect } from 'react-redux';

import * as operations from '../../redux/operations';

import SelectProduto from './selectProdutoOfertas';

const mapStateToProps = ({ ofertas }) => ({
  produto: ofertas.search.produto,
  produtos: ofertas.search?.produtos,
  isLoading: ofertas?.ofertas?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setProduto: (produto) => dispatch(operations.setProduto(produto)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectProduto);
