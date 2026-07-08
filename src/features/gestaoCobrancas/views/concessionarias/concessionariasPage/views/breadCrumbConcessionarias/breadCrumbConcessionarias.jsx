import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';

const BreadCrumbConcessionarias = () => (
  <BreadCrumb
    labels={[{
      label: 'Cobranças',
      path: ' ',
    },
    {
      label: 'Concessionárias',
      path: '/concessionarias',
    }]}
  />
);

export default BreadCrumbConcessionarias;
