import React from 'react';
import PropTypes from 'prop-types';

import InputBusca from './views/inputBusca';
import SelectMarca from './views/selectMarca';
import SelectRegional from './views/selectRegional';
import SelectStatus from './views/selectStatus';
import AdicionarGrupoButton from './views/adicionarGrupoButton';
import ExportarRelatorioButton from './views/exportarRelatorioButton';
import Warning from './views/warning';
import FilterButton from './views/filterButton';
import './gruposPageFilters.scss';

const GruposPageFilters = ({ showWarning }) => (
  <div className="grupos__page-filters__container">
    <div className="grupos__page-filters__content">
      <div className="grupos__page-filters__content_texto">
        <InputBusca />
      </div>
      <div className="grupos__page-filters__content_marca">
        <SelectMarca />
      </div>
      <div className="grupos__page-filters__content_regional">
        <SelectRegional />
      </div>
      <div className="grupos__page-filters__content_status">
        <SelectStatus />
      </div>
    </div>
    <div className="grupos__page-filters__action">
      <div className="grupos__page-filters__action_button">
        <AdicionarGrupoButton />
      </div>
      <div className="grupos__page-filters__action_button-export">
        <ExportarRelatorioButton />
      </div>
      <div className="grupos__page-filters__action_button-filter">
        <FilterButton textSelect="Filtrar" textApply="Filtrar" />
      </div>
    </div>
    {showWarning ? <Warning /> : null}
  </div>

);

GruposPageFilters.propTypes = {
  showWarning: PropTypes.bool,
};

GruposPageFilters.defaultProps = {
  showWarning: false,
};

export default GruposPageFilters;
