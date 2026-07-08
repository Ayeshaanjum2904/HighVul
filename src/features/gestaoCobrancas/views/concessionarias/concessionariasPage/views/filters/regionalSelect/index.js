import { connect } from 'react-redux';

import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';
import SelectRegional from './selectRegionalConcessionariasPage';

const mapStateToProps = ({ cobrancas }) => ({
  regional: cobrancas.concessionarias.page.filters.regional,
  regionalList: selectors.regionalList(cobrancas),
  isLoading: cobrancas.concessionarias.page.list.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setRegional: (regional) => dispatch(operations.setFilter('regional', regional)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectRegional);
