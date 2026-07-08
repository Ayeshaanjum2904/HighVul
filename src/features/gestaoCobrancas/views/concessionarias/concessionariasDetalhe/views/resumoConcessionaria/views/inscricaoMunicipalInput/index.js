import { connect } from 'react-redux';

import InscricaoMunicipalInput from './inputInscricaoMunicipal';

const mapStateToProps = ({ cobrancas }) => ({
  inscricaoMunicipal: cobrancas.concessionarias.details.concessionaria?.inscricaoMunicipal,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(InscricaoMunicipalInput);
