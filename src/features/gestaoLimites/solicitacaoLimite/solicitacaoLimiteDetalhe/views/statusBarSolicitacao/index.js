import { connect } from 'react-redux';
import StatusBarSolicitacao from './statusBarSolicitacao';

import selectors from '../../redux/selectors';

const mapStateToProps = ({ limites }) => ({
  solicitacaoDetalhe: limites.details.modal.detalheSolicitacao,
  isLoading: limites.details.modal.isLoading,
  isTransferencia: selectors.isTransferencia(limites),
});

export default connect(mapStateToProps, null)(StatusBarSolicitacao);
