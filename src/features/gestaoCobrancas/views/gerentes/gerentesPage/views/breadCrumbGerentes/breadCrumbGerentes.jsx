import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';

const BreadCrumbGerentes = () => (
  <BreadCrumb
    labels={[{
      label: 'Cobranças',
      path: ' ',
    },
    {
      label: 'Configurações',
      disabled: true,
      path: '',
    },
    {
      label: 'Associar Gerentes',
      path: '/gerentes',
    }]}
  />
);

export default BreadCrumbGerentes;
