import { connect } from 'react-redux';
import operations from '../../../../redux/operations';
import SelectUsuario from './selectUsuario';

const mapStateToProps = ({ ordens }) => ({
  usuario: ordens.filters.usuario,
});

const mapDispatchToProps = (dispatch) => ({
  setUsuario: (value) => {
    const usuarioBool = (value && typeof value === 'object' && 'value' in value)
      ? value.value
      : value;
    dispatch(operations.setUsuario(usuarioBool));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectUsuario);
