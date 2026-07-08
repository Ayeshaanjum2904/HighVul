import React from 'react';

import './page.scss';

export const PageHeader = ({
  // eslint-disable-next-line react/prop-types
  children,
}) => (
  <div
    className="common__page-header"
    data-cy="page-header"
  >
    {children}
  </div>
);

export const PageTitle = ({
  // eslint-disable-next-line react/prop-types
  children,
}) => (
  <div
    className="common__page-header__title"
    data-cy="page-title"
  >
    {children}
  </div>
);
export const PageSubTitle = ({
  // eslint-disable-next-line react/prop-types
  children,
}) => (
  <div
    className="common__page-header__subtitle"
    data-cy="page-subtitle"
  >
    {children}
  </div>
);

export const PageContent = ({
  // eslint-disable-next-line react/prop-types
  children,
}) => (
  <div
    className="common__page-content"
    data-cy="page-content"
  >
    {children}
  </div>
);

export const PageFooter = ({
  // eslint-disable-next-line react/prop-types
  children,
}) => (
  <div
    className="common__page-footer"
    data-cy="page-footer"
  >
    {children}
  </div>
);
