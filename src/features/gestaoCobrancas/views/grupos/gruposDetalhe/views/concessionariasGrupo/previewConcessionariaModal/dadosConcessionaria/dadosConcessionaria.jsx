import React from 'react';

import Name from './views/nomeInput';
import CodigoBuc from './views/bucInput';
import Cnpj from './views/cnpjInput';
import Brand from './views/brandInput';
import Regional from './views/regionalInput';
import RegionalCode from './views/regionalCodeInput';
import AnalistaFinanciamento from './views/analistaInput';
import TipoConcessionaria from './views/concessionariaTipoInput';
import ContaPai from './views/contaPaiInput';

import './dadosConcessionaria.scss';

const DadosConcessionaria = () => (
  <div className="grupos__concessionarias-detalhe__dados-concessionaria">
    <div className="grupos__concessionarias-detalhe__dados-concessionaria__header">
      Dados da Concessionária
    </div>
    <div className="grupos__concessionarias-detalhe__dados-concessionaria__form">
      <div className="grupos__concessionarias-detalhe__dados-concessionaria__form_name">
        <Name />
      </div>
      <div className="grupos__concessionarias-detalhe__dados-concessionaria__form_buc">
        <CodigoBuc />
      </div>
      <div className="grupos__concessionarias-detalhe__dados-concessionaria__form_cnpj">
        <Cnpj />
      </div>
      <div className="grupos__concessionarias-detalhe__dados-concessionaria__form_brand">
        <Brand />
      </div>
      <div className="grupos__concessionarias-detalhe__dados-concessionaria__form_regional">
        <Regional />
      </div>
      <div className="grupos__concessionarias-detalhe__dados-concessionaria__form_regional-code">
        <RegionalCode />
      </div>
      <div className="grupos__concessionarias-detalhe__dados-concessionaria__form_analista">
        <AnalistaFinanciamento />
      </div>
      <div className="grupos__concessionarias-detalhe__dados-concessionaria__form_tipo">
        <TipoConcessionaria />
      </div>
      <div className="grupos__concessionarias-detalhe__dados-concessionaria__form_pai">
        <ContaPai />
      </div>
    </div>
  </div>
);

export default DadosConcessionaria;
