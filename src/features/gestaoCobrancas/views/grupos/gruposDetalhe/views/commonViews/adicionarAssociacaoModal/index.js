import { connect } from 'react-redux';

import AdicionarAssociacaoModal from './adicionarAssociacaoModal';

const mapStateToProps = ({ cobrancas }) => ({
  associacoesContatos: cobrancas.grupos.details.updateContato.associacoes,
  associacoesConcessionarias: cobrancas.grupos.details.updateConcessionaria.associacoes,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AdicionarAssociacaoModal);
