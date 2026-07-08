import { connect } from 'react-redux';
import GerentesList from './gerentesList';
import operations from '../../../gerentesModal/redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: cobrancas.gerentes.page.list.isLoading,
  isError: cobrancas.gerentes.page.list.isError,
  gerentes: cobrancas.gerentes.page.list.gerentes,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal, regional, marca) => dispatch(operations.openModal(modal, regional, marca)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GerentesList);
