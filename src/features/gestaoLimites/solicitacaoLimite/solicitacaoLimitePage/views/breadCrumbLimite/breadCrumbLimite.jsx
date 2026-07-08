import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';

const BreadCrumbLimite = () => (
  <BreadCrumb
    labels={[{
      label: 'Gestão de Limites',
      path: ' ',
    },
    {
      label: 'Solicitações de Alteração de Limite',
      path: '/acompanhamento',
    }]}
  />
);

export default BreadCrumbLimite;
