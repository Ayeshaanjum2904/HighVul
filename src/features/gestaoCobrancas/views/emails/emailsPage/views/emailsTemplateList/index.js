/* eslint-disable object-property-newline */
import { connect } from 'react-redux';

import ContatosPageList from './emailsTemplateList';

import selectors from '../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  gruposTemplates: selectors.gruposTemplates(cobrancas),
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ContatosPageList);
