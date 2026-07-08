import React from 'react';

import './descontosListHeader.scss';

const DescontosListHeader = () => (
  <div className="descontos-page__list-header__container">
    <div className="descontos-page__list-header__item descontos-page__list-header__marca">
      MARCA
    </div>
    <div className="descontos-page__list-header__item descontos-page__list-header__tipo-produto">
      TIPO DE PRODUTO
    </div>
    <div className="descontos-page__list-header__item descontos-page__list-header__inicio-vigencia">
      INÍCIO DA VIGÊNCIA
    </div>
    <div className="descontos-page__list-header__item descontos-page__list-header__fim-vigencia">
      FIM DA VIGÊNCIA
    </div>
    <div className="descontos-page__list-header__item descontos-page__list-header__dve">
      NÚMERO DVE
    </div>
    <div className="descontos-page__list-header__item descontos-page__list-header__delete" />
  </div>
);

export default DescontosListHeader;
