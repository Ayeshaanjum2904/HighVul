import React from 'react';

import './periodoSection.scss';

import SelectPeriodo from './selectPeriodo';

const PeriodoSection = () => (
  <div className="alertas__modal-form__periodo">
    <div className="alertas__modal-form__periodo_header">
      2. Defina o período em que esse alerta ficará no ar:
    </div>
    <div className="alertas__modal-form__periodo_date-picker">
      <SelectPeriodo />
    </div>
  </div>
);

export default PeriodoSection;
