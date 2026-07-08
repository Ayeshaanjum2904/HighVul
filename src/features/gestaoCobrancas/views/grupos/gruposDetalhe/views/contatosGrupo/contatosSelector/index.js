import { connect } from 'react-redux';

import ContatosSelector from './contatosSelector';

import operations from '../../../redux/operations/operations';
import selectors from '../../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  contatos: selectors.formatContatos(cobrancas),
  associacoes: cobrancas.grupos.details.updateContato.associacoes,
});

const mapDispatchToProps = (dispatch) => ({
  associarContato: (contato) => dispatch(operations.associarContato(contato)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContatosSelector);
