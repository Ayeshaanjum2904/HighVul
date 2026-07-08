import React from 'react';

import BreadCrumb from 'common/layout/breadCrumb';

const BreadCrumbEmails = () => (
  <BreadCrumb
    labels={[{
      label: 'Cobranças',
      path: ' ',
    },
    {
      label: 'E-mails',
      path: '/emails',
    }]}
  />
);

export default BreadCrumbEmails;
