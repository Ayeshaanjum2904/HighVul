import { connect } from 'react-redux';

import NomeInput from './inputNome';

import selectors from '../../../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  nome: selectors.concessionariaNome(cobrancas),
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(NomeInput);
