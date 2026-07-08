import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent, PageFooter,
} from 'common/layout/page';

import SnackbarList from 'common/snackbarList';
import PaginationFooter from 'common/layout/paginationFooter';
import BreadCrumbGerentes from './views/breadCrumbGerentes';
import AdicionarRegional from './views/adicionarRegionalButton';
import BrandFilter from './views/selectMarca';
import RegionalFilter from './views/selectRegional';
import GerentesList from './views/gerentesList';
import GerentesModal from '../gerentesModal';
import FilterButton from './views/filterButton';

import './gerentesPage.scss';

const GerentesPage = ({
  getAssociacoes, isModalOpen, resetStore, snackbarErrors, onSnackbarClose,
  page, ipp, totalItems, isLoading, setPage, setIpp,
}) => {
  useEffect(() => {
    getAssociacoes();
    return () => {
      resetStore();
    };
  }, [getAssociacoes, resetStore]);

  return (
    <Page>
      <PageHeader>
        <PageSubTitle>
          <BreadCrumbGerentes />
        </PageSubTitle>
        <PageTitle>Associar gerentes</PageTitle>
      </PageHeader>
      <PageContent>
        <div className="gerentes__page__content">
          <div className="gerentes__page__filters">
            <div className="gerentes__page__filters-marca">
              <BrandFilter />
            </div>
            <div className="gerentes__page__filters-regional">
              <RegionalFilter />
            </div>
            <div className="gerentes__page__button-busca">
              <FilterButton />
            </div>
            <div className="gerentes__page__filters-button">
              <AdicionarRegional />
            </div>
          </div>
          <div className="gerentes__page__list">
            <GerentesList />
          </div>
        </div>
      </PageContent>
      <PageFooter>
        <PaginationFooter
          ipp={ipp}
          totalItems={totalItems}
          page={page}
          isLoading={isLoading}
          setPage={setPage}
          setIpp={setIpp}
        />
      </PageFooter>
      {isModalOpen ? (<GerentesModal />) : null }
      <SnackbarList
        snackbarErrors={snackbarErrors}
        onClose={(id) => onSnackbarClose(id)}
      />
    </Page>
  );
};

GerentesPage.propTypes = {
  resetStore: PropTypes.func.isRequired,
  getAssociacoes: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool,
  snackbarErrors: PropTypes.array,
  onSnackbarClose: PropTypes.func,
  page: PropTypes.number,
  ipp: PropTypes.number,
  totalItems: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
  setPage: PropTypes.func.isRequired,
  setIpp: PropTypes.func,
};

GerentesPage.defaultProps = {
  isModalOpen: false,
  snackbarErrors: [],
  onSnackbarClose: () => {},
  page: null,
  ipp: null,
  totalItems: null,
  setIpp: () => {},
};

export default GerentesPage;
