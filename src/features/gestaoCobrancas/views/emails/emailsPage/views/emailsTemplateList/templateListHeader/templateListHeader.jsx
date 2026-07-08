import React from 'react';

import './templateListHeader.scss';

const TemplateListHeader = () => (
  <div className="emails__template__list-header__container">
    <div className="emails__template__list-header__item emails__template__list-header__assunto">
      ASSUNTO
    </div>
    <div className="emails__template__list-header__item emails__template__list-header__ordem-envio">
      ORDEM DE ENVIO
    </div>
    <div className="emails__template__list-header__item emails__template__list-header__editar" />
  </div>
);

export default TemplateListHeader;
