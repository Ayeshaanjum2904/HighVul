import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import InputNumDve from './views/inputNumDve';
import SelectDataInicio from './views/selectDataInicio';
import SelectDataFim from './views/selectDataFim';
import SelectMarca from './views/selectMarca';
import SelectProduto from './views/selectProduto';
import InputDesconto from './views/inputDesconto';

import './form.scss';

const Form = ({ getBrandInputs, getProdutoInputs }) => {
  useEffect(() => {
    getBrandInputs();
    getProdutoInputs();
  }, [getBrandInputs, getProdutoInputs]);

  return (
    <>
      <div className="descontos-detail__form__content">
        <div className="descontos-detail__form__content__title">
          Tipo de produto
          <span>
            Selecione o tipo de produto referente às condições,
            alguns produtos não são visíveis para o concessionário.
          </span>
        </div>
        <div className="descontos-detail__form__content__inputs descontos-detail__form__content__inputs--produto-only">
          <div className="descontos-detail__form__content__inputs__produto-only">
            <SelectProduto />
          </div>
        </div>
      </div>

      <div className="descontos-detail__form__content">
        <div className="descontos-detail__form__content__title">
          Dados da condição
          <span>
            Informe os dados da marca, início e fim de vigência da condição e número DVE.
          </span>
        </div>
        <div className="descontos-detail__form__content__inputs">
          <div className="descontos-detail__form__content__inputs__marca">
            <SelectMarca />
          </div>
          <div className="descontos-detail__form__content__inputs__inicio-vigencia">
            <SelectDataInicio />
          </div>
          <div className="descontos-detail__form__content__inputs__fim-vigencia">
            <SelectDataFim />
          </div>
          <div className="descontos-detail__form__content__inputs__dve">
            <InputNumDve />
          </div>
        </div>
      </div>

      <div className="descontos-detail__form__content">
        <div className="descontos-detail__form__content__title">
          Condição
          <span>
            Informe os dados da condição.
          </span>
        </div>
        <div className="descontos-detail__form__content__inputs descontos-detail__form__content__inputs--desconto-only">
          <div className="descontos-detail__form__content__inputs__desconto">
            <InputDesconto />
          </div>
        </div>
      </div>
    </>
  );
};

Form.propTypes = {
  getBrandInputs: PropTypes.func,
  getProdutoInputs: PropTypes.func,
};

Form.defaultProps = {
  getBrandInputs: () => {},
  getProdutoInputs: () => {},
};

export default Form;
