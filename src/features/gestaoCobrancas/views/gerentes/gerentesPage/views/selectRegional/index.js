import { connect } from 'react-redux';

import operations from '../../redux/operations';
import selectors from '../../redux/selectors';
import SelectRegional from './selectRegionalGerentesPage';

const mapStateToProps = ({ cobrancas }) => ({
  regional: cobrancas.gerentes.page.filters.regional,
  regionalList: selectors.regionaisList(cobrancas),
  isLoading: cobrancas?.gerentes?.page?.list?.isLoading,
  resetStore: cobrancas?.gerentes?.page?.resetStore,
});

const mapDispatchToProps = (dispatch) => ({
  setRegional: (regional) => dispatch(operations.setRegional(regional)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectRegional);
