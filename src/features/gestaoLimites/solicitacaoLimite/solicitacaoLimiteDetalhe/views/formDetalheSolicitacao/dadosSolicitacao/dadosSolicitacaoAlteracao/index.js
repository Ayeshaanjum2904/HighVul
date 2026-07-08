import { connect } from 'react-redux';
import DadosSolicitacaoAlteracao from './dadosSolicitacaoAlteracao';

import selectors from '../../../../redux/selectors';

const mapStateToProps = ({ limites }) => ({
  isAlteracaoValor: limites.details.modal.isAlteracaoValor,
  isAnaliseCredito: selectors.isAnaliseCredito(limites),
  motivo: limites.details.modal.detalheSolicitacao?.motivo,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DadosSolicitacaoAlteracao);
