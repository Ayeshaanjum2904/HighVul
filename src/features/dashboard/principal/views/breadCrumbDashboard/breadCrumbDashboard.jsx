import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';

const BreadCrumbDashboard = () => (
  <BreadCrumb
    labels={[{
      label: 'Dashboards',
      path: ' ',
    },
    {
      label: 'Test Drive',
      path: '/',
    }]}
  />
);

export default BreadCrumbDashboard;
