import React from 'react';

import InputNomeConta from './views/inputNomeConta';
import InputRazaoSocial from './views/inputRazaoSocial';
import InputCnpj from './views/inputCnpj';
import SelectMarca from './views/selectMarca';
import SelectRegional from './views/selectRegional';
import InputCodigoRegional from './views/inputCodigoRegional';
import InputEmailSupervisor from './views/inputEmailSupervisor';
import InputAnalistaRede from './views/inputAnalistaRede';

import './gruposModalForm.scss';

const GruposModalForm = () => (
  <div className="grupos__modal-form__content">
    <div className="grupos__modal-form__content_nome-conta">
      <InputNomeConta />
    </div>
    <div className="grupos__modal-form__content_razao-social">
      <InputRazaoSocial />
    </div>
    <div className="grupos__modal-form__content_cnpj">
      <InputCnpj />
    </div>
    <div className="grupos__modal-form__content_select-marca">
      <SelectMarca />
    </div>
    <div className="grupos__modal-form__content_select-regional">
      <SelectRegional />
    </div>
    <div className="grupos__modal-form__content_regional">
      <InputCodigoRegional />
    </div>
    <div className="grupos__modal-form__content_email-supervisor">
      <InputEmailSupervisor />
    </div>
    <div className="grupos__modal-form__content_analista-rede">
      <InputAnalistaRede />
    </div>
  </div>
);

export default GruposModalForm;
