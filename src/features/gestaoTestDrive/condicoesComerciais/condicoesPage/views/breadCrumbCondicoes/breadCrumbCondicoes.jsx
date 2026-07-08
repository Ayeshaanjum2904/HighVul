import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';

const BreadCrumbCondicoes = () => (
  <BreadCrumb
    labels={[{
      label: 'Gestão de Test Drive',
      path: ' ',
    },
    {
      label: 'Parâmetros',
      path: '',
      disabled: true,
    },
    {
      label: 'Condições Comerciais',
      path: '/condicoes-comerciais',
    }]}
  />
);

export default BreadCrumbCondicoes;
