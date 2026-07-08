import React from 'react';

import InputConcessionariaCnpj from './inputConcessionariaCnpj';
import InputConcessionariaNome from './inputConcessionariaNome';
import InputConcessionariaCodigo from './inputConcessionariaCodigo';
import InputRegiaoCodigo from './inputRegiaoCodigo';
import InputRegiaoNome from './inputRegiaoNome';

import './dadosConcessionaria.scss';

const DadosConcessionaria = () => (
  <div
    className="pedidos__concessionaria__container"
    data-cy="pedidos-concessionaria-container"
  >
    <div className="pedidos__concessionaria__container__header_title">
      Concessionária
    </div>
    <div className="pedidos__concessionaria__container_concessionaria">
      <InputConcessionariaNome />
    </div>
    <div className="pedidos__concessionaria__container__content">
      <div className="pedidos__concessionaria__container__content_codanagrafico">
        <InputConcessionariaCodigo />
      </div>
      <div className="pedidos__concessionaria__container__content_cnpj">
        <InputConcessionariaCnpj />
      </div>
      <div className="pedidos__concessionaria__container__content_codregional">
        <InputRegiaoCodigo />
      </div>
      <div className="pedidos__concessionaria__container__content_regional">
        <InputRegiaoNome />
      </div>
    </div>
  </div>
);

DadosConcessionaria.propTypes = {
};

DadosConcessionaria.defaultProps = {
};

export default DadosConcessionaria;
