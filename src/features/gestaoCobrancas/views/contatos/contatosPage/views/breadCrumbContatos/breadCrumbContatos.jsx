import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';

const BreadCrumbContatos = () => (
  <BreadCrumb
    labels={[{
      label: 'Cobranças',
      path: ' ',
    },
    {
      label: 'Contatos',
      path: '/contatos',
    }]}
  />
);

export default BreadCrumbContatos;
