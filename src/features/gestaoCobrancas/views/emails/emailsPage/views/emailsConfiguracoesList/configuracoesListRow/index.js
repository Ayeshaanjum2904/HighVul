import { connect } from 'react-redux';

import ConfiguracoesListRow from './configuracoesListRow';

import operations from '../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  updateConfigList: cobrancas.emails.page.updateConfigList,
});

const mapDispatchToProps = (dispatch) => ({
  updateConfig: (action, configuracao) => dispatch(operations.updateConfig(action, configuracao)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfiguracoesListRow);
