import { connect } from 'react-redux';

import InputEmail from './inputEmail';

import operations from '../../../../redux/operations/operations';

const mapStateToProps = ({ cobrancas }) => ({
  email: cobrancas.contatos.modal.contatoInfo.email,
  emailList: cobrancas.contatos.modal.contato.emailList,
  isLoading: cobrancas.contatos.modal.validateEmail.isLoading,
  errors: cobrancas.contatos.modal.sendContato.errors,
});

const mapDispatchToProps = (dispatch) => ({
  setEmail: (email) => dispatch(operations.setEmail(email)),
  validateEmail: (email, index) => dispatch(operations.validateEmail(email, index)),
  deleteEmail: (email) => dispatch(operations.deleteEmail(email)),
});
export default connect(mapStateToProps, mapDispatchToProps)(InputEmail);
