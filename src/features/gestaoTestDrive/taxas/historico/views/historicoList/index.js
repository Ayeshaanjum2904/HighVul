import { connect } from 'react-redux';
import operations from '../../redux/operations';

import TaxasHistoricoList from './taxasHistoricoList';

const mapStateToProps = ({ taxas }) => ({
  isLoading: taxas?.historico?.requestStatus?.isLoading,
  isError: taxas?.historico?.requestStatus?.isError,
  data: taxas?.historico?.data,
  page: taxas?.historico?.paginacao.page,
  ipp: taxas?.historico?.paginacao.ipp,
  totalItems: taxas?.historico?.paginacao.totalItems,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTaxa: (id) => dispatch(operations.deleteTaxa(id)),
  onSubmit: () => dispatch(operations.updateData()),
  setTaxaOpen: (data) => dispatch(operations.setTaxaOpen(data)),
  setPage: (page) => dispatch(operations.setPage(page)),
  setIpp: (ipp) => dispatch(operations.setIpp(ipp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaxasHistoricoList);
