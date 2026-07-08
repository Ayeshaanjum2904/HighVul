import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import ButtonIcon from 'common/controls/buttonIcon';
import CloseIcon from '@material-ui/icons/Close';

import { DateRange } from '../../redux/enums';

import './dashboardFilterChips.scss';

const FilterChips = ({
  // eslint-disable-next-line react/prop-types
  name, value, clear, isActive,
}) => (
  isActive ? (
    <div className="dashboard__page__list-filter">
      <div className="dashboard__page__list-filter_name">
        {`${name}:`}
      </div>
      <div className="dashboard__page__list-filter_value">
        {value}
      </div>
      <div className="dashboard__page__list-filter_clear">
        <ButtonIcon onClick={clear}>
          <CloseIcon fontSize="inherit" />
        </ButtonIcon>
      </div>
    </div>
  ) : null
);

const DashboardFilterChips = ({
  filtroData, setFilterType, setBrands,
  selectedBrands, setPonto, pontos,
  selectedGrupo, setRegional, selectedRegional,
  selectedModelos, setGrupo, setModelos,
}) => (
  <div className="dashboard__page__filter__display_container">
    <div
      className="dashboard__page__filter__display"
      data-cy="dashboard-filter-chips"
    >
      <FilterChips
        name="Período"
        value={filtroData}
        clear={() => setFilterType(DateRange.all)}
        isActive
      />
      <FilterChips
        name="Brand"
        value={selectedBrands?.map((b) => b.text.concat(', ')).join('').slice(0, -2)}
        clear={() => setBrands([])}
        isActive={!_.isEmpty(selectedBrands) && selectedBrands !== null}
      />

      <FilterChips
        name="Regional"
        value={selectedRegional.length > 1 ? `${selectedRegional.length} itens` : `${selectedRegional.length} item`}
        clear={() => setRegional([])}
        isActive={!_.isEmpty(selectedRegional) && selectedRegional !== null}
      />

      <FilterChips
        name="Modelo"
        value={selectedModelos.length > 1 ? `${selectedModelos.length} itens` : `${selectedModelos.length} item`}
        clear={() => setModelos([])}
        isActive={!_.isEmpty(selectedModelos) && selectedModelos !== null}
      />

      <div className="dashboard__page__filter__display-lowercase">
        <FilterChips
          name="Grupo"
          value={selectedGrupo.length > 1 ? `${selectedGrupo.length} itens` : `${selectedGrupo.length} item`}
          clear={() => setGrupo([])}
          isActive={!_.isEmpty(selectedGrupo) && selectedGrupo !== null}
        />
      </div>

      <FilterChips
        name="Pontos de venda"
        value={pontos.length > 1 ? `${pontos.length} itens` : `${pontos.length} item`}
        clear={() => setPonto([])}
        isActive={!_.isEmpty(pontos) && pontos !== null}
      />

    </div>
  </div>
);

DashboardFilterChips.propTypes = {
  filtroData: PropTypes.string,
  setFilterType: PropTypes.func,
  setBrands: PropTypes.func,
  selectedBrands: PropTypes.array,
  selectedGrupo: PropTypes.array,
  setGrupo: PropTypes.func,
  setRegional: PropTypes.func,
  selectedRegional: PropTypes.array,
  setModelos: PropTypes.func,
  selectedModelos: PropTypes.array,
  pontos: PropTypes.array,
  setPonto: PropTypes.func,
};
DashboardFilterChips.defaultProps = {
  filtroData: '',
  setFilterType: () => {},
  setBrands: () => {},
  selectedBrands: [],
  selectedGrupo: [],
  setGrupo: () => {},
  setRegional: () => {},
  selectedRegional: [],
  setModelos: () => {},
  selectedModelos: [],
  pontos: [],
  setPonto: () => {},
};

export default DashboardFilterChips;
