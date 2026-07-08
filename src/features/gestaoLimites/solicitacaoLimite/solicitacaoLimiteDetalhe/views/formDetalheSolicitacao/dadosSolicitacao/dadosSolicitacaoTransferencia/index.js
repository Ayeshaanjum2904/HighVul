import { connect } from 'react-redux';

import selectors from '../../../../redux/selectors';

import DadosSolicitacaoTransferencia from './dadosSolicitacaoTransferencia';

const mapStateToProps = ({ limites }) => ({
  isAlteracaoValor: limites.details.modal.isAlteracaoValor,
  isAnaliseCredito: selectors.isAnaliseCredito(limites),
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DadosSolicitacaoTransferencia);
