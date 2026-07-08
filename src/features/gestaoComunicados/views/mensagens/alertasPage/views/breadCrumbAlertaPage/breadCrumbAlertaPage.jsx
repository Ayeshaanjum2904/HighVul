import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';

const BreadCrumbAlertaPage = () => (
  <BreadCrumb
    labels={[{
      label: 'Gestão de Comunicados',
      path: ' ',
    },
    {
      label: 'Criação de alertas',
      path: '/',
    }]}
  />
);

export default BreadCrumbAlertaPage;
