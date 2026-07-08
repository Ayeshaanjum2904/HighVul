import { connect } from 'react-redux';
import AlterarEtapaModal from './alterarEtapaModal';
import detalhesOperations from '../../redux/operations';

const mapStateToProps = ({ pedidos }) => ({
  openModalAlterar: pedidos.details.modalAlterar.open,
  etapaIsError: pedidos.details.regressaoStatus.isError,
  etapaDesejada: pedidos.details.modalAlterar.etapaDesejada,
});
const mapDispatchToProps = (dispatch) => ({
  setOpenModalAlterar: (open) => { dispatch(detalhesOperations.openModalAlterar(open)); },
  submitAlterarEtapa: (etapa) => { dispatch(detalhesOperations.alterarEtapa(etapa)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(AlterarEtapaModal);
