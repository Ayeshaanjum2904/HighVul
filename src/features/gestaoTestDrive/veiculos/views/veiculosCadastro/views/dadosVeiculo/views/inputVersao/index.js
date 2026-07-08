import { connect } from 'react-redux';

import operations from '../../../../redux/operations';

import InputVersao from './inputVersao';

const mapStateToProps = ({ veiculos }) => ({
  descricaoVersao: veiculos.cadastroVeiculo.veiculo.descricaoVersao,
});

const mapDispatchToProps = (dispatch) => ({
  updateVeiculoProperty: (propertyName, value) => {
    dispatch(operations.updateVeiculoProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputVersao);
