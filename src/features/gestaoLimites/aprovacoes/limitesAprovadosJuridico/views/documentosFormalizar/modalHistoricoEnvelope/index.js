import { connect } from 'react-redux';

import ModalHistoricoEnvelope from './modalHistoricoEnvelope';

const mapStateToProps = (limites) => ({
  dadosEnvelope: limites.limitesAprovadosJuridico.dadosModalDocusign.dadosEnvelopeDocusign,
  dataSucced: !limites.limitesAprovadosJuridico.dadosModalDocusign.isError,
  dataLoading: limites.limitesAprovadosJuridico.dadosModalDocusign.isLoading,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalHistoricoEnvelope);
