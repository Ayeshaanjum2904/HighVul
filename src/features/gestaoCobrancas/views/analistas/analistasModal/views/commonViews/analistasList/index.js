/* eslint-disable object-property-newline */
import { connect } from 'react-redux';
import AnalistasList from './analistasList';

import selectors from '../../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  analistas: cobrancas.analistas.modal.list.analistas,
  isLoading: cobrancas.analistas.modal.list.isLoading,
  isError: cobrancas.analistas.modal.list.isError,
  listTitle: selectors.listTitle(cobrancas),
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalistasList);
