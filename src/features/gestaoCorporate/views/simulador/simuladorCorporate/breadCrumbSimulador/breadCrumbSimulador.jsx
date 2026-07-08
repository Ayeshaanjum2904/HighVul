import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';

const BreadCrumbSimulador = () => (
  <BreadCrumb
    labels={[{
      label: 'Gestão Corporate',
      path: ' ',
    },
    {
      label: 'Simulador',
      path: '/simulador',
    }]}
  />
);

export default BreadCrumbSimulador;
