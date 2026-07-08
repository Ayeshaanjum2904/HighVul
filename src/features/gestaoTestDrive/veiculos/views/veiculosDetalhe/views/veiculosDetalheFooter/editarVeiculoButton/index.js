import { connect } from 'react-redux';

import EditarVeiculoButton from './editarVeiculoButton';

import CadastroVeiculoOperations from '../../../../veiculosCadastro/redux/operations';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  editVeiculo: () => dispatch(CadastroVeiculoOperations.editVeiculo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditarVeiculoButton);
