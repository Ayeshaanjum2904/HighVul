import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { AuthOperations, AuthSelectors } from 'modules/auth/redux';

import MenuAside from './menuAside';

const mapStateToProps = ({ auth, notificationStore }) => ({
  hasTestDrivePermission: AuthSelectors.hasTestDrivePermission(auth),
  hasLimitesPermission: AuthSelectors.hasLimitesPermission(auth),
  hasAprovacoesPermission: AuthSelectors.hasAprovacoesPermission(auth),
  hasDashboardPermission: AuthSelectors.hasDashboardPermission(auth),
  hasAlertasPermission: AuthSelectors.hasAlertasPermission(auth),
  hasCobrancasPermission: AuthSelectors.hasCobrancasPermission(auth),
  hasFidcPermission: AuthSelectors.hasFidcPermission(auth),
  hasCorporatePermission: AuthSelectors.hasCorporatePermission(auth),
  hasNotifications: notificationStore.hasNotifications,
  exibirAlarme: notificationStore.notifications.exibirAlarme,
});

const mapDispatchToProps = (dispatch) => ({
  navTo: (path) => { dispatch(push(path)); },
  invalidateSession: () => dispatch(AuthOperations.invalidateSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuAside);
