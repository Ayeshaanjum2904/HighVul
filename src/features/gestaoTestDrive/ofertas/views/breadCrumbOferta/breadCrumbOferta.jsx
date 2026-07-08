import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';

const BreadCrumbOferta = () => (
  <BreadCrumb
    labels={[{
      label: 'Gestão de Test Drive',
      path: ' ',
    },
    {
      label: 'Ofertas',
      path: '/listagem-ofertas',
    }]}
  />
);

export default BreadCrumbOferta;
