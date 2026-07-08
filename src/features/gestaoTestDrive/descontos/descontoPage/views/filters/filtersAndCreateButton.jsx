import React from 'react';

import InputNumDev from './views/inputNumDve';
import CriarDescontoButton from './views/criarDescontoButton';
import SelectDataInicio from './views/selectDataInicio';
import SelectDataFim from './views/selectDataFim';
import SelectMarca from './views/selectMarca';
import SelectProduto from './views/selectProduto';
import FilterButton from './views/buttonFilter';

import './filtersAndCreateButton.scss';

const FiltersAndCreateButton = () => (
  <div className="descontos-page__filters">
    <div className="descontos-page__select__busca">
      <InputNumDev />
    </div>
    <div className="descontos-page__select__produto">
      <SelectProduto />
    </div>
    <div className="descontos-page__select__marca">
      <SelectMarca />
    </div>
    <div className="descontos-page__select__data-begin">
      <SelectDataInicio />
    </div>
    <div className="descontos-page__select__data-end">
      <SelectDataFim />
    </div>
    <div className="descontos-page__filter-and-create">
      <div className="descontos-page__filter-button">
        <FilterButton />
      </div>
      <div className="descontos-page__create-button">
        <CriarDescontoButton />
      </div>
    </div>
  </div>
);

export default FiltersAndCreateButton;
