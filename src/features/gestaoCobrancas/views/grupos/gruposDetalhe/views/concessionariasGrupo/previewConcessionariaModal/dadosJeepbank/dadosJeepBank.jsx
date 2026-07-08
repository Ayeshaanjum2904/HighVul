import React from 'react';

import ConsultorJeep from './views/consultorJeepInput';
import GerenteJeep from './views/gerenteJeepInput';
import ConsultorFCA from './views/consultorFcaInput';
import RegionalFCA from './views/regionalFCAInput';
import CodigoRegional from './views/codigoRegionalFCAInput';
import RegionalJeep from './views/regionalJeepInput';

import './dadosJeepBank.scss';

const DadosJeepBank = () => (
  <div className="grupos__concessionarias-detalhe__dados-jeep-bank">
    <div className="grupos__concessionarias-detalhe__dados-jeep-bank__header">
      Dados Jeep Bank
    </div>
    <div className="grupos__concessionarias-detalhe__dados-jeep-bank__form">
      <div className="grupos__concessionarias-detalhe__dados-jeep-bank__form_consultor-jeep">
        <ConsultorJeep />
      </div>
      <div className="grupos__concessionarias-detalhe__dados-jeep-bank__form_gerente">
        <GerenteJeep />
      </div>
      <div className="grupos__concessionarias-detalhe__dados-jeep-bank__form_consultor-fca">
        <ConsultorFCA />
      </div>
      <div className="grupos__concessionarias-detalhe__dados-jeep-bank__form_regional-code">
        <CodigoRegional />
      </div>
      <div className="grupos__concessionarias-detalhe__dados-jeep-bank__form_regional-fca">
        <RegionalFCA />
      </div>
      <div className="grupos__concessionarias-detalhe__dados-jeep-bank__form_regional-jeep">
        <RegionalJeep />
      </div>
    </div>
  </div>
);

export default DadosJeepBank;
