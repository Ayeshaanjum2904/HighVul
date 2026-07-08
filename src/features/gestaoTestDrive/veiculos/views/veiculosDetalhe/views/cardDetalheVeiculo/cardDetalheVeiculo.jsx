import React from 'react';
import PropTypes from 'prop-types';

import {
  camelFormat, safeConcat, formatDescVeiculo, formatCurrency,
} from 'utils/format';
import './cardDetalheVeiculo.scss';

const DataRow = ({
  // eslint-disable-next-line react/prop-types
  label, value,
}) => (
  <div className="veiculos__card-resumo__data-row">
    <div className="veiculos__card-resumo__data-row-label">
      {label}
    </div>
    <div className="veiculos__card-resumo__data-row-value">
      {value}
    </div>
  </div>
);

const CardDetalheVeiculo = ({
  detalheVeiculo,
}) => (
  <div className="veiculos__card-resumo__container">
    <div
      className="veiculos__card-resumo__header"
      data-cy="veiculos-card-resumo-header"
    >
      <div className="veiculos__card-resumo__header_brand">
        {camelFormat(detalheVeiculo?.marca)}
      </div>
      <div className="veiculos__card-resumo__header_modelo">
        {camelFormat(detalheVeiculo?.descricaoModelo)}
      </div>
      <div className="veiculos__card-resumo__header_versao">
        {formatDescVeiculo(detalheVeiculo?.descricaoVersao)}
      </div>
    </div>
    <div
      className="veiculos__card-resumo__img"
      data-cy="veiculos-card-resumo-img"
    >
      {detalheVeiculo?.urlModelo || detalheVeiculo?.urlVeiculo ? (
        <img src={detalheVeiculo?.urlVeiculo ?? detalheVeiculo?.urlModelo} alt="Veiculo" />
      ) : null}
    </div>
    <div
      className="veiculos__card-resumo__card"
      data-cy="veiculos-card-resumo-card"
    >
      <DataRow label="Marca:" value={camelFormat(detalheVeiculo?.marca)} />
      <DataRow label="Modelo:" value={safeConcat(`${detalheVeiculo?.codigoModelo} • `, camelFormat(detalheVeiculo?.descricaoModelo))} />
      <DataRow label="Model/Year:" value={camelFormat(detalheVeiculo?.modelYear)} />
      <DataRow label="Código Versão:" value={detalheVeiculo?.codigoVersao} />
      <DataRow label="Versão:" value={formatDescVeiculo(detalheVeiculo?.descricaoVersao)} />
      <DataRow label="Código Série:" value={detalheVeiculo?.codigoSerie} />
      <DataRow label="Série:" value={formatDescVeiculo(detalheVeiculo?.descricaoSerie)} />
      <DataRow label="Alestimento:" value={formatDescVeiculo(detalheVeiculo?.allestimento)} />
      <DataRow label="Nome Comercial:" value={formatDescVeiculo(detalheVeiculo?.nomeComercial)} />
      <DataRow label="Valor:" value={formatCurrency(detalheVeiculo?.valor)} />
    </div>
  </div>
);

CardDetalheVeiculo.propTypes = {
  detalheVeiculo: PropTypes.object,
};

CardDetalheVeiculo.defaultProps = {
  detalheVeiculo: null,
};

export default CardDetalheVeiculo;
