import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent, PageFooter,
} from 'common/layout/page';
import BreadCrumbOferta from './views/breadCrumbOferta';

import SelectProduto from './views/selectProduto';
import SelectMarca from './views/selectMarca';
import InputBusca from './views/inputBusca';
import SelectData from './views/selectData';
import SelectStatus from './views/selectStatus';
import ButtonFilter from './views/buttonFilter';
import OfertasList from './views/ofertasList';
import PaginationFooter from './views/paginationFooter';

import './ofertas.scss';

const Ofertas = ({ setPagina, resetStore }) => {
  useEffect(() => {
    setPagina();
    return () => {
      resetStore();
    };
  }, [setPagina, resetStore]);

  return (
    <Page>
      <PageHeader>
        <PageSubTitle>
          <BreadCrumbOferta />
        </PageSubTitle>
        <PageTitle>Ofertas</PageTitle>
      </PageHeader>
      <PageContent>
        <div className="ofertas__page__content">
          <div
            className="ofertas__page__filters"
            data-cy="ofertasPageFilters"
          >
            <div className="ofertas__page__input-texto">
              <InputBusca />
            </div>
            <div className="ofertas__page__select-data">
              <SelectData />
            </div>
            <div className="ofertas__page__select-produto">
              <SelectProduto />
            </div>
            <div className="ofertas__page__select-marca">
              <SelectMarca />
            </div>
            <div className="ofertas__page__select-status">
              <SelectStatus />
            </div>
            <div className="ofertas__page__filter-button">
              <ButtonFilter />
            </div>
          </div>
          <div className="ofertas__page__list">
            <OfertasList />
          </div>
        </div>
      </PageContent>
      <PageFooter>
        <PaginationFooter />
      </PageFooter>
    </Page>
  );
};
Ofertas.propTypes = {
  setPagina: PropTypes.func.isRequired,
  resetStore: PropTypes.func.isRequired,
};

Ofertas.defaultProps = {
};

export default Ofertas;
