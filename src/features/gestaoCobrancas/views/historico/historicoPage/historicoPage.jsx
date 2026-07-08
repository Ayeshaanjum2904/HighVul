import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent,
} from 'common/layout/page';

import BreadCrumbHistorico from './views/breadCrumbHistorico';
import HistoricoList from './views/historicoList';
import Filters from './views/filters';
import ModalDetail from '../historicoDetalhe';

import './historicoPage.scss';

const HistoricoPage = ({
  resetStore, getHistorico, isModalOpen,
}) => {
  useEffect(() => {
    getHistorico();
    return () => {
      resetStore();
    };
  }, [getHistorico, resetStore]);

  return (
    <Page minWidth="unset" hideFooter>
      <PageHeader>
        <PageSubTitle>
          <BreadCrumbHistorico />
        </PageSubTitle>
        <PageTitle>Histórico de envios</PageTitle>
      </PageHeader>
      <PageContent>
        <div className="historico__page__content">
          <div className="historico__page__content_filters">
            <Filters />
          </div>
          <div className="historico__page__content_list">
            <HistoricoList />
          </div>
        </div>
        {isModalOpen ? <ModalDetail /> : null}
      </PageContent>
    </Page>
  );
};

HistoricoPage.propTypes = {
  resetStore: PropTypes.func,
  getHistorico: PropTypes.func,
  isModalOpen: PropTypes.bool,
};

HistoricoPage.defaultProps = {
  resetStore: () => {},
  getHistorico: () => {},
  isModalOpen: false,
};

export default HistoricoPage;
