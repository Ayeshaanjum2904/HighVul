import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';

const Breadcrumb = () => (
  <BreadCrumb
    labels={[{
      label: 'Gestão de Test Drive',
      path: ' ',
    },
    {
      label: 'Gestão de Taxas',
      disabled: true,
    },
    {
      label: 'Histórico de Taxas',
      path: '/taxas/historico',
    }]}
  />
);

export default Breadcrumb;
