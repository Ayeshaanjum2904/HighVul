import React from 'react';

import './ofertasHeader.scss';

const OfertasHeader = () => (
  <div
    className="ofertas__ofertas-list-header__container"
    data-cy="ofertas-list-header-container"
  >
    <div className="ofertas__ofertas-list-header__item ofertas__ofertas-list-header__mvs">
      MVSA
    </div>
    <div className="ofertas__ofertas-list-header__item ofertas__ofertas-list-header__my">
      M/Y
    </div>
    <div className="ofertas__ofertas-list-header__item ofertas__ofertas-list-header__descricao">
      VEÍCULO
    </div>
    <div className="ofertas__ofertas-list-header__item ofertas__ofertas-list-header__produto">
      PRODUTO
    </div>
    <div className="ofertas__ofertas-list-header__item ofertas__ofertas-list-header__desconto">
      DESC.
    </div>
    <div className="ofertas__ofertas-list-header__item ofertas__ofertas-list-header__parcelas">
      PARCELAS
    </div>
    <div className="ofertas__ofertas-list-header__item ofertas__ofertas-list-header__taxa">
      TAXA
    </div>
    <div className="ofertas__ofertas-list-header__item ofertas__ofertas-list-header__vencimento">
      VENC.
    </div>
    <div className="ofertas__ofertas-list-header__item ofertas__ofertas-list-header__coeficiente">
      COEFIC.
    </div>
    <div className="ofertas__ofertas-list-header__item ofertas__ofertas-list-header__status">
      STATUS
    </div>
  </div>
);

export default OfertasHeader;
