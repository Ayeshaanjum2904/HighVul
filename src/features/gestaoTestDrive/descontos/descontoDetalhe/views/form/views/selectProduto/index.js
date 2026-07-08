import { connect } from 'react-redux';

import Operations from '../../../../redux/operations';

import SelectProduto from './selectProdutoDescontoDetalhe';

const mapStateToProps = ({ descontos }) => ({
  produto: descontos.details.desconto?.produto,
  produtos: descontos.details.formInputs.produtoInputs,
  isLoading: descontos.details.formInputs.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setProduto: (produto) => dispatch(Operations.setProduto(produto === 'all' ? null : produto)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectProduto);
