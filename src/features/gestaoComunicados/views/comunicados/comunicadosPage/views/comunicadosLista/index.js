import { connect } from 'react-redux';

import ComunicadosList from './comunicadosList';
import operations from '../../redux/operations';

const mapStateToProps = ({ comunicados }) => ({
  comunicados: comunicados.comunicados.page.comunicados,
  isError: comunicados.comunicados.page.requestStatus.isError,
  isLoading: comunicados.comunicados.page.requestStatus.isLoading,
  field: comunicados.comunicados.page.filters.nomeColuna,
  sort: comunicados.comunicados.page.filters.sentidoOrdenacao,
});

const mapDispatchToProps = (dispatch) => ({
  setComunicadoId: (idDocumento) => dispatch(operations.setComunicadoId(idDocumento)),
  deleteComunicado: () => { dispatch(operations.deleteArquivo()); },
  setSortingOrder: (nome, ordem) => dispatch(
    operations.setSortingOrder(nome, ordem),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ComunicadosList);
