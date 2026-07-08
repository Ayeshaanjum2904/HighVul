import { connect } from 'react-redux';

import operations from '../../../../redux/operations';

import SelectMarca from './selectMarcaVeiculosCadastro';

const mapStateToProps = ({ veiculos }) => ({
  marca: veiculos.cadastroVeiculo.veiculo.marca,
  id: veiculos.cadastroVeiculo.veiculo.id,
  brands: veiculos.cadastroVeiculo.marcas,
});

const mapDispatchToProps = (dispatch) => ({
  updateVeiculoProperty: (propertyName, value) => {
    dispatch(operations.updateVeiculoProperty(propertyName, value));
  },
  getUrlVeiculosList: () => dispatch(operations.getUrlVeiculosList()),
  getModelos: () => dispatch(operations.getModelos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectMarca);
