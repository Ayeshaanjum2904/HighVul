import { connect } from 'react-redux';

import LimitesAprovadosList from './limitesAprovadosList';
import operations from '../../redux/operations';
import selectors from '../../redux/selectors';

const mapStateToProps = ({ limitesAprovados, auth }) => ({
  limites: limitesAprovados.limitesAprovadosList.limites,
  isLoading: limitesAprovados.limitesAprovadosList.isLoading,
  isError: limitesAprovados.limitesAprovadosList.isError,
  page: limitesAprovados.pageParams.page,
  ipp: limitesAprovados.pageParams.ipp,
  totalItems: limitesAprovados.pageParams.itensTotais,
  user: auth.user,
  nomeColuna: limitesAprovados.filters.nomeColuna,
  sentidoOrdenacao: limitesAprovados.filters.sentidoOrdenacao,
  permissionList: selectors.permissionList(auth),
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedIds: (id) => dispatch(operations.setSelectedIds(id)),
  setIpp: (ipp, tipoUsuario) => dispatch(operations.setPageParams('ipp', ipp, tipoUsuario, false)),
  setPageFetch: (page, tipoUsuario) => dispatch(operations.setPageParams('page', page, tipoUsuario, true)),
  enviarProposta: (id, status, motivo = null) => dispatch(
    operations.updateAndSaveStatus(id, status, motivo),
  ),
  cadastroPage: (cadastroPage) => dispatch(operations.setCadastroPage(cadastroPage)),
  getDetalheLimite: (idLimite, detalhesLimite) => dispatch(
    operations.getDetalheLimite(idLimite, detalhesLimite),
  ),
  getLimitesAprovadosSisgar: (idLimite) => dispatch(
    operations.getLimitesAprovadosSisgar(idLimite),
  ),
  setOpenPopperCondicao: (save) => dispatch(operations.setOpenPopperSave(save)),
  setSortingOrder: (nome, ordem, tipoUsuario) => dispatch(
    operations.setSortingOrder(nome, ordem, tipoUsuario),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(LimitesAprovadosList);
