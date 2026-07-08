import React from 'react';

import './historicoListHeader.scss';

const HistoricoListHeader = () => (
  <div className="historico__list-header__container">
    <div className="historico__list-header__item historico__list-header__assunto">
      ASSUNTO
    </div>
    <div className="historico__list-header__item historico__list-header__grupo">
      GRUPO
    </div>
    <div className="historico__list-header__item historico__list-header__regional">
      REGIONAL
    </div>
    <div className="historico__list-header__item historico__list-header__tipo-email">
      TIPO DE EMAIL
    </div>
    <div className="historico__list-header__item historico__list-header__envio">
      DATA DE ENVIO
    </div>
  </div>
);

export default HistoricoListHeader;
