import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent, PageFooter,
} from 'common/layout/page';

import SnackbarList from 'common/snackbarList';
import NewPaginationFooter from 'common/layout/newPaginationFooter/newPaginationFooter';
import BreadCrumbContatos from './views/breadCrumbContatos';
import ContatosPageList from './views/contatosPageList';
import InputBusca from './views/inputBusca';
import CriarContatoButton from './views/criarContatoButton';
import ContatosModal from '../contatosModal';
import FilterButton from './views/filterButton';
import ExportarRelatorio from './views/exportarRelatorio';
import './contatosPage.scss';

const ContatosPage = ({
  getContatos, resetStore, resetModal,
  snackbarErrors, onSnackbarClose, sendContato, setContato,
  page, ipp, totalItems, isLoading, setPage, setIpp,
}) => {
  const [openModal, setModalOpen] = useState(false);

  const handleOpenCadastroModal = () => {
    setContato();
    setModalOpen(true);
  };

  const handleOpenEditarModal = (contato) => {
    setContato(contato);
    setModalOpen(true);
  };

  const handleModal = (status) => {
    setModalOpen(status);
    if (!status) resetModal();
  };

  useEffect(() => {
    getContatos();
    return () => {
      resetStore();
    };
  }, [getContatos, resetStore]);

  return (
    <Page>
      <PageHeader>
        <PageSubTitle>
          <BreadCrumbContatos />
        </PageSubTitle>
        <PageTitle>Contatos</PageTitle>
      </PageHeader>
      <PageContent>
        <div className="contatos__list-page__content">
          <div className="contatos__list-page__header">
            <div className="contatos__list-page__header_input-texto">
              <InputBusca />
            </div>
          </div>
          <div className="contatos__list-page__actions">
            <CriarContatoButton openModal={handleOpenCadastroModal} />
            <ExportarRelatorio />
            <div className="contatos__list-page__actions__filtrar">
              <FilterButton />
            </div>
          </div>
          <div className="contatos__list-page__list">
            <ContatosPageList openModalEdit={handleOpenEditarModal} />
          </div>
        </div>
      </PageContent>
      <PageFooter>
        <NewPaginationFooter
          ipp={ipp}
          totalItems={totalItems}
          page={page}
          loading={isLoading}
          setPageFetch={setPage}
          setIpp={setIpp}
        />
      </PageFooter>
      <ContatosModal
        onSubmit={() => sendContato(setModalOpen)}
        openModal={openModal}
        setModalOpen={handleModal}
      />
      <SnackbarList
        snackbarErrors={snackbarErrors}
        onClose={(id) => onSnackbarClose(id)}
      />
    </Page>
  );
};

ContatosPage.propTypes = {
  getContatos: PropTypes.func,
  resetStore: PropTypes.func,
  snackbarErrors: PropTypes.array,
  onSnackbarClose: PropTypes.func,
  sendContato: PropTypes.func.isRequired,
  page: PropTypes.number,
  ipp: PropTypes.number,
  totalItems: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
  setPage: PropTypes.func.isRequired,
  setIpp: PropTypes.func,
  setContato: PropTypes.func,
  resetModal: PropTypes.func,
};

ContatosPage.defaultProps = {
  getContatos: () => {},
  resetStore: () => {},
  snackbarErrors: [],
  onSnackbarClose: () => {},
  page: null,
  ipp: null,
  totalItems: null,
  setIpp: () => {},
  setContato: () => {},
  resetModal: () => {},
};

export default ContatosPage;
