import React from 'react';
import PropTypes from 'prop-types';

import {
  camelFormat, safeConcat, formatDescVeiculo, formatCurrency,
} from 'utils/format';

import { validateUrl } from 'utils/validate';
import { Scrollbars } from 'react-custom-scrollbars';
import DefaultImage from './defaultImage';
import CadastroVeiculoButton from './cadastroVeiculoButton';

import './detalheCadastroVeiculo.scss';

const DataRow = ({
  // eslint-disable-next-line react/prop-types
  label, value,
}) => (
  <div className="veiculos__detalhe-cadastro__data-row">
    <div className="veiculos__detalhe-cadastro__data-row-label">
      {label}
    </div>
    <div className="veiculos__detalhe-cadastro__data-row-value">
      {value}
    </div>
  </div>
);

const DetalheCadastroVeiculo = ({
  urlSelecionada, veiculo,
}) => (
  <Scrollbars>
    <div
      className="veiculos__detalhe-cadastro__container"
      data-cy="cadastro-veiculos-detalhe-container"
    >
      <div className="veiculos__detalhe-cadastro__header">
        <div className="veiculos__detalhe-cadastro__header_brand">
          {camelFormat(veiculo?.marca)}
        </div>
        <div className="veiculos__detalhe-cadastro__header_modelo">
          {camelFormat(veiculo?.descricaoModelo)}
        </div>
        <div className="veiculos__detalhe-cadastro__header_versao">
          {formatDescVeiculo(veiculo?.descricaoVersao)}
        </div>
      </div>
      <div className="veiculos__detalhe-cadastro__img">
        {validateUrl(urlSelecionada) ? (
          <img src={urlSelecionada} alt="Veiculo" />
        ) : <DefaultImage />}
      </div>
      <div className="veiculos__detalhe-cadastro__card">
        <div className="veiculos__detalhe-cadastro__card-line" />
        <DataRow label="Marca:" value={camelFormat(veiculo?.marca)} />
        <DataRow label="Modelo:" value={safeConcat(`${veiculo?.codigoModelo} • `, camelFormat(veiculo?.descricaoModelo))} />
        <DataRow label="Model/Year:" value={camelFormat(veiculo?.modelYear)} />
        <DataRow label="Código Versão:" value={veiculo?.codigoVersao} />
        <DataRow label="Versão:" value={formatDescVeiculo(veiculo?.descricaoVersao)} />
        <DataRow label="Código Série:" value={veiculo?.codigoSerie} />
        <DataRow label="Série:" value={formatDescVeiculo(veiculo?.descricaoSerie)} />
        <DataRow label="Alestimento:" value={formatDescVeiculo(veiculo?.allestimento)} />
        <DataRow label="Nome Comercial:" value={formatDescVeiculo(veiculo?.nomeComercial)} />
        <DataRow label="Valor:" value={formatCurrency(veiculo?.valor)} />
      </div>

      <div className="veiculos__detalhe-cadastro__button">
        <CadastroVeiculoButton />
      </div>
    </div>
  </Scrollbars>
);

DetalheCadastroVeiculo.propTypes = {
  urlSelecionada: PropTypes.string,
  veiculo: PropTypes.object,
};

DetalheCadastroVeiculo.defaultProps = {
  urlSelecionada: null,
  veiculo: null,
};

export default DetalheCadastroVeiculo;
