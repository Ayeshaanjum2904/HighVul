import React from 'react';

import ConsultorJeep from './views/consultorJeepInput';
import GerenteJeep from './views/gerenteJeepInput';
import ConsultorFCA from './views/consultorFcaInput';
import RegionalFCA from './views/regionalFCAInput';
import CodigoRegional from './views/codigoRegionalFCAInput';
import RegionalJeep from './views/regionalJeepInput';
import Buttons from './views/formButtons';

import './resumoJeepBank.scss';

const ResumoJeepBank = () => (
  <div className="concessionarias__detalhe__resumo-jeep-bank">
    <div className="concessionarias__detalhe__resumo-jeep-bank__header">
      Dados Jeep Bank
      <Buttons />
    </div>
    <div className="concessionarias__detalhe__resumo-jeep-bank__form">
      <div className="concessionarias__detalhe__resumo-jeep-bank__form_consultor-jeep">
        <ConsultorJeep />
      </div>
      <div className="concessionarias__detalhe__resumo-jeep-bank__form_gerente">
        <GerenteJeep />
      </div>
      <div className="concessionarias__detalhe__resumo-jeep-bank__form_consultor-fca">
        <ConsultorFCA />
      </div>
      <div className="concessionarias__detalhe__resumo-jeep-bank__form_regional-code">
        <CodigoRegional />
      </div>
      <div className="concessionarias__detalhe__resumo-jeep-bank__form_regional-fca">
        <RegionalFCA />
      </div>
      <div className="concessionarias__detalhe__resumo-jeep-bank__form_regional-jeep">
        <RegionalJeep />
      </div>
    </div>
  </div>
);

export default ResumoJeepBank;
