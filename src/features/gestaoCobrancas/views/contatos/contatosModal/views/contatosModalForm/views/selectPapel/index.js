import { connect } from 'react-redux';

import SelectPapel from './selectPapel';

import operations from '../../../../redux/operations/operations';
import selectors from '../../../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  papel: cobrancas.contatos.modal.contato.papel,
  papeis: selectors.selectPapeis(cobrancas),
  errors: cobrancas.contatos.modal.sendContato.errors,
});

const mapDispatchToProps = (dispatch) => ({
  setPapel: (papel) => dispatch(operations.setPapel(papel)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectPapel);
