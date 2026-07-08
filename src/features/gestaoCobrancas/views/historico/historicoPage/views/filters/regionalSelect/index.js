import { connect } from 'react-redux';

import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';
import RegionalSelect from './regionalSelect';

const mapStateToProps = ({ cobrancas }) => ({
  regional: cobrancas.historico.page.filters.regional,
  regionalList: selectors.regionalList(cobrancas),
  isLoading: cobrancas?.historico?.page?.list?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setRegional: (regional) => dispatch(operations.setFilter('regional', regional)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegionalSelect);
