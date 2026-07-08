/* eslint-disable object-property-newline */
import { connect } from 'react-redux';

import ContatosList from './contatosList';
import selectors from '../../../redux/selectors';
import operations from '../../../redux/operations/operations';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: selectors.isLoading.contatos(cobrancas),
  isError: selectors.isError.contatos(cobrancas),
  contatos: cobrancas.grupos.details.contatos,
});

const mapDispatchToProps = (dispatch) => ({
  setContatoId: (id) => dispatch(operations.setContatoId(id)),
  deleteContato: () => dispatch(operations.deleteContato()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContatosList);
