import { connect } from 'react-redux';

import FilterAndButtons from './filterAndButtons';
import operations from '../../redux/operations';

const mapStateToProps = ({ contaCorrenteDealer }) => ({
  cnpj: contaCorrenteDealer?.filters.cnpj,
  isFilterSelected: contaCorrenteDealer?.isFilterSelected,
  isLoading: contaCorrenteDealer?.data?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setCnpj: (cnpj) => {
    dispatch(operations.setCnpj(cnpj));
  },
  onFilter: () => {
    dispatch(operations.setPage(0));
  },
  onExport: () => {
    dispatch(operations.exportContasCorrentes());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterAndButtons);
