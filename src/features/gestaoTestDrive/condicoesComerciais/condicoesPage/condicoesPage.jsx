import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent, PageFooter,
} from 'common/layout/page';

import SnackbarList from 'common/snackbarList';

import PaginationFooter from 'common/layout/paginationFooter';
import FiltersAndCreateButton from './views/filters/filtersAndCreateButton';
import CondicoesList from './views/condicoesPageList';
import BreadCrumbCondicoes from './views/breadCrumbCondicoes';

import './condicoesPage.scss';

const CondicoesPage = ({
  resetStore,
  getCondicoes, snackbarErrors, onCloseSnackbar,
  page, ipp, totalItems, isLoading, setPage, setIpp,
}) => {
  useEffect(() => {
    getCondicoes();
    return () => resetStore();
  }, [getCondicoes, resetStore]);

  return (
    <Page>
      <PageHeader>
        <PageSubTitle>
          <BreadCrumbCondicoes />
        </PageSubTitle>
        <PageTitle>Condições Comerciais</PageTitle>
      </PageHeader>
      <PageContent>
        <div className="condicoes-page__content">
          <div className="condicoes-page__content__filters">
            <FiltersAndCreateButton />
          </div>
          <div className="condicoes-page__content__list">
            <CondicoesList />
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
      <SnackbarList
        snackbarErrors={snackbarErrors}
        onClose={(id) => onCloseSnackbar(id)}
      />
    </Page>
  );
};

CondicoesPage.propTypes = {
  resetStore: PropTypes.func,
  getCondicoes: PropTypes.func,
  snackbarErrors: PropTypes.arrayOf(PropTypes.object),
  onCloseSnackbar: PropTypes.func,
  page: PropTypes.number,
  ipp: PropTypes.number,
  totalItems: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
  setPage: PropTypes.func.isRequired,
  setIpp: PropTypes.func,
};

CondicoesPage.defaultProps = {
  resetStore: () => {},
  getCondicoes: () => {},
  snackbarErrors: [],
  onCloseSnackbar: () => {},
  page: null,
  ipp: null,
  totalItems: null,
  setIpp: () => {},
};

export default CondicoesPage;
