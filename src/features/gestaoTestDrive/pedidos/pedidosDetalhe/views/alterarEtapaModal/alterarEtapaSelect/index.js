import { connect } from 'react-redux';
import AlterarEtapaSelect from './alterarEtapaSelect';
import detalhesOperations from '../../../redux/operations';

const mapStateToProps = ({ pedidos }) => ({
  etapas: pedidos.details.regressaoStatus.data,
  option: pedidos.details.modalAlterar.etapaDesejada,
  etapaIsLoading: pedidos.details.regressaoStatus.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
  setOption: (etapa) => { dispatch(detalhesOperations.setEtapaDesejada(etapa)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(AlterarEtapaSelect);
