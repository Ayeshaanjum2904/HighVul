/* eslint-disable object-property-newline */
import { connect } from 'react-redux';

import HistoricoList from './historicoList';
import operations from '../../redux/operations';
import operationsDetalhes from '../../../historicoDetalhe/redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: cobrancas.historico.page.list.isLoading,
  isError: cobrancas.historico.page.list.isError,
  historicos: cobrancas.historico.page.list.historico,
  page: cobrancas.historico.page.pageParams.page,
  ipp: cobrancas.historico.page.pageParams.ipp,
  totalItems: cobrancas.historico.page.pageParams.itensTotais,
});

const mapDispatchToProps = (dispatch) => ({
  setPage: (page) => dispatch(operations.setPage(page)),
  setIpp: (ipp) => dispatch(operations.setIpp(ipp)),
  openModalEmail: (id) => dispatch(operationsDetalhes.setModalOpen(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoricoList);
