import { connect } from 'react-redux';

import ModalVincularCondicaoAVista from './modalVincularCondicaoAVista';
import operations from '../../redux/operations';
import selectors from '../../redux/selectors';

const mapStateToProps = (state) => ({
  open: selectors.isModalVincularCondicaoAVistaOpen(state.ordens),
  selectedOrdem: selectors.getSelectedOrdemVincularAVista(state.ordens),
  condicoes: selectors.getCondicoesAVista(state.ordens),
  isLoading: selectors.isCondicoesAVistaLoading(state.ordens),
  isError: selectors.isCondicoesAVistaError(state.ordens),
  loadingCondicoes: selectors.getLoadingCondicoesAVista(state.ordens),
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(operations.setOpenModalVincularCondicaoAVista(false)),
  onVincular: (ordemId, descontoId, associar, fetchData) => dispatch(
    operations.vincularCondicaoAVista(ordemId, descontoId, associar, fetchData),
  ),
  onLoadCondicoes: (ordemId) => dispatch(
    operations.getCondicoesAVista(ordemId),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalVincularCondicaoAVista);
