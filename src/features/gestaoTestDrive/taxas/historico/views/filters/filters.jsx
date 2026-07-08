import React from 'react';
import CriarTaxaButton from './criarTaxaButton';
import SelectTaxaPraticada from './selectTaxaPraticada';
import FilterButton from './buttonFilter';
import SelectData from './selectData';

import './filters.scss';
import SelectBrand from './selectBrand';

const Filters = () => (
  <div className="historico-taxas-filters">
    <div className="historico-taxas-filters__first-row">
      <div
        className="historico-taxas-filters__first-row__select"
        data-cy="historico-taxa-data"
      >
        <SelectData />
      </div>
      <div
        className="historico-taxas-filters__first-row__select-taxa"
        data-cy="historico-taxa-select-brand"
      >
        <SelectBrand />
      </div>
      <div
        className="historico-taxas-filters__first-row__select-taxa"
        data-cy="historico-taxa-select-praticada"
      >
        <SelectTaxaPraticada />
      </div>
    </div>
    <div className="historico-taxas-filters__second-row">
      <div
        className="historico-taxas-filters__second-row__filter-button"
        data-cy="historico-taxa-filter-button"
      >
        <FilterButton />
      </div>
      <div
        className="historico-taxas-filters__second-row__criar"
        data-cy="historico-taxa-criar"
      >
        <CriarTaxaButton />
      </div>
    </div>
  </div>
);

export default Filters;
