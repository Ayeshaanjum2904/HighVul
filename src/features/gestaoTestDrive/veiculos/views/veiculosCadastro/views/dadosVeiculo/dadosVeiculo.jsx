import React from 'react';

import SelectMarca from './views/selectMarca';
import SelectModelo from './views/selectModelo';
import InputModelYear from './views/inputModelYear';
import InputCodVersao from './views/inputCodVersao';
import InputVersao from './views/inputVersao';
import InputCodSerie from './views/inputCodSerie';
import InputSerie from './views/inputSerie';
import InputAlestimento from './views/inputAlestimento';
import InputNomeComercial from './views/inputNomeComercial';
import InputValor from './views/inputValor';

import './dadosVeiculo.scss';

const DadosVeiculo = () => (
  <div className="veiculos__dados-veiculo__container">
    <div className="veiculos__dados-veiculo__container__header">
      <div
        className="veiculos__dados-veiculo__container__header_title"
        data-cy="dados-veiculo-header-title"
      >
        Dados do veículo
      </div>
      <div
        className="veiculos__dados-veiculo__container__header_subtitle"
        data-cy="dados-veiculo-header-subtitle"
      >
        Informe os dados mestre do veículo, como modelo, versão e outros.
      </div>
    </div>
    <div
      className="veiculos__dados-veiculo__container__content"
      data-cy="dados-veiculo-content"
    >
      <div className="veiculos__dados-veiculo__container__content_select-marca">
        <SelectMarca />
      </div>
      <div className="veiculos__dados-veiculo__container__content_select-modelo">
        <SelectModelo />
      </div>
      <div className="veiculos__dados-veiculo__container__content_model-year">
        <InputModelYear />
      </div>
      <div className="veiculos__dados-veiculo__container__content_cod-versao">
        <InputCodVersao />
      </div>
      <div className="veiculos__dados-veiculo__container__content_versao">
        <InputVersao />
      </div>
      <div className="veiculos__dados-veiculo__container__content_cod-serie">
        <InputCodSerie />
      </div>
      <div className="veiculos__dados-veiculo__container__content_serie">
        <InputSerie />
      </div>
      <div className="veiculos__dados-veiculo__container__content_alestimento">
        <InputAlestimento />
      </div>
      <div className="veiculos__dados-veiculo__container__content_nome-comercial">
        <InputNomeComercial />
      </div>
      <div className="veiculos__dados-veiculo__container__content_valor">
        <InputValor />
      </div>
    </div>
  </div>
);

DadosVeiculo.propTypes = {

};

export default DadosVeiculo;
