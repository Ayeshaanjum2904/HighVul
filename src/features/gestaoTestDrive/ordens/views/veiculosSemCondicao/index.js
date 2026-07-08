import { connect } from 'react-redux';
import VeiculosSemCondicao from './veiculosSemCondicao';
import operations from '../../redux/operations';
import selectors from '../../redux/selectors';

const mapStateToProps = (state, ownProps) => {
  if (ownProps.isCondicaoComercial) {
    return {
      veiculosSemCondicao: selectors.getVeiculosSemCondicaoComercial(state.ordens),
      isLoadingVeiculosSemCondicao: selectors.isVeiculosSemCondicaoComercialLoading(state.ordens),
      isListaVeiculosVisible: selectors.isListaVeiculosComercialVisible(state.ordens),
    };
  }
  return {
    veiculosSemCondicao: selectors.getVeiculosSemCondicaoAVista(state.ordens),
    isLoadingVeiculosSemCondicao: selectors.isVeiculosSemCondicaoAVistaLoading(state.ordens),
    isListaVeiculosVisible: selectors.isListaVeiculosAVistaVisible(state.ordens),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.isCondicaoComercial) {
    return {
      onLoadVeiculosSemCondicao: (ordemId) => dispatch(
        operations.getVeiculosSemCondicaoComercial(ordemId),
      ),
      onToggleVeiculosVisibility: () => dispatch(
        operations.toggleVeiculosSemCondicaoComercialVisibility(),
      ),
    };
  }
  return {
    onLoadVeiculosSemCondicao: (ordemId) => dispatch(
      operations.getVeiculosSemCondicaoAVista(ordemId),
    ),
    onToggleVeiculosVisibility: () => dispatch(
      operations.toggleVeiculosSemCondicaoAVistaVisibility(),
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VeiculosSemCondicao);
