import { connect } from 'react-redux';
import operations from './redux/operations';
import AlertasPage from './alertasPage';

const mapStateToProps = ({ comunicados }) => ({
  isModalAlertaOpen: comunicados.alertas.modal.isModalAlertaOpen,
  isLoading: comunicados.alertas.page.list.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setSortingOrder: (nome, ordem) => dispatch(
    operations.setSortingOrder(nome, ordem),
  ),
  getFilters: () => dispatch(operations.getFilters()),
  getAlertas: () => dispatch(operations.getAlertas()),
  resetStore: () => dispatch(operations.resetStore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertasPage);
