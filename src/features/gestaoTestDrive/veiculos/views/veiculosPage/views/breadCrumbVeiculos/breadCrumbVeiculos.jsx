import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';
import { PATH_GESTAO_TEST_DRIVE } from 'routes/paths';

const BreadCrumbVeiculos = () => (
  <BreadCrumb
    labels={[{
      label: 'Gestão de Test Drive',
      path: '/listagem-ofertas',
    },
    {
      label: 'Veiculos',
      path: `${PATH_GESTAO_TEST_DRIVE}/veiculos`,
    }]}
  />
);

export default BreadCrumbVeiculos;
