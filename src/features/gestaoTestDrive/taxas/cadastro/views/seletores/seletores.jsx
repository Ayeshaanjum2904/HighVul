import React from 'react';
import NewDatepickerStyles from 'common/controls/newDatePicker/newDatePicker';
import PropTypes from 'prop-types';
import ButtonCadastro from './adicionarTaxasButton';
import SelectBrand from './selectBrand';

import './seletores.scss';

const Seletores = ({
  startDate, endDate, setStartDate, setEndDate, resetState, setResetState,
}) => {
  const isOutsideRange = (dia) => dia < startDate;
  return (
    <>
      <div
        className="cadastro-taxas__seletores__title"
        data-cy="cadastro-taxas-seletores-title"
      >
        <span className="taxa-cadastro__title">
          Dados das taxas
        </span>
        <div>
          Informe os dados da marca, início e fim de vigência e em seguida insira uma nova taxa.
        </div>
      </div>
      <div
        className="cadastro-taxas__seletores__container"
        data-cy="cadastro-taxa-seletores"
      >
        <div
          className="cadastro-taxas__seletores__container__select-data"
          data-cy="cadastro-taxa-data-inicio"
        >
          <NewDatepickerStyles
            title="Selecione um período"
            initialStartDate={startDate}
            initialEndDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            isOutsideRange={isOutsideRange}
            resetState={resetState}
            setResetState={setResetState}
          />
        </div>
        <div
          className="cadastro-taxas__seletores__container__select-brand"
          data-cy="cadastro-taxa-brand"
        >
          <SelectBrand />
        </div>
        <div
          className="cadastro-taxas__seletores__container__adicionar"
          data-cy="cadastro-taxa-adicionar"
        >
          <ButtonCadastro />
        </div>
      </div>
    </>
  );
};

Seletores.propTypes = {
  setStartDate: PropTypes.func,
  setEndDate: PropTypes.func,
  endDate: PropTypes.object,
  startDate: PropTypes.object,
  resetState: PropTypes.bool,
  setResetState: PropTypes.func,
};

Seletores.defaultProps = {
  setEndDate: () => {},
  setStartDate: () => {},
  startDate: '',
  endDate: '',
  resetState: false,
  setResetState: () => {},
};

export default Seletores;
