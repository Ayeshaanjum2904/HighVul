import React from 'react';

import './concessionariasListHeader.scss';

const ConcessionariasListHeader = () => (
  <div className="concessionarias__list-header__container">
    <div className="concessionarias__list-header__item concessionarias__list-header__nome">
      NOME
    </div>
    <div className="concessionarias__list-header__item concessionarias__list-header__cnpj">
      CNPJ
    </div>
    <div className="concessionarias__list-header__item concessionarias__list-header__cod-buc">
      CÓDIGO BUC
    </div>
    <div className="concessionarias__list-header__item concessionarias__list-header__regional">
      REGIONAL
    </div>
    <div className="concessionarias__list-header__item concessionarias__list-header__brand">
      BRAND
    </div>
    <div className="concessionarias__list-header__item concessionarias__list-header__tipo-concessionaria">
      TIPO
    </div>
  </div>
);

export default ConcessionariasListHeader;
