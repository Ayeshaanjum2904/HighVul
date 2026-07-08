import React from 'react';

import './contatosListHeader.scss';

const ContatosListHeader = () => (
  <div className="contatos__list-header__container">
    <div className="contatos__list-header__item contatos__list-header__nome">
      NOME
    </div>
    <div className="contatos__list-header__item contatos__list-header__papel">
      PAPEL
    </div>
    <div className="contatos__list-header__item contatos__list-header__grupo">
      GRUPO
    </div>
    <div className="contatos__list-header__item contatos__list-header__acoes">
      AÇÕES
    </div>
    <div className="contatos__list-header__item contatos__list-header__editar" />
    <div className="contatos__list-header__item contatos__list-header__deletar" />
  </div>
);

export default ContatosListHeader;
