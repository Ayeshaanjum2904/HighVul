import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';

const BreadCrumbPedidos = () => (
  <BreadCrumb
    labels={[{
      label: 'Gestão de Test Drive',
      path: ' ',
    },
    {
      label: 'Pedidos',
      path: '/pedidos',
    }]}
  />
);

export default BreadCrumbPedidos;
