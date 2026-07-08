import { connect } from 'react-redux';

import operations from './redux/operations';

import SolicitacaoLimitePage from './solicitacaoLimitePage';

const mapStateToProps = ({ limites }) => ({
  texto: limites.page.filters.texto,
  isDetalhesOpen: limites.details.isOpen,
  page: limites.page.solicitacoesList.page,
  ipp: limites.page.solicitacoesList.ipp,
  totalItems: limites.page.solicitacoesList.totalItems,
  isLoading: limites.page.solicitacoesList.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getSolicitacoes: (isInitialLoad) => dispatch(operations.getSolicitacoes(isInitialLoad)),
  resetStore: () => dispatch(operations.resetStore()),
  setTexto: (texto) => dispatch(operations.setTexto(texto)),
  setPage: (page) => dispatch(operations.setPage(page)),
  setIpp: (ipp) => dispatch(operations.setIpp(ipp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SolicitacaoLimitePage);
