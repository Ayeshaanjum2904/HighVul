import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent,
} from 'common/layout/page';
import SnackbarList from 'common/snackbarList';

import BreadCrumbGrupoPage from './views/breadCrumbGrupoPage';
import GruposPageFilters from './views/gruposPageFilters';
import GruposPageList from './views/gruposPageList';
import GruposModal from '../gruposModal';
import './gruposPage.scss';

const GruposPage = ({
  getGrupos, resetStore, snackbarErrors, onSnackbarClose, isModalOpen,
}) => {
  useEffect(() => {
    getGrupos();
    return () => {
      resetStore();
    };
  }, [getGrupos, resetStore]);
  return (
    <Page minWidth="unset" hideFooter>
      <PageHeader>
        <PageSubTitle>
          <BreadCrumbGrupoPage />
        </PageSubTitle>
        <PageTitle>Grupos</PageTitle>
      </PageHeader>
      <PageContent>
        <div className="grupos__page__content">
          <div className="grupos__page__filters">
            <GruposPageFilters />
          </div>

          <div className="grupos__page__list">
            <GruposPageList />
          </div>
        </div>
      </PageContent>
      <SnackbarList
        snackbarErrors={snackbarErrors}
        onClose={(id) => onSnackbarClose(id)}
      />
      {isModalOpen ? <GruposModal /> : null}
    </Page>
  );
};

GruposPage.propTypes = {
  getGrupos: PropTypes.func,
  resetStore: PropTypes.func,
  snackbarErrors: PropTypes.array,
  onSnackbarClose: PropTypes.func,
  isModalOpen: PropTypes.bool,
};

GruposPage.defaultProps = {
  getGrupos: () => {},
  resetStore: () => {},
  snackbarErrors: [],
  onSnackbarClose: () => {},
  isModalOpen: false,
};

export default GruposPage;
