import _ from 'lodash';

import { permissions } from './permissions';

export const isFidisUser = (user) => {
  if (user && user.companies && user.companies.length > 0) {
    return user.companies.some(
      (c) => (c.companyId || '').toLowerCase() === 'fidis',
    );
  }

  return false;
};

const checkPermissionInEntities = (entities, requiredPermission) => {
  if (!Array.isArray(entities) || entities.length === 0) return false;

  for (let i = 0; i < entities.length; i += 1) {
    const perms = entities[i]?.permissions;
    const permission = perms?.filter((p) => p.permissionId === requiredPermission);
    if (permission && permission.length > 0) return true;
  }

  return false;
};

export const hasPermission = (user, requiredPermission) => {
  if (!user || !isFidisUser(user)) return false;

  return checkPermissionInEntities(user.companies, requiredPermission);
};

const checkProfile = (entities, requiredProfile) => {
  if (!Array.isArray(entities) || entities.length === 0) return false;

  for (let i = 0; i < entities.length; i += 1) {
    const { profiles } = entities[i];
    const profile = profiles.filter((p) => p.profileId === requiredProfile);
    if (profile && profile.length > 0) return true;
  }

  return false;
};

const hasProfile = (user, requiredProfile) => {
  if (!user || !isFidisUser(user)) return false;

  return checkProfile(user.companies, requiredProfile);
};

export const definePermissions = (user) => ({
  visualizarDuplicatas: hasPermission(user, permissions.duplicatas),
  visualizarMovimentacoes: hasPermission(user, permissions.movimentacoes),
  efetuarPagamento: hasPermission(user, permissions.efetuarPagamento),
  simularIof: hasPermission(user, permissions.iof),
  solicitarTestDrive: hasPermission(user, permissions.testDrive),
  dashboardTestDrive: hasPermission(user, permissions.dashboardTestDrive),

  usuarioBeta: hasProfile(user, permissions.beta),
  relatoriosFinanceiros: hasPermission(user, permissions.relatoriosFinanceiros),
});

export const getProfiles = (user) => {
  const profiles = [];

  if (_.isArray(user?.companies)) {
    user.companies.forEach((c) => {
      if (_.isArray(c.profiles)) {
        profiles.push(...c.profiles.map((p) => p.profile));
      }
    });
  }

  return profiles;
};

export const getUserRegions = (user) => {
  if (!_.isArray(user?.regions)) return [];
  return user?.regions;
};

export const getUserBrands = (user) => {
  if (!_.isArray(user?.brands)) return [];
  return user.brands;
};

const strCmp = (s1, s2) => {
  if (!_.isString(s1) || !_.isString(s2)) return null;
  return s1.toLowerCase() === s2.toLowerCase();
};

export const hasPermissions = (userPermissions, requiredPermissions) => {
  if (!_.isArray(userPermissions) || !_.isArray(requiredPermissions)) return null;

  let permissionsOk = true;
  requiredPermissions.forEach((requiredPerm) => {
    if (!userPermissions.some((p) => strCmp(p, requiredPerm))) {
      permissionsOk = false;
    }
  });

  return permissionsOk;
};

export const hasSomePermission = (userPermissions, requiredPermissions) => {
  if (!_.isArray(userPermissions) || !_.isArray(requiredPermissions)) return null;

  return requiredPermissions.some(
    (requiredPerm) => userPermissions.some((p) => strCmp(p, requiredPerm)),
  );
};
