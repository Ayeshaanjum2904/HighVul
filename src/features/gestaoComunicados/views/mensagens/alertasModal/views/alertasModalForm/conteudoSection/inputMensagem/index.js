import { connect } from 'react-redux';

import InputTitulo from './inputMensagem';

import operations from '../../../../redux/operations';

const mapStateToProps = ({ comunicados }) => ({
  mensagem: comunicados.alertas.modal.alerta.mensagem,
});

const mapDispatchToProps = (dispatch) => ({
  setMensagem: (mensagem) => dispatch(operations.setMensagem(mensagem)),
});
export default connect(mapStateToProps, mapDispatchToProps)(InputTitulo);
