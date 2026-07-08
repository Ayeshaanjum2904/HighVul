import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';

const BreadCrumbHistorico = () => (
  <BreadCrumb
    labels={[{
      label: 'Cobranças',
      path: ' ',
    },
    {
      label: 'Histórico',
      path: '/historico',
    }]}
  />
);

export default BreadCrumbHistorico;
