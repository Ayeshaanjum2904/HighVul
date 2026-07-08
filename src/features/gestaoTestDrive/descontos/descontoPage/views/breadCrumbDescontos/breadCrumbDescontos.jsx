import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';

const BreadCrumbDescontos = () => (
  <BreadCrumb
    labels={[{
      label: 'Gestão de Test Drive',
      path: ' ',
    },
    {
      label: 'Parâmetros',
      path: '',
      disabled: true,
    },
    {
      label: 'Condições à vista',
      path: '/descontos',
    }]}
  />
);

export default BreadCrumbDescontos;
