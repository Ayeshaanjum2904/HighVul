import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';

const BreadCrumbAnalistas = () => (
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
      label: 'Associar Analistas',
      path: '/analistas',
    }]}
  />
);

export default BreadCrumbAnalistas;
