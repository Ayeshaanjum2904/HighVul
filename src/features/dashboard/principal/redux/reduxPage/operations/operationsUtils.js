import _ from 'lodash';
import { camelFormat } from 'utils/format';

export const mapUserBrands = (user) => {
  if (!_.isArray(user?.brands)) return [];

  return user.brands.map((r) => ({ text: camelFormat(r.name), value: camelFormat(r.name) }));
};

export const mapUserRegions = (user) => {
  if (!_.isArray(user?.regions)) return [];

  return user.regions.map((r) => ({ text: camelFormat(r.name, 2), value: r.id }));
};

export const mapGrupos = (grupos) => (grupos || []).map((e) => ({
  brand: e.brand || '',
  codigoBuc: e.cnpjRaiz || '',
  nome: e.nome || '',
  text: `${e.cnpjRaiz || ''} - ${e.brand || ''} - ${e.nome || ''}`,
  value: `${e.cnpjRaiz || ''} - ${e.brand || ''} - ${e.nome || ''}`,
}));

export const mapModelos = (modelos) => {
  if (!modelos) return [];

  return modelos.map((modelo) => ({
    text: modelo.nome,
    value: modelo.codigo,
  }));
};

export const selectFilterOpts = (allOpts, ...dependency) => {
  const dependecyItemsCount = dependency.reduce((acc, curr) => acc + curr[0].length, 0);

  if (!dependecyItemsCount) {
    return [];
  }

  const dependencyItems = dependency.map(
    (item) => [item[2], Object.fromEntries(item[0].map((subItem) => ([subItem[item[1]], true])))],
  );

  return allOpts.filter(
    (item) => dependencyItems.every((dependencyItem) => dependencyItem[1][item[dependencyItem[0]]]),
  );
};
