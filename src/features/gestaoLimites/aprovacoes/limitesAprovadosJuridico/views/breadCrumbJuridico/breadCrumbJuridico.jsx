import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';
import { PATH_GESTAO_LIMITES } from 'routes/paths';

const BreadCrumbJuridico = () => (
  <BreadCrumb
    labels={[{
      label: 'Gestão de limites',
      path: ' ',
    },
    {
      label: 'Limites aprovados',
      path: `${PATH_GESTAO_LIMITES}/aprovacoes/limites-aprovados`,
    },
    {
      label: 'Documentos do jurídico',
      path: true,
    }]}
  />
);

export default BreadCrumbJuridico;
