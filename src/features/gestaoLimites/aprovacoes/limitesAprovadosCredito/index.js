import { connect } from 'react-redux';
import LimitesAprovadosCredito from './limitesAprovadosCredito';
import operations from './redux/operations';
import operationsCadastro from '../limitesAprovadosCadastro/redux/operations';

const mapStateToProps = ({ limitesAprovados, auth }) => ({
  detalhes: limitesAprovados.limiteDetails.detalhes,
  historico: limitesAprovados.limiteDetails.historico,
  user: auth.user,
  condicaoSisgar: limitesAprovados?.limitesAprovadosSisgar?.condicaoSisgar?.condicao,
});

const mapDispatchToProps = (dispatch) => ({
  resetStore: () => dispatch(operations.resetStore()),
  enviarProposta: (id, status, motivo) => dispatch(
    operationsCadastro.updateAndSaveStatus(id, status, motivo),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(LimitesAprovadosCredito);
