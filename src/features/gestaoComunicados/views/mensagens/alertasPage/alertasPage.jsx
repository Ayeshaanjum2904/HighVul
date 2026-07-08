import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent,
} from 'common/layout/page';
import BreadCrumbAlertaPage from './views/breadCrumbAlertaPage';
import AlertasModal from '../alertasModal';
import CriacaoDeAlertasList from './views/criacaoDeAlertas';
import './alertasPage.scss';
import HeaderFilter from './views/headerFilter/headerFilter';

const AlertasPage = ({
  isModalAlertaOpen, getAlertas, getFilters, resetStore,
}) => {
  useEffect(() => {
    getFilters();
    getAlertas();
    return () => { resetStore(); };
  }, [getAlertas, resetStore]);

  return (
    <>
      <Page minWidth="unset" hideFooter>
        <PageHeader>
          <PageSubTitle>
            <BreadCrumbAlertaPage />
          </PageSubTitle>
          <PageTitle>Criação de alertas</PageTitle>
        </PageHeader>
        <PageContent>
          <div className="alertas__page__content">
            <div
              className="alertas__page__create"
              data-cy="criar-alertas"
            >
              <HeaderFilter />
            </div>
            <div className="alertas__page__list">
              <CriacaoDeAlertasList />
            </div>
          </div>
        </PageContent>
      </Page>
      {
        isModalAlertaOpen ? (
          <AlertasModal />
        ) : null
      }
    </>
  );
};

AlertasPage.propTypes = {
  isModalAlertaOpen: PropTypes.bool,
  getAlertas: PropTypes.func,
  resetStore: PropTypes.func,
  getFilters: PropTypes.func,
};

AlertasPage.defaultProps = {
  isModalAlertaOpen: false,
  getAlertas: () => {},
  resetStore: () => {},
  getFilters: () => {},
};

export default AlertasPage;
