import React from 'react';
import InputBusca from './queryFilter';
import BrandSelector from './brandSelect';
import RegionalSelector from './regionalSelect';
import InputBuc from './bucFilter';
import FilterButton from './filterButton';
import ExportarRelatorio from '../exportarRelatorio';

import './filters.scss';

const Filters = () => (
  <>
    <div className="concessionarias__concessionarias-list__filters">
      <div className="concessionarias__concessionarias-list__filters__busca">
        <InputBusca />
      </div>
      <div className="concessionarias__concessionarias-list__filters__buc">
        <InputBuc />
      </div>
      <div className="concessionarias__concessionarias-list__filters__brand">
        <BrandSelector />
      </div>
      <div className="concessionarias__concessionarias-list__filters__regional">
        <RegionalSelector />
      </div>
    </div>
    <div className="concessionarias__concessionarias-list__filters__second-row">
      <div className="concessionarias__concessionarias-list__filters__second-row__export">
        <ExportarRelatorio />
      </div>
      <div className="concessionarias__concessionarias-list__filters__second-row__button">
        <FilterButton textSelect="Filtrar" textApply="Filtrar" />
      </div>
    </div>

  </>
);

export default Filters;
