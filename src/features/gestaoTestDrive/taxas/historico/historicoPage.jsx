import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Page, PageContent, PageHeader, PageSubTitle, PageTitle,
} from 'common/layout/page';
import SnackbarList from 'common/snackbarList';
import Filters from './views/filters';
import Breadcrumb from './views/breadCrumb';
import TaxasHistoricoList from './views/historicoList';

import './historicoPage.scss';

const HistoricoTaxaPage = ({
  getHistorico, resetStore, onSnackbarClose, snackbarErrors,
}) => {
  useEffect(() => {
    getHistorico();
    return () => resetStore();
  }, [getHistorico, resetStore]);

  return (
    <Page minWidth="unset" hideFooter>
      <PageHeader>
        <PageSubTitle>
          <Breadcrumb />
        </PageSubTitle>
        <PageTitle>
          Histórico de taxas
        </PageTitle>
      </PageHeader>
      <PageContent>
        <div className="historico-taxa__content">
          <Filters />
          <div className="historico-taxa__content__list">
            <TaxasHistoricoList />
          </div>
        </div>
      </PageContent>
      <SnackbarList
        data-cy="snackbarList"
        snackbarErrors={snackbarErrors}
        onClose={(id) => onSnackbarClose(id)}
      />
    </Page>
  );
};

HistoricoTaxaPage.propTypes = {
  getHistorico: PropTypes.func,
  resetStore: PropTypes.func,
  onSnackbarClose: PropTypes.func,
  snackbarErrors: PropTypes.array,
};

HistoricoTaxaPage.defaultProps = {
  getHistorico: () => {},
  resetStore: () => {},
  onSnackbarClose: () => {},
  snackbarErrors: [],
};

export default HistoricoTaxaPage;
