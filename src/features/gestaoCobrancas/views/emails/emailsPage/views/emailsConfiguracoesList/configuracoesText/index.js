import { connect } from 'react-redux';

import ConfiguracoesText from './configuracoesText';

import selectors from '../../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  showAlert: selectors.isEmailDesabled(cobrancas),
});

export default connect(mapStateToProps, null)(ConfiguracoesText);
