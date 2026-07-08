import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonTooltipIcon from 'common/controls/buttonTooltipIcon';
import FilterIcon from 'assets/icons/filter-icon';
import RenderIfPermission from 'modules/auth/guards/renderIfPermission';
import { permissions } from 'modules/auth/permissions';
import HeaderFilterStyle from './headerFilter.style';
import ButtonFilterLimite from './buttonFilterLimite';
import BrandFilter from './brandFilter';
import ProductFilter from './productFilter';
import ConcessionariaFilter from './concessionariaFilter';
import RegionalFilter from './regionalFilter';
import StatusFilter from './statusFilter';

import SearchFilter from './searchFilter';
import ButtonRetain from './buttonRetain';
import DateFilterVenc from './dateFilterVenc';
import DateFilterAprov from './dateFilterAprov';
import ButtonSend from './buttonSend';
import ButtonExport from './buttonExport';

const HeaderFilter = ({ userPermission }) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <HeaderFilterStyle>
      <div className={`header ${showFilters ? 'show-all' : ''}`}>
        <div className="search">
          <SearchFilter />
        </div>
        <div className="concessionaria">
          <ConcessionariaFilter />
        </div>
        <div className="status">
          <StatusFilter />
        </div>
        <div className="botoes-filtro">
          <div className="botao-mais-filtros">
            <ButtonTooltipIcon
              title="Mostrar filtros"
              className={`show-button ${!showFilters ? 'show-filters' : ''}`}
              buttonAction={() => setShowFilters(!showFilters)}
            >
              <FilterIcon />
            </ButtonTooltipIcon>
          </div>
          <div className="botao-filtrar">
            <ButtonFilterLimite userPermission={userPermission} />
          </div>
        </div>
        <div className="botoes-acao">
          <div className="botao-retain">
            <ButtonExport />
          </div>
          <RenderIfPermission requireAll={[permissions.limitesAprovados.gestaoFinanciamentoRede]}>
            <div className="botao-send">
              <ButtonSend />
            </div>
            <div className="botao-retain">
              <ButtonRetain />
            </div>
          </RenderIfPermission>
        </div>

        {showFilters && (
          <>
            <div className="produto">
              <ProductFilter />
            </div>
            <div className="data-venc">
              <DateFilterVenc />
            </div>
            <div className="data-aprov">
              <DateFilterAprov />
            </div>
            <div className="regiao">
              <RegionalFilter />
            </div>
            <div className="marca">
              <BrandFilter />
            </div>
          </>
        )}
      </div>
    </HeaderFilterStyle>
  );
};

HeaderFilter.propTypes = {
  userPermission: PropTypes.any,
};

HeaderFilter.defaultProps = {
  userPermission: null,
};

export default HeaderFilter;
