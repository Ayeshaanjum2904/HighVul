import React from 'react';

import './alvoSection.scss';

import SelectBrand from './selectBrand';

const AlvoSection = () => (
  <div className="alertas__modal-form__alvo">
    <div className="alertas__modal-form__alvo_header">
      3. Quem deve receber esse alerta?
    </div>
    <div className="alertas__modal-form__alvo_brand">
      <SelectBrand />
    </div>
  </div>
);

export default AlvoSection;
