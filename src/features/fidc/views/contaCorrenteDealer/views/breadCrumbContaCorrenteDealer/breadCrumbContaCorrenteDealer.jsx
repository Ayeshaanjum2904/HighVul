import React from 'react';
import BreadCrumb from 'common/layout/breadCrumb';

const BreadCrumbContaCorrenteDealer = () => (
  <BreadCrumb
    labels={[
      { label: 'FIDC', path: '/fidc' },
      { label: 'Conta Corrente | Dealer', path: '/fidc/conta-corrente-dealer' },
    ]}
  />
);

export default BreadCrumbContaCorrenteDealer;
