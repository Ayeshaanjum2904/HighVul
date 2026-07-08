import React from 'react';

import './errorListHeader.scss';

const ErrorListHeader = () => (
  <div className="error-list-header__container">
    <div className="error-list-header__item error-list-header__cadastrado">
      CONDIÇÃO JÁ CADASTRADA
    </div>
    <div className="error-list-header__item error-list-header__novo">
      NOVA CONDIÇÃO
    </div>
  </div>
);

export default ErrorListHeader;
