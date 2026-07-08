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

import './resumoConcessionaria.scss';

const ResumoConcessionaria = () => (
  <div className="concessionarias__detalhe__resumo-concessionaria">
    <div className="concessionarias__detalhe__resumo-concessionaria__header">
      Dados da Concessionária
    </div>
    <div className="concessionarias__detalhe__resumo-concessionaria__form">
      <div className="concessionarias__detalhe__resumo-concessionaria__form_name">
        <Name />
      </div>
      <div className="concessionarias__detalhe__resumo-concessionaria__form_buc">
        <CodigoBuc />
      </div>
      <div className="concessionarias__detalhe__resumo-concessionaria__form_cnpj">
        <Cnpj />
      </div>
      <div className="concessionarias__detalhe__resumo-concessionaria__form_brand">
        <Brand />
      </div>
      <div className="concessionarias__detalhe__resumo-concessionaria__form_regional">
        <Regional />
      </div>
      <div className="concessionarias__detalhe__resumo-concessionaria__form_regional-code">
        <RegionalCode />
      </div>
      <div className="concessionarias__detalhe__resumo-concessionaria__form_analista">
        <AnalistaFinanciamento />
      </div>
      <div className="concessionarias__detalhe__resumo-concessionaria__form_tipo">
        <TipoConcessionaria />
      </div>
      <div className="concessionarias__detalhe__resumo-concessionaria__form_pai">
        <ContaPai />
      </div>
    </div>
  </div>
);

export default ResumoConcessionaria;
