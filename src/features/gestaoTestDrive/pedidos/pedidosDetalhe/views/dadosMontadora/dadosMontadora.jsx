import React from 'react';

import EmpresaOrigemFaturamentoSelect from './empresaOrigemFaturamentoSelect';
import MarcaSelect from './marcaSelect/index';
import CodigoRegionalSelect from './codigoRegionalSelect/index';
import CodigoConcessionariaEntregaInput from './codigoConcessionariaEntregaInput';
import CodigoConcessionariaComissaoInput from './codigoConcessionariaComissaoInput';

import './dadosMontadora.scss';

const DadosMontadora = () => (
  <div
    className="pedidos__dados-montadora__container"
    data-cy="pedidos-dados-montadora-container"
  >
    <div className="pedidos__dados-montadora__container__header_title">
      Montadora
    </div>

    <div className="pedidos__dados-montadora__container__content_grid">
      <div className="pedidos__dados-montadora__container__content_empresa-origem">
        <EmpresaOrigemFaturamentoSelect />
      </div>
      <div className="pedidos__dados-montadora__container__content_codigo-entrega">
        <CodigoConcessionariaEntregaInput />
      </div>
      <div className="pedidos__dados-montadora__container__content_codigo-comissao">
        <CodigoConcessionariaComissaoInput />
      </div>
      <div className="pedidos__dados-montadora__container__content_marca">
        <MarcaSelect />
      </div>
      <div className="pedidos__dados-montadora__container__content_codigo-regional">
        <CodigoRegionalSelect />
      </div>
    </div>
  </div>
);

DadosMontadora.propTypes = {
};

DadosMontadora.defaultProps = {
};

export default DadosMontadora;
