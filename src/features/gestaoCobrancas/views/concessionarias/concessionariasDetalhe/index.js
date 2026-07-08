import { connect } from 'react-redux';

import selector from './redux/selectors';
import operations from './redux/operations';
import ConcessionariasDetalhe from './concessionariasDetalhe';

const mapStateToProps = ({ cobrancas }) => ({
  nomeConcessionaria: selector.concessionariaNome(cobrancas),
  snackbarErrors: cobrancas.concessionarias.details.snackBar,
});

const mapDispatchToProps = (dispatch) => ({
  getConcessionaria: () => dispatch(operations.getConcessionaria()),
  onCloseSnackBar: (id) => dispatch(operations.resetSnackBar(id)),
  resetStore: () => dispatch(operations.resetStore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConcessionariasDetalhe);
