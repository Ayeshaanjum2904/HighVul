import { connect } from 'react-redux';

import * as AuthSelectors from 'modules/auth/redux/authSelectors';
import operations from './aprovacoes/limitesAprovadosPage/redux/operations';

import GestaoLimites from './gestaoLimites';

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
  teste: AuthSelectors.hasTestDrivePermission(auth),
});

const mapDispatchToProps = (dispatch) => ({
  resetStore: () => dispatch(operations.resetStore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GestaoLimites);
