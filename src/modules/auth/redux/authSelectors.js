import _ from 'lodash';
import { createSelector } from 'reselect';

import {
  PATH_LOGIN, PATH_GESTAO_TEST_DRIVE, PATH_GESTAO_LIMITES,
  PATH_DASHBOARD, PATH_COMUNICADOS, PATH_COBRANCAS,
  PATH_APROVACOES, PATH_FIDC,
} from 'routes/paths';
import {
  isFidisUser, getProfiles, hasSomePermission,
} from '../authLogic';

import { permissions } from '../permissions';

const getFidisCompany = createSelector(
  (state) => state.user,
  (user) => {
    if (!_.isArray(user?.companies)) return null;

    return user.companies.find((c) => (
      _.isString(c.companyId) && c.companyId.toLowerCase() === 'fidis'
    ));
  },
);

export const getPermissions = createSelector(
  getFidisCompany,
  (fidis) => {
    if (!_.isArray(fidis?.permissions)) return [];
    return fidis.permissions
      .map((p) => p?.permissionId)
      .filter((p) => _.isString(p) && !_.isEmpty(p));
  },
);

export const userProfiles = createSelector(
  (state) => state.user,
  (user) => getProfiles(user),
);

export const isAuthenticated = createSelector(
  getPermissions,
  (permission) => (permission.length > 0),
);

export const isFidis = createSelector(
  (state) => state.user,
  (user) => isFidisUser(user),
);

export const hasTestDrivePermission = createSelector(
  getFidisCompany,
  (fidis) => {
    if (!_.isArray(fidis?.permissions)) return [];

    const userPermissions = fidis.permissions
      .map((p) => p?.permissionId)
      .filter((p) => _.isString(p) && !_.isEmpty(p));

    const testDrivePermissions = [...Object.values(permissions.pedidos),
      ...Object.values(permissions.ofertas), ...Object.values(permissions.veiculos)];

    return hasSomePermission(userPermissions, testDrivePermissions);
  },
);

export const hasLimitesPermission = createSelector(
  getFidisCompany,
  (fidis) => {
    if (!_.isArray(fidis?.permissions)) return [];

    const userPermissions = fidis.permissions
      .map((p) => p?.permissionId)
      .filter((p) => _.isString(p) && !_.isEmpty(p));

    const limitesPermissions = [...Object.values(permissions.limite)];

    return hasSomePermission(userPermissions, limitesPermissions);
  },
);

export const hasAprovacoesPermission = createSelector(
  getFidisCompany,
  (fidis) => {
    if (!_.isArray(fidis?.permissions)) return [];

    const userPermissions = fidis.permissions
      .map((p) => p?.permissionId)
      .filter((p) => _.isString(p) && !_.isEmpty(p));

    const aprovacoesPermissions = [...Object.values(permissions.limitesAprovados)];

    return hasSomePermission(userPermissions, aprovacoesPermissions);
  },
);

export const hasDashboardPermission = createSelector(
  getFidisCompany,
  (fidis) => {
    if (!_.isArray(fidis?.permissions)) return [];

    const userPermissions = fidis.permissions
      .map((p) => p?.permissionId)
      .filter((p) => _.isString(p) && !_.isEmpty(p));

    const dashboardPermissions = [...Object.values(permissions.dashboard)];

    return hasSomePermission(userPermissions, dashboardPermissions);
  },
);

export const hasAlertasPermission = createSelector(
  getFidisCompany,
  (fidis) => {
    if (!_.isArray(fidis?.permissions)) return [];

    const userPermissions = fidis.permissions
      .map((p) => p?.permissionId)
      .filter((p) => _.isString(p) && !_.isEmpty(p));

    const alertasPermission = [...Object.values(permissions.alertas), permissions.resgatesFidc];

    return hasSomePermission(userPermissions, alertasPermission);
  },
);

export const hasCobrancasPermission = createSelector(
  getFidisCompany,
  (fidis) => {
    if (!_.isArray(fidis?.permissions)) return [];

    const userPermissions = fidis.permissions
      .map((p) => p?.permissionId)
      .filter((p) => _.isString(p) && !_.isEmpty(p));

    const cobrancasPermission = [...Object.values(permissions.cobrancas)];

    return hasSomePermission(userPermissions, cobrancasPermission);
  },
);

export const hasFidcPermission = createSelector(
  getFidisCompany,
  (fidis) => {
    if (!_.isArray(fidis?.permissions)) return [];

    const userPermissions = fidis.permissions
      .map((p) => p?.permissionId)
      .filter((p) => _.isString(p) && !_.isEmpty(p));

    const fidcPermissions = [permissions.contaCorrenteDealer, permissions.resgatesFidc];

    return hasSomePermission(userPermissions, fidcPermissions);
  },
);

export const hasCorporatePermission = createSelector(
  getFidisCompany,
  (fidis) => {
    if (!_.isArray(fidis?.permissions)) return [];

    const userPermissions = fidis.permissions
      .map((p) => p?.permissionId)
      .filter((p) => _.isString(p) && !_.isEmpty(p));

    const corporatePermissions = [permissions.gestaoCorporate];

    return hasSomePermission(userPermissions, corporatePermissions);
  },
);

export const defaultRoute = createSelector(
  hasTestDrivePermission,
  hasLimitesPermission,
  hasAprovacoesPermission,
  hasDashboardPermission,
  hasAlertasPermission,
  hasCobrancasPermission,
  hasFidcPermission,
  isAuthenticated,
  (
    testDrivePermission,
    limitesPermission,
    aprovacoesPermissions,
    dashboardPermission,
    alertasPermission,
    cobrancasPermission,
    fidcPermission,
    authenticated,
  ) => {
    if (authenticated) {
      if (testDrivePermission) return PATH_GESTAO_TEST_DRIVE;
      if (limitesPermission) return PATH_GESTAO_LIMITES;
      if (aprovacoesPermissions) return PATH_APROVACOES;
      if (dashboardPermission) return PATH_DASHBOARD;
      if (alertasPermission) return PATH_COMUNICADOS;
      if (cobrancasPermission) return PATH_COBRANCAS;
      if (fidcPermission) return PATH_FIDC;
    }

    return PATH_LOGIN;
  },
);
