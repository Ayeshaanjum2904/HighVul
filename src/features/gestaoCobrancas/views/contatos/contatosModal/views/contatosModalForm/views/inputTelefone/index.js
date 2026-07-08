import { connect } from 'react-redux';

import InputTelefone from './inputTelefone';

import operations from '../../../../redux/operations/operations';

const mapStateToProps = ({ cobrancas }) => ({
  telefone: cobrancas.contatos.modal.contatoInfo.telefone,
  telefoneList: cobrancas.contatos.modal.contato.telefoneList,
  isLoading: cobrancas.contatos.modal.validateTelefone.isLoading,
  errors: cobrancas.contatos.modal.sendContato.errors,
});

const mapDispatchToProps = (dispatch) => ({
  setTelefone: (telefone) => dispatch(operations.setTelefone(telefone)),
  validateTelefone: (telefone, index) => dispatch(operations.validateTelefone(telefone, index)),
  deleteTelefone: (telefone) => dispatch(operations.deleteTelefone(telefone)),
});
export default connect(mapStateToProps, mapDispatchToProps)(InputTelefone);
