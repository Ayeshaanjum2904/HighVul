import { createSelector } from 'reselect';
import { permissions } from 'modules/auth';
import { hasPermission } from 'modules/auth/authLogic';
import { camelFormat } from 'utils/format';

const statusList = createSelector(
  (state) => state?.filters?.statusList,
  (listStatus) => (listStatus || []).map((item) => ({
    value: item.value,
    text: item.text,
  })),
);

const regionalList = createSelector(
  (state) => state?.filters?.regionalList,
  (listRegionais) => (listRegionais || []).map((item) => ({
    value: item.codigo,
    text: `${item.codigo} - ${camelFormat(item.name)}`,
  })),
);

const produtoList = createSelector(
  (state) => state?.filters?.produtoList,
  (listProdutos) => (listProdutos || []).map((item) => ({
    value: item.value,
    text: item.text,
  })),
);

const brandList = createSelector(
  (state) => state?.filters?.brandList,
  (listBrand) => (listBrand || []).map((item) => ({
    value: item.value,
    text: item.text,
  })),
);

const matrizList = createSelector(
  (state) => state?.filters?.matrizList,
  (listMatriz) => (listMatriz || []).map((item) => ({
    value: item.codigoBuc,
    text: `${camelFormat(item.name)} - ${item.codigoBuc}`,
  })),
);

const permissionList = createSelector(
  (auth) => auth?.user,
  (user) => {
    const isGestaoFinanciamentoRede = hasPermission(
      user,
      permissions.limitesAprovados.gestaoFinanciamentoRede,
    );
    const isGestaoCadastro = hasPermission(user, permissions.limitesAprovados.gestaoCadastro);
    const isGestaoJuridico = hasPermission(user, permissions.limitesAprovados.gestaoJuridico);
    const isGestaoCredito = hasPermission(user, permissions.limitesAprovados.gestaoCredito);

    return {
      isGestaoFinanciamentoRede,
      isGestaoCadastro,
      isGestaoJuridico,
      isGestaoCredito,
      isAny: isGestaoFinanciamentoRede || isGestaoCadastro || isGestaoJuridico || isGestaoCredito,
      isAnyExceptFinanciamentoRede: !isGestaoFinanciamentoRede
        && (isGestaoCadastro || isGestaoJuridico || isGestaoCredito),
      isAll: isGestaoFinanciamentoRede && isGestaoCadastro && isGestaoJuridico && isGestaoCredito,
      isAllExceptFinanciamentoRede: !isGestaoFinanciamentoRede
        && (isGestaoCadastro && isGestaoJuridico && isGestaoCredito),
    };
  },
);

export default {
  statusList,
  regionalList,
  produtoList,
  brandList,
  matrizList,
  permissionList,
};
