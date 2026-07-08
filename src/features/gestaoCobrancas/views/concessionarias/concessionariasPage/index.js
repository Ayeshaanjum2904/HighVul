import { connect } from 'react-redux';

import ConcessionariasPage from './concessionariasPage';
import operations from './redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  page: cobrancas.concessionarias.page.pageParams.page,
  ipp: cobrancas.concessionarias.page.pageParams.ipp,
  totalItems: cobrancas.concessionarias.page.pageParams.totalItems,
  isLoading: cobrancas.concessionarias.page.list.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  resetStore: () => dispatch(operations.resetStore()),
  getConcessionarias: () => dispatch(operations.getConcessionarias()),
  setPage: (page) => dispatch(operations.setPage(page)),
  setIpp: (ipp) => dispatch(operations.setIpp(ipp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConcessionariasPage);
