import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent, PageFooter,
} from 'common/layout/page';

import SnackbarList from 'common/snackbarList';
import PaginationFooter from 'common/layout/paginationFooter';
import FiltersAndCreateButton from './views/filters';
import List from './views/descontosPageList';
import BreadCrumbDescontos from './views/breadCrumbDescontos';

import './descontosPage.scss';

const DescontoPage = ({
  resetStore,
  getDescontos, snackbarErrors, onCloseSnackbar, page, ipp, totalItems, isLoading, setPage, setIpp,
}) => {
  useEffect(() => {
    getDescontos();
    return () => resetStore();
  }, [getDescontos, resetStore]);

  return (
    <Page>
      <PageHeader>
        <PageSubTitle>
          <BreadCrumbDescontos />
        </PageSubTitle>
        <PageTitle>Condições à vista</PageTitle>
      </PageHeader>
      <PageContent>
        <div className="descontos-page__content">
          <div className="descontos-page__content__filters">
            <FiltersAndCreateButton />
          </div>
          <div className="descontos-page__content__list">
            <List />
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

DescontoPage.propTypes = {
  resetStore: PropTypes.func,
  getDescontos: PropTypes.func,
  snackbarErrors: PropTypes.arrayOf(PropTypes.object),
  onCloseSnackbar: PropTypes.func,
  page: PropTypes.number,
  ipp: PropTypes.number,
  totalItems: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
  setPage: PropTypes.func.isRequired,
  setIpp: PropTypes.func,
};

DescontoPage.defaultProps = {
  resetStore: () => {},
  getDescontos: () => {},
  snackbarErrors: [],
  onCloseSnackbar: () => {},
  page: null,
  ipp: null,
  totalItems: null,
  setIpp: () => {},
};

export default DescontoPage;
