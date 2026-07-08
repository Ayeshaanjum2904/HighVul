import { connect } from 'react-redux';

import InputNome from './inputNome';

import operations from '../../../../redux/operations/operations';

const mapStateToProps = ({ cobrancas }) => ({
  id: cobrancas.contatos.modal.contato.id,
  nome: cobrancas.contatos.modal.contato.nome,
  errors: cobrancas.contatos.modal.sendContato.errors,
});

const mapDispatchToProps = (dispatch) => ({
  updateContatoProperty: (propertyName, value) => {
    dispatch(operations.updateContatoProperty(propertyName, value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(InputNome);
