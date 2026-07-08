import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';
import { PATH_DASHBOARD } from 'routes/paths';
import { Page } from 'features/dashboard/principal/redux/enums';

const BreadCrumbDashboardLiquidadasFidc = () => (
  <BreadCrumb
    labels={[{
      label: 'Dashboards',
      path: ' ',
    },
    {
      label: 'FIDC',
      path: `${PATH_DASHBOARD}/${Page.fidc}/duplicatas-liquidadas`,
    },
    {
      label: 'Duplicatas Liquidadas',
      path: true,
    }]}
  />
);

export default BreadCrumbDashboardLiquidadasFidc;
