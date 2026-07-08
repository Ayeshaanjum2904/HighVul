import { connect } from 'react-redux';

import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';
import SelectMarca from './selectMarcaGerentes';

const mapStateToProps = ({ cobrancas }) => ({
  marca: cobrancas.gerentes.modal.gerente.marca,
  marcasList: selectors.marcasList(cobrancas),
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedMarca: (value) => {
    dispatch(operations.setSelectedMarca(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectMarca);
