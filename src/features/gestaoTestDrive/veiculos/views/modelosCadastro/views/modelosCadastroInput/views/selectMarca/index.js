import { connect } from 'react-redux';

import operations from '../../../../redux/operations';

import SelectMarca from './selectMarcaModelosCadastro';

const mapStateToProps = ({ veiculos }) => ({
  marca: veiculos.cadastroModelo.modelo.marca,
  brands: veiculos.cadastroVeiculo.marcas,
});

const mapDispatchToProps = (dispatch) => ({
  updateModeloProperty: (propertyName, value) => {
    dispatch(operations.updateModeloProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectMarca);
