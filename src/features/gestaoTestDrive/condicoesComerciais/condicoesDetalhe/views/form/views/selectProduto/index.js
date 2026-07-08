import { connect } from 'react-redux';

import Operations from '../../../../redux/operations';

import SelectProduto from './selectProdutoCondicoesDetalhe';

const mapStateToProps = ({ condicoesComerciais }) => ({
  produto: condicoesComerciais.details.condicao?.produto,
  produtos: condicoesComerciais.details.formInputs.produtoInputs,
  isLoading: condicoesComerciais.details.formInputs.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setProduto: (produto) => dispatch(Operations.setProduto(produto === 'all' ? null : produto)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectProduto);
