import { connect } from 'react-redux';

import InputTitulo from './inputTitulo';

import operations from '../../../../redux/operations';

const mapStateToProps = ({ comunicados }) => ({
  titulo: comunicados.alertas.modal.alerta.titulo,
});

const mapDispatchToProps = (dispatch) => ({
  setTitulo: (titulo) => dispatch(operations.setTitulo(titulo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(InputTitulo);
