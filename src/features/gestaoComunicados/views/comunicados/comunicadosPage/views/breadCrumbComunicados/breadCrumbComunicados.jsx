import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';

const BreadCrumbComunicados = () => (
  <BreadCrumb
    labels={[{
      label: 'Gestão De Comunicados',
      path: '/central-comunicados/mensagens',
    },
    {
      label: 'Central de Comunicados',
      path: '/',
    }]}
  />
);

export default BreadCrumbComunicados;
