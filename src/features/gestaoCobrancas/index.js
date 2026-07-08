import { connect } from 'react-redux';

import GestaoCobrancas from './gestaoCobrancas';

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
});

export default connect(mapStateToProps)(GestaoCobrancas);
