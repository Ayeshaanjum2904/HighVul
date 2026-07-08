import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';

const BreadCrumbGrupoPage = () => (
  <BreadCrumb
    labels={[{
      label: 'Cobranças',
      path: ' ',
    },
    {
      label: 'Grupos',
      path: '/grupos',
    }]}
  />
);

export default BreadCrumbGrupoPage;
