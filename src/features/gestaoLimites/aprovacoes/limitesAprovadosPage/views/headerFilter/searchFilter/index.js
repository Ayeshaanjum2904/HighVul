import { connect } from 'react-redux';
import operations from '../../../redux/operations';

import SearchFilter from './searchFilter';

const mapStateToProps = ({ limitesAprovados }) => ({
  texto: limitesAprovados.filters.idLimite,
});

const mapDispatchToProps = (dispatch) => ({
  setTexto: (texto) => {
    dispatch(operations.setIdLimite(texto));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);
