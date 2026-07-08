import React from 'react';

import InputCoeficiente from './inputCoeficiente';
import InputParcelas from './inputParcelas';
import InputVencimento from './inputVencimento';
import InputTaxa from './inputTaxa';
import InputDesconto from './inputDesconto';

import SelectCondicao from './selectCondicao';

import './dadosCondicaoComercial.scss';

const DadosCondicaoComercial = () => (
  <div
    className="pedidos__condicao-comercial__container"
    data-cy="pedidos-condicao-comercial-container"
  >
    <div className="pedidos__condicao-comercial__container__header_title">
      Condição Comercial
    </div>
    <div className="pedidos__condicao-comercial__container_modalidade">
      <div className="pedidos__condicao-comercial__container_modalidade-text">
        Modalidade
      </div>
      <div className="pedidos__condicao-comercial__container_modalidade-select">
        <SelectCondicao />
      </div>
    </div>
    <div className="pedidos__condicao-comercial__container__content">
      <div className="pedidos__condicao-comercial__container__content_desconto">
        <InputDesconto />
      </div>
      <div className="pedidos__condicao-comercial__container__content_parcelas">
        <InputParcelas />
      </div>
      <div className="pedidos__condicao-comercial__container__content_prazo">
        <InputVencimento />
      </div>
      <div className="pedidos__condicao-comercial__container__content_taxa">
        <InputTaxa />
      </div>
      <div className="pedidos__condicao-comercial__container__content_coeficiente">
        <InputCoeficiente />
      </div>
    </div>
  </div>
);

DadosCondicaoComercial.propTypes = {
};

DadosCondicaoComercial.defaultProps = {
};

export default DadosCondicaoComercial;
