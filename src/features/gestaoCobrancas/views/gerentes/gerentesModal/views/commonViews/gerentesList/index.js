/* eslint-disable object-property-newline */
import { connect } from 'react-redux';
import GerentesList from './gerentesList';

import selectors from '../../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  gerentes: cobrancas.gerentes.modal.list.gerentes,
  isLoading: cobrancas.gerentes.modal.list.isLoading,
  isError: cobrancas.gerentes.modal.list.isError,
  listTitle: selectors.listTitle(cobrancas),
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GerentesList);
