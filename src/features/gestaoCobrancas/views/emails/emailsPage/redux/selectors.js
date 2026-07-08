import _ from 'lodash';

import { createSelector } from 'reselect';

import { configUpdateAction } from '../../../../redux/enums';

const gruposTemplates = createSelector(
  (state) => state?.emails?.page?.templates?.list,
  (templates) => {
    const grupos = new Map();

    (templates || []).forEach((t) => {
      if (!_.isString(t?.tipo)) { return; }

      if (grupos.has(t.tipo)) {
        const templatesForTipo = grupos.get(t.tipo);
        templatesForTipo.push(t);
      } else {
        grupos.set(t.tipo, [t]);
      }
    });
    const result = [];
    grupos.forEach((templatesForTipo, tipo) => {
      result.push({
        label: tipo.toUpperCase(),
        templates: templatesForTipo,
      });
    });
    return result;
  },
);

const gruposConfiguracoes = createSelector(
  (state) => state?.emails?.page?.configuracoes?.tipo,
  (state) => state?.emails?.page?.configuracoes?.produto,
  (tipo, produto) => {
    const result = [];
    if (!_.isEmpty(tipo)) {
      result.push({
        label: 'POR TIPO',
        configuracoes: tipo,
        mixpanelTarget: 'Update Configuração Tipo',
        action: configUpdateAction.emailsAlterarTipo,
        isDisabled: tipo?.some((i) => i.status === false),
      });
    }

    if (!_.isEmpty(produto)) {
      result.push({
        label: 'POR PRODUTO',
        configuracoes: produto,
        mixpanelTarget: 'Update Configuração Produto',
        action: configUpdateAction.emailsAlterarProduto,
        isDisabled: produto?.some((i) => i.status === false),
      });
    }
    return result;
  },
);

const isLoading = createSelector(
  (state) => state?.emails?.page?.configuracoes?.isLoading,
  (state) => state?.emails?.page?.templates?.isLoading,
  (isLoadingConfiguracoes, isLoadingTemplate) => (isLoadingConfiguracoes || isLoadingTemplate),
);

const isError = createSelector(
  (state) => state?.emails?.page?.configuracoes?.isError,
  (state) => state?.emails?.page?.templates?.isError,
  (isErrorConfiguracoes, isErrorTemplate) => (isErrorConfiguracoes && isErrorTemplate),
);

const isEmailDesabled = createSelector(
  (state) => state?.emails?.page?.configuracoes?.tipo,
  (state) => state?.emails?.page?.configuracoes?.produto,
  (tipo, produto) => ((tipo || []).filter((t) => t.status === false).length > 0
  || (produto || []).filter((p) => p.status === false).length > 0),
);

export default {
  gruposTemplates,
  gruposConfiguracoes,
  isLoading,
  isError,
  isEmailDesabled,
};
