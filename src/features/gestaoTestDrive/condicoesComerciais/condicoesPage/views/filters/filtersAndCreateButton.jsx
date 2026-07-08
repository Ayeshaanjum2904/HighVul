import React from 'react';

import BuscarCartaMes from './views/buscarCartaMes';
import CriarCondicaoButton from './views/criarCondicaoButton';
import FilterButton from './views/buttonFilter';
import SelectDataInicio from './views/selectDataInicio';
import SelectDataFim from './views/selectDataFim';
import SelectMarca from './views/selectMarca';
import SelectProduto from './views/selectProduto';

import './filtersAndCreateButton.scss';

const FiltersAndCreateButton = () => (
  <div className="condicoes-page__filters">
    <div className="condicoes-page__select__busca">
      <BuscarCartaMes />
    </div>
    <div
      className="condicoes-page__select__produto"
      data-cy="SelectProduto"
    >
      <SelectProduto />
    </div>
    <div
      className="condicoes-page__select__marca"
      data-cy="SelectMarca"
    >
      <SelectMarca />
    </div>
    <div className="condicoes-page__select__data-begin">
      <SelectDataInicio />
    </div>
    <div className="condicoes-page__select__data-end">
      <SelectDataFim />
    </div>
    <div className="condicoes-page__filter-and-create">
      <div className="condicoes-page__filter-button">
        <FilterButton dataCy="filterButton" />
      </div>
      <div className="condicoes-page__create-button">
        <CriarCondicaoButton />
      </div>
    </div>
  </div>
);

export default FiltersAndCreateButton;
