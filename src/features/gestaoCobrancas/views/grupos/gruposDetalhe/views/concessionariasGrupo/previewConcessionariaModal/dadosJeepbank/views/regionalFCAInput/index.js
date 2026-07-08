import { connect } from 'react-redux';

import RegionalFCAInput from './inputRegionalFCA';

const mapStateToProps = ({ cobrancas }) => ({
  regional: cobrancas.grupos.details.updateConcessionaria.data?.descricaoRegionalFca,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RegionalFCAInput);
