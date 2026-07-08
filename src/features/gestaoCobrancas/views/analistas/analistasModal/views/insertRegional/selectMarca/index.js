import { connect } from 'react-redux';

import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';
import SelectMarca from './selectMarcaAnalistasModal';

const mapStateToProps = ({ cobrancas }) => ({
  marca: cobrancas.analistas.modal.analista.marca,
  marcasList: selectors.marcasList(cobrancas),
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedMarca: (value) => {
    dispatch(operations.setSelectedMarca(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectMarca);
