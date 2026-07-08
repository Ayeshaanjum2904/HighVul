import { connect } from 'react-redux';

import ContaCorrenteDealer from './contaCorrenteDealer';
import operations from './redux/operations';

const mapStateToProps = ({ contaCorrenteDealer }) => ({
  page: contaCorrenteDealer.pageParams.page,
  ipp: contaCorrenteDealer.pageParams.ipp,
  totalItems: contaCorrenteDealer.pageParams.totalItems,
  isLoading: contaCorrenteDealer.data.isLoading,
  data: contaCorrenteDealer.data.contasCorrentes,
  isError: contaCorrenteDealer.data.isError,
});

const mapDispatchToProps = (dispatch) => ({
  getContasCorrentes: () => {
    dispatch(operations.getContasCorrentes());
  },
  resetStore: () => {
    dispatch(operations.resetStore());
  },
  setPage: (page) => {
    dispatch(operations.setPage(page));
  },
  setIpp: (ipp) => {
    dispatch(operations.setIpp(ipp));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContaCorrenteDealer);
