import React from 'react';
import BreadCrumb from 'common/layout/breadCrumb';

const BreadCrumbOrdem = () => (
  <BreadCrumb
    labels={[
      { label: 'Gestão de Test Drive', path: ' ' },
      { label: 'Ordens', path: '/ordens' },
    ]}
  />
);

export default BreadCrumbOrdem;
