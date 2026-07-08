import { connect } from 'react-redux';

import SelectModelo from './selectModelo';

import selectors from '../../../../redux/selectors';
import operations from '../../../../redux/operations';

const mapStateToProps = ({ veiculos }) => ({
  modelos: selectors.mapModelos(veiculos),
  codigoModelo: veiculos.cadastroVeiculo.veiculo.codigoModelo,
  id: veiculos.cadastroVeiculo.veiculo.id,
});

const mapDispatchToProps = (dispatch) => ({
  setModelo: (idModelo) => dispatch(operations.setModelo(idModelo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectModelo);
