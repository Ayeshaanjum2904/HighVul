import { connect } from 'react-redux';
import operations from '../../../redux/operations';
import SearchFilter from './searchFilter';

const mapStateToProps = ({ comunicados }) => ({
  texto: comunicados.alertas.page.filters.titulo,
});

const mapDispatchToProps = (dispatch) => ({
  setTexto: (texto) => {
    dispatch(operations.setTitulo(texto));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);
