import { connect } from 'react-redux';

import PontoVendaSelector from './pontoVendaSelector';
import operations from '../../../../redux/reduxPage/operations/operations';
import selector from '../../../../redux/selector';

const mapStateToProps = ({ dashboard }) => ({
  pontos: selector.getPontosFilter(dashboard),
  selectedPontos: dashboard.principal.page.filters?.selectedPonto,
  pontosIsLoading: dashboard.principal.page.pontos?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setPontos: (pontos) => dispatch(operations.setSelectedPontos(pontos)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PontoVendaSelector);
