/* eslint-disable object-property-newline */
import { connect } from 'react-redux';

import ContatosPageList from './contatosPageList';
import operations from '../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: cobrancas.contatos.page.list.isLoading,
  isError: cobrancas.contatos.page.list.isError,
  contatos: cobrancas.contatos.page.list.contatos,
});

const mapDispatchToProps = (dispatch) => ({
  setContatoId: (id) => dispatch(operations.setContatoId(id)),
  deleteContato: () => { dispatch(operations.deleteContato()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContatosPageList);
