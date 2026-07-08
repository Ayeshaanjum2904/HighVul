import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent, PageFooter,
} from 'common/layout/page';
import SnackbarList from 'common/snackbarList';
import PaginationFooter from 'common/layout/paginationFooter';
import Breadcrumb from './views/breadCrumbComunicados';
import ComunicadosModal from '../comunicadosModal';
import ComunicadosList from './views/comunicadosLista';
import HeaderFilter from './views/headerFilter/headerFilter';

import './comunicadosPage.scss';

const ComunicadosPage = ({
  resetStore, isModalOpen, getFilters, getComunicados, snackbarErrors,
  onSnackbarClose, page, ipp, totalItems, isLoading, setPage, setIpp,
}) => {
  useEffect(() => {
    getFilters();
    getComunicados();
    return () => { resetStore(); };
  }, [resetStore, getComunicados]);
  return (
    <Page>
      <PageHeader>
        <PageSubTitle>
          <Breadcrumb />
        </PageSubTitle>
        <PageTitle>
          Central de comunicados
        </PageTitle>
      </PageHeader>
      <PageContent>
        <div
          className="comunicados-page__content"
        >
          <div
            className="comunicados-page__content__button-cadastro"
            data-cy="botao-cadastro"
          >
            <HeaderFilter />
          </div>
          <div
            className="comunicados-page__content__list"
            data-cy="listagem-comunicados"
          >
            <ComunicadosList />
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
        onClose={(id) => onSnackbarClose(id)}
      />
      {isModalOpen
        ? <ComunicadosModal />
        : null}
    </Page>
  );
};

ComunicadosPage.propTypes = {
  isModalOpen: PropTypes.bool,
  resetStore: PropTypes.func,
  getFilters: PropTypes.func,
  getComunicados: PropTypes.func,
  snackbarErrors: PropTypes.array,
  onSnackbarClose: PropTypes.func,
  page: PropTypes.number,
  ipp: PropTypes.number,
  totalItems: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
  setPage: PropTypes.func.isRequired,
  setIpp: PropTypes.func,
};

ComunicadosPage.defaultProps = {
  isModalOpen: false,
  resetStore: () => {},
  getFilters: () => {},
  getComunicados: () => {},
  onSnackbarClose: () => {},
  snackbarErrors: [],
  page: null,
  ipp: null,
  totalItems: null,
  setIpp: () => {},
};

export default ComunicadosPage;
