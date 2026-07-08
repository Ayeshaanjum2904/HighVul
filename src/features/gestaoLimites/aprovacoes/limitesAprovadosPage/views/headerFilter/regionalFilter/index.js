import { connect } from 'react-redux';

import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';
import RegionalFilter from './regionalFilter';

const mapStateToProps = ({ limitesAprovados }) => ({
  regional: limitesAprovados.filters.regional,
  regionais: selectors.regionalList(limitesAprovados),
  isLoading: limitesAprovados.limitesAprovadosList.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setRegional: (regional) => dispatch(operations.setRegional(regional)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegionalFilter);
