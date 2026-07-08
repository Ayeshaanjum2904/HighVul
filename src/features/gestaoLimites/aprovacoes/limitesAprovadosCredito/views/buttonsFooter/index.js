import { connect } from 'react-redux';
import ButtonsFooterCredito from './buttonsFooter';
import operations from '../../redux/operations';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  enviarProposta: (idLimite, status, actions) => {
    dispatch(operations.enviarProposta(idLimite, status, actions));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsFooterCredito);
