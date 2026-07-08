/* eslint-disable object-property-newline */
import { connect } from 'react-redux';

import HistoricoList from './historicoList';
import selectors from '../../../redux/selectors';
import operations from '../../../../../historico/historicoDetalhe/redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  isLoading: selectors.isLoading.historico(cobrancas),
  isError: selectors.isError.historico(cobrancas),
  historicos: cobrancas.grupos.details.historico,
});

const mapDispatchToProps = (dispatch) => ({
  openModalEmail: (id) => dispatch(operations.setModalOpen(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoricoList);
