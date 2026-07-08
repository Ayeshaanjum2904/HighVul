import { connect } from 'react-redux';
import DadosAprovacao from './dadosAprovacao';
import operations from '../limitesAprovadosPage/redux/operations';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  setCondicao: (idVersao, condicao) => dispatch(operations.setCondicao(idVersao, condicao)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DadosAprovacao);
