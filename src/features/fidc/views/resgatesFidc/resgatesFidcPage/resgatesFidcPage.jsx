import React, { useState, useEffect, useCallback } from 'react';
import {
  Page,
  PageHeader,
  PageTitle,
  PageSubTitle,
  PageContent,
  PageFooter,
} from 'common/layout/page';
import useCustomFetch from 'hooks/useFetch';
import SnackbarList from 'common/snackbarList';
import resgateService from '../services/resgateService';
import {
  PageList, PageFilters, PageAreas,
} from './resgatesFidcPage.style';
import Breadcrumb from './views/breadCrumbResgatesFidc';
import ResgateList from './views/resgateList/resgateList';
import ResgateFooter from './views/resgateFooter/resgateFooter';
import ResgateFilters from './views/resgateFilters/resgateFilters';
import ResgateModal from './views/resgateModal/resgateModal';

const ResgatesFidcPage = () => {
  const [pageParams, setPageParams] = useState({
    page: 0,
    ipp: 25,
  });

  const [filters, setFilters] = useState({
    clickedFilter: false,
    status: null,
    titulo: null,
    oldStatus: null,
    oldTitulo: null,
    oldStartDate: null,
    oldEndDate: null,
  });

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [invalidDate, setInvalidDate] = useState(null);
  const [updateMessage, setUpdateMessage] = useState(false);
  const [{ loading, data, error }, fetchData] = useCustomFetch(
    () => resgateService.getResgates(pageParams, filters, startDate, endDate),
    [pageParams],
  );

  const [modal, setModal] = useState({ isOpen: false, resgate: undefined });

  const setModalResgate = (status = false, value = undefined) => {
    setModal({ isOpen: status, resgate: value });
  };

  useEffect(() => {
    if (filters.clickedFilter || updateMessage) {
      fetchData();
      setFilters({
        ...filters,
        clickedFilter: false,
        oldStatus: filters.status,
        oldTitulo: filters.titulo,
        oldStartDate: startDate,
        oldEndDate: endDate,
      });
      setUpdateMessage(false);
    }
  }, [endDate, fetchData, filters, startDate, updateMessage]);

  const [snackbar, setSnackbar] = useState({ nextId: 0, list: [] });

  const addSnackbar = useCallback((message, type) => {
    setSnackbar((prevState) => ({
      nextId: prevState.nextId + 1,
      list: [...prevState.list, {
        id: prevState.nextId, message, type,
      }],
    }));
  }, []);

  const closeSnackbar = useCallback((id) => {
    setSnackbar((prevState) => ({
      ...prevState,
      list: prevState.list.filter((s) => s.id !== id),
    }));
  }, []);

  const { total, mensagens } = data;
  return (
    <Page>
      <PageHeader>
        <PageSubTitle>
          <Breadcrumb />
        </PageSubTitle>
        <PageTitle>
          Resgates
        </PageTitle>
      </PageHeader>
      <PageContent>
        <PageAreas>
          <PageFilters>
            <ResgateFilters
              filters={filters}
              setFilter={setFilters}
              dates={{
                startDate,
                endDate,
                setStartDate,
                setEndDate,
                invalidDate,
                setInvalidDate,
              }}
              loading={loading}
            />
          </PageFilters>
          <PageList>
            <ResgateList
              loading={loading}
              data={mensagens}
              error={error}
              setModal={setModalResgate}
            />
          </PageList>
        </PageAreas>
      </PageContent>
      <PageFooter>
        <ResgateFooter
          loading={loading}
          total={total}
          pageParams={pageParams}
          setPageParams={setPageParams}
        />
      </PageFooter>
      <SnackbarList
        snackbarErrors={snackbar.list}
        onClose={(id) => closeSnackbar(id)}
      />
      {modal?.isOpen && (
        <ResgateModal
          close={() => setModalResgate()}
          resgate={modal?.resgate}
          addSnackbar={addSnackbar}
          getMensagens={fetchData}
          setUpdateMessage={setUpdateMessage}
          vigenciaAtiva={mensagens && mensagens.some((msg) => msg.status === 'A')}
        />
      )}
    </Page>
  );
};

export default ResgatesFidcPage;
