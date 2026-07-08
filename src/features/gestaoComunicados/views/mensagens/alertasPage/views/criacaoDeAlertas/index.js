import { connect } from 'react-redux';
import CriacaoDeAlertasList from './criacaoDeAlertasList';

import operations from '../../redux/operations';
import modalAlertaOperations from '../../../alertasModal/redux/operations';

const mapStateToProps = ({ comunicados }) => ({
  alertas: comunicados.alertas.page.list.alertas,
  isError: comunicados.alertas.page.list.isError,
  isLoading: comunicados.alertas.page.list.isLoading,
  page: comunicados.alertas.page.pageParams.page,
  ipp: comunicados.alertas.page.pageParams.ipp,
  totalItems: comunicados.alertas.page.pageParams.totalItems,
  field: comunicados.alertas.page.filters.nomeColuna,
  sort: comunicados.alertas.page.filters.sentidoOrdenacao,
});

const mapDispatchToProps = (dispatch) => ({
  setAlertaId: (id) => dispatch(operations.setAlertaId(id)),
  getAlerta: (id) => dispatch(modalAlertaOperations.getAlerta(id)),
  deleteAlerta: () => { dispatch(operations.deleteAlerta()); },
  setPage: (page) => dispatch(operations.setPage(page)),
  setIpp: (ipp) => dispatch(operations.setIpp(ipp)),
  setSortingOrder: (nome, ordem) => dispatch(
    operations.setSortingOrder(nome, ordem),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CriacaoDeAlertasList);
