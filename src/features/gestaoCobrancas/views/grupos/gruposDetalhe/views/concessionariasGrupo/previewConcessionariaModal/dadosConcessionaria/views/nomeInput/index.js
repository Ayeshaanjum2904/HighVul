import { connect } from 'react-redux';

import NomeInput from './inputNome';

const mapStateToProps = ({ cobrancas }) => ({
  nome: cobrancas.grupos.details.updateConcessionaria.data?.nome,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(NomeInput);
