import { connect } from 'react-redux';
import operations from 'features/gestaoLimites/aprovacoes/limitesAprovadosPage/redux/operations';
import ButtonBack from './buttonBack';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  cadastroPage: (cadastroPage) => {
    dispatch(operations.setCadastroPage(cadastroPage));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonBack);
