import React from 'react';
import BuscaInput from './buscaInput';
import TipoSelector from './tipoSelect';
import RegionalSelector from './regionalSelect';
import SelectDate from './selectData';
import FilterButton from './filterButton';
import './filters.scss';

const Filters = () => (
  <div className="historico__page__filters">
    <div className="historico__page__filters__busca">
      <BuscaInput />
    </div>
    <div className="historico__page__filters__regional">
      <RegionalSelector />
    </div>
    <div className="historico__page__filters__tipo">
      <TipoSelector />
    </div>
    <div className="historico__page__filters__date">
      <SelectDate />
    </div>
    <div className="historico__page__filters__button">
      <FilterButton
        textApply="Filtrar"
        textSelect="Filtrar"
      />
    </div>
  </div>
);

export default Filters;
