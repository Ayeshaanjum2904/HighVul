import { connect } from 'react-redux';
import ModalVincularCondicao from './modalVincularCondicao';
import operations from '../../redux/operations';
import selectors from '../../redux/selectors';

const mapStateToProps = (state) => ({
  open: selectors.isModalVincularCondicaoOpen(state.ordens),
  selectedOrdem: selectors.getSelectedOrdemVincular(state.ordens),
  condicoes: selectors.getCondicoes(state.ordens),
  isLoading: selectors.isCondicoesLoading(state.ordens),
  isError: selectors.isCondicoesError(state.ordens),
  loadingCondicoes: selectors.getLoadingCondicoes(state.ordens),
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(operations.setOpenModalVincularCondicao(false)),
  onVincular: (ordemId, condicaoId, associar, fetchData) => dispatch(
    operations.vincularCondicaoComercial(ordemId, condicaoId, associar, fetchData),
  ),
  onLoadCondicoes: (ordemId) => dispatch(
    operations.getCondicoesComerciais(ordemId),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalVincularCondicao);
