import { connect } from 'react-redux';

import GerenteJeepInput from './inputGerenteJeep';

const mapStateToProps = ({ cobrancas }) => ({
  gerente: cobrancas.grupos.details.updateConcessionaria.data?.gerenteJeep,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GerenteJeepInput);
