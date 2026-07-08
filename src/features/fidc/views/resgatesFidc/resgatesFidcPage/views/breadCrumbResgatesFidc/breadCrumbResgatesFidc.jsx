import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';

const breadCrumbResgatesFidc = () => (
  <BreadCrumb
    labels={[{
      label: 'FIDC',
      path: '/fidc',
    },
    {
      label: 'Resgates',
      path: '/',
      exact: true,
    }]}
  />
);

export default breadCrumbResgatesFidc;
