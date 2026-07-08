import { connect } from 'react-redux';

import operations from '../../redux/operations';
import selectors from '../../redux/selectors';
import SelectRegional from './selectRegionalAnalistasPage';

const mapStateToProps = ({ cobrancas }) => ({
  regional: cobrancas.analistas.page.filters.regional,
  regionalList: selectors.regionaisList(cobrancas),
  isLoading: cobrancas?.analistas?.page?.list?.isLoading,
  resetStore: cobrancas?.analistas?.page?.resetStore,
});

const mapDispatchToProps = (dispatch) => ({
  setRegional: (regional) => dispatch(operations.setRegional(regional)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectRegional);
