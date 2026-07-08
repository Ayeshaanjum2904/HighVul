import { connect } from 'react-redux';

import InscricaoMunicipalInput from './inputInscricaoMunicipal';

const mapStateToProps = ({ cobrancas }) => ({
  inscricaoMunicipal: cobrancas.grupos.details.updateConcessionaria.data?.inscricaoMunicipal,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(InscricaoMunicipalInput);
