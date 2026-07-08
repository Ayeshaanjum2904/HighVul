import { connect } from 'react-redux';

import GruposPageList from './gruposPageList';
import operations from '../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: cobrancas.grupos.page.list.isLoading,
  isError: cobrancas.grupos.page.list.isError,
  grupos: cobrancas.grupos.page.list.grupos,
  page: cobrancas.grupos.page.pageParams.page,
  ipp: cobrancas.grupos.page.pageParams.ipp,
  totalItems: cobrancas.grupos.page.pageParams.totalItems,
});

const mapDispatchToProps = (dispatch) => ({
  setPage: (page) => dispatch(operations.setPage(page)),
  setIpp: (ipp) => dispatch(operations.setIpp(ipp)),
  updateConfig: (action, grupo) => dispatch(operations.updateConfig(action, grupo)),
  setGruposPage: (page, grupo) => dispatch(operations.setGruposPage(page, grupo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GruposPageList);
