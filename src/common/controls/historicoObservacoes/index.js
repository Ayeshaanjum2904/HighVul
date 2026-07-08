import { connect } from 'react-redux';
import { SnackbarOperations } from 'modules/snackbar';
import HistoricoObservacoes from './historicoObservacoes';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  addSnackbar: (message, type, delay) => dispatch(
    SnackbarOperations.addSnackbar(message, type, delay),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoricoObservacoes);
