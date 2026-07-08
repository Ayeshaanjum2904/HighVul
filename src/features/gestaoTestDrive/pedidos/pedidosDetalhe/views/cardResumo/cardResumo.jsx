import React from 'react';
import PropTypes from 'prop-types';

import {
  safeConcat, formatDate, formatCnpj, formatCodigoConcessionaria, formatDescVeiculo,
  formatNomeConcessionaria,
} from 'utils/format';

import './cardResumo.scss';

const DataRow = ({
  // eslint-disable-next-line react/prop-types
  label, value,
}) => (
  <div className="pedidos__card-resumo__data-row">
    <div className="pedidos__card-resumo__data-row-label">
      {label}
    </div>
    <div className="pedidos__card-resumo__data-row-value">
      {value}
    </div>
  </div>
);

const Card = ({
  // eslint-disable-next-line react/prop-types
  modeloDescricao, modelYear, corretorId, concessionariaNome, cnpj,
}) => (
  <div
    className="pedidos__card-resumo__card"
    data-cy="pedidos__card-resumo__card"
  >
    <div className="pedidos__card-resumo__model">
      <div className="pedidos__card-resumo__model-desc">
        {modeloDescricao}
      </div>
      <div className="pedidos__card-resumo__model-year">
        {safeConcat('Model Year ', modelYear)}
      </div>
    </div>
    <div className="pedidos__card-resumo__card-lower">
      <DataRow
        label="Concessionária"
        value={`${formatCodigoConcessionaria(corretorId)} • ${formatNomeConcessionaria(concessionariaNome) || ''}`}
      />
      <DataRow
        label="CNPJ"
        value={formatCnpj(cnpj)}
      />
    </div>
  </div>
);

const CardResumo = ({
  isLoading, cnpj, concessionariaNome, corretorId,
  modeloDescricao, modelYear, produto, data, urlModelo,
}) => (
  <div className="pedidos__card-resumo__container">
    <div
      className="pedidos__card-resumo__header"
      data-cy="pedidos__card-resumo__header"
    >
      <div className="pedidos__card-resumo__header-produto">
        {safeConcat('Pedido de ', produto)}
      </div>
      <div className="pedidos__card-resumo__header-data">
        {safeConcat('Realizado em ', formatDate(data, 'DD [de] MMM YYYY [às] HH:mm'))}
      </div>
    </div>

    <div
      className="pedidos__card-resumo__img"
      data-cy="pedidos__card-resumo__img"
    >
      {urlModelo ? (
        <img src={urlModelo} alt="Modelo" />
      ) : null}
    </div>

    {!isLoading ? (
      <Card
        modeloDescricao={formatDescVeiculo(modeloDescricao)}
        modelYear={modelYear}
        corretorId={corretorId}
        concessionariaNome={concessionariaNome}
        cnpj={cnpj}
      />
    ) : null}
  </div>
);

CardResumo.propTypes = {
  isLoading: PropTypes.bool,
  cnpj: PropTypes.string,
  concessionariaNome: PropTypes.string,
  corretorId: PropTypes.number,
  modeloDescricao: PropTypes.string,
  modelYear: PropTypes.string,
  produto: PropTypes.string,
  data: PropTypes.string,
  urlModelo: PropTypes.string,
};

CardResumo.defaultProps = {
  isLoading: null,
  cnpj: null,
  concessionariaNome: null,
  corretorId: null,
  modeloDescricao: null,
  modelYear: null,
  produto: null,
  data: null,
  urlModelo: null,
};

export default CardResumo;
