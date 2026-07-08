import { connect } from 'react-redux';

import GruposDetalhe from './gruposDetalhe';

import operations from './redux/operations/operations';

const mapStateToProps = ({ cobrancas }) => ({
  nomeConta: cobrancas.grupos.details.grupo?.nomeConta,
  snackbarErrors: cobrancas.grupos.details.snackbarErrors,
});

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(operations.loadData()),
  resetStore: () => dispatch(operations.resetStore()),
  onSnackbarClose: (id) => dispatch(operations.dismissSnackbar(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GruposDetalhe);
