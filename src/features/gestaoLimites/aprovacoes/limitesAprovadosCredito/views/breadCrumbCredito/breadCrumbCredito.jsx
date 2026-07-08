import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';
import { PATH_GESTAO_LIMITES } from 'routes/paths';

const BreadCrumbCredito = () => (
  <BreadCrumb
    labels={[{
      label: 'Gestão de Limites',
      path: ' ',
    },
    {
      label: 'Limites aprovados',
      path: `${PATH_GESTAO_LIMITES}/aprovacoes/limites-aprovados`,
    },
    {
      label: 'Informações do crédito',
      path: true,
    }]}
  />
);

export default BreadCrumbCredito;
