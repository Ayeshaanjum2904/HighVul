/* eslint-disable object-property-newline */
import { connect } from 'react-redux';

import ContatosPageList from './emailsConfiguracoesList';

import selectors from '../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  gruposConfiguracoes: selectors.gruposConfiguracoes(cobrancas),
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ContatosPageList);
