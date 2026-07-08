import React from 'react';
import PropTypes from 'prop-types';

import TextFormat from 'common/layout/textFormat/textFormat';
import InputConcessionariaCnpj from './inputConcessionariaCnpj';
import InputConcessionariaCodigo from './inputConcessionariaCodigo';
import InputRegiaoCodigo from './inputRegiaoCodigo';
import InputRegiaoNome from './inputRegiaoNome';
import InputCodigoSap from './inputCodigoSap';
import InputProduto from './inputProduto';
import InputBrand from './inputBrand';

import './dadosConcessionaria.scss';

const alteracaoLimTipo = 'Alteração de Limite';
const DadosConcessionaria = ({
  concessionaria, regiao, title, produto, tipo,
}) => (
  <div className="solicitacoes__concessionaria__container">
    <div className="solicitacoes__concessionaria__container__title">
      {title}
    </div>
    <div className="solicitacoes__concessionaria__container__header">
      <div className="solicitacoes__concessionaria__container__header__concessionaria">
        <TextFormat
          concessionariaNome={concessionaria?.nome}
          label="Concessionária"
        />
      </div>
      <div className="solicitacoes__concessionaria__container__header__brand">
        <InputBrand
          brand={concessionaria?.marca}
        />
      </div>
    </div>
    <div className="solicitacoes__concessionaria__container__content">
      <div className="solicitacoes__concessionaria__container__content_codanagrafico">
        <InputConcessionariaCodigo
          corretorId={concessionaria?.codigo}
        />
      </div>
      <div className="solicitacoes__concessionaria__container__content_cnpj">
        <InputConcessionariaCnpj
          concessionariaCnpj={concessionaria?.cnpj}
        />
      </div>
      <div className="solicitacoes__concessionaria__container__content_codregional">
        <InputRegiaoCodigo
          regiaoCodigo={regiao?.codigo}
        />
      </div>
      <div className="solicitacoes__concessionaria__container__content_regional">
        <InputRegiaoNome
          regiaoNome={regiao?.nome}
        />
      </div>
      <div className="solicitacoes__concessionaria__container__content_sap">
        <InputCodigoSap
          codigoSap={concessionaria?.codSap}
        />
      </div>
      {tipo !== alteracaoLimTipo
        ? (
          <div className="solicitacoes__concessionaria__container__content_produto">
            <InputProduto
              produto={produto}
            />
          </div>
        )
        : null }
    </div>
  </div>
);
DadosConcessionaria.propTypes = {
  concessionaria: PropTypes.object,
  regiao: PropTypes.object,
  title: PropTypes.string,
  produto: PropTypes.string,
  tipo: PropTypes.string,
};

DadosConcessionaria.defaultProps = {
  concessionaria: null,
  regiao: null,
  title: 'Dados da concessionária',
  produto: '',
  tipo: '',
};

export default DadosConcessionaria;
