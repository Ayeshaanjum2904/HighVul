import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';
import { PATH_GESTAO_LIMITES } from 'routes/paths';

const BreadCrumbLimitesAprovados = () => (
  <BreadCrumb
    labels={[{
      label: 'Gestão de Limites',
      path: ' ',
    },
    {
      label: 'Limites Aprovados',
      path: `${PATH_GESTAO_LIMITES}/limites-aprovados`,
    }]}
  />
);

export default BreadCrumbLimitesAprovados;
