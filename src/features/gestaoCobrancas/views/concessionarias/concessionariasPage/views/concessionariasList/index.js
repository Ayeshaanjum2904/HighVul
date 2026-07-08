/* eslint-disable object-property-newline */
import { connect } from 'react-redux';

import ConcessionariasList from './concessionariasList';
import operations from '../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: cobrancas.concessionarias.page.list.isLoading,
  isError: cobrancas.concessionarias.page.list.isError,
  concessionarias: cobrancas.concessionarias.page.list.concessionarias,
  ipp: cobrancas.concessionarias.page.pageParams.ipp,
  page: cobrancas.concessionarias.page.pageParams.page,
  totalItems: cobrancas.concessionarias.page.pageParams.totalItems,
});

const mapDispatchToProps = (dispatch) => ({
  setIpp: (ipp) => dispatch(operations.setIpp(ipp)),
  setPage: (page) => dispatch(operations.setPage(page)),
  setConcessionariasPage: (page, concessionaria) => dispatch(
    operations.setConcessionariasPage(page, concessionaria),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConcessionariasList);
