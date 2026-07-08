import { connect } from 'react-redux';
import operations from '../../redux/operations';
import Form from './form';
import selector from '../../redux/selector';

const mapStateToProps = ({ condicoesComerciais }) => ({
  marca: condicoesComerciais.details.condicao?.brand,
  produto: condicoesComerciais.details.condicao?.produto,
  dataInicio: selector.dataInicio(condicoesComerciais),
  dataFim: selector.dataFim(condicoesComerciais),
  cartaMes: condicoesComerciais.details.condicao?.cartaMes,
});

const mapDispatchToProps = (dispatch) => ({
  clearFilters: () => dispatch(operations.clearFilters()),
  setMarca: (marca) => dispatch(operations.setMarca(marca === 'all' ? null : marca)),
  getBrandInputs: () => dispatch(operations.getBrandInputs()),
  getProdutoInputs: () => dispatch(operations.getProdutoInputs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
