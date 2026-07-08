import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'common/controls/button';

import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent, PageFooter,
} from 'common/layout/page';
import PaginationFooter from 'common/layout/paginationFooter';
import Mixpanel from 'modules/tracking/Mixpanel';
import {
  NovaOrdemButton,
  ListWrapper,
  OrdensPageContent,
  ControlsContainer,
  ButtonsWrapper,
} from './ordens.style';
import BreadCrumbOrdem from './views/breadCrumbOrdem';
import Filters from './views/filters';
import OrdensList from './views/ordensList';
import ButtonExport from './views/buttonExport';
import ButtonFilter from './views/buttonFilter';

import ModalNovaOrdem from './views/modalNovaOrdem';
import ModalVincularCondicao from './views/modalVincularCondicao';
import ModalVincularCondicaoAVista from './views/modalVincularCondicaoAVista';

const Ordens = ({
  getProdutosList, getStatusList, getOrdens, ordensList,
  ipp, totalItems, page, isLoading, setPage, setIpp, setModalOrdem, isModalOrdemOpen,
  isModalVincularCondicaoOpen, setModalVincularCondicao, selectedOrdem,
  condicoesComerciais, loadingCondicoes, getCondicoesComerciais,
  isModalVincularCondicaoAVistaOpen, setModalVincularCondicaoAVista, selectedOrdemAVista,
  condicoesAVista, loadingCondicoesAVista, getCondicoesAVista, resetStore,
}) => {
  useEffect(() => {
    getProdutosList();
    getStatusList();
    getOrdens();
    return () => { resetStore(); };
  }, [getProdutosList, getStatusList, getOrdens, resetStore]);

  const handleOpenModal = () => {
    Mixpanel.trackButtonClick('criar_nova_ordem', 'ordens');
    setModalOrdem(true);
  };

  return (
    <>
      <Page>
        <PageHeader>
          <PageSubTitle>
            <BreadCrumbOrdem />
          </PageSubTitle>
          <PageTitle>Ordens</PageTitle>
        </PageHeader>
        <PageContent>
          <OrdensPageContent>
            <ControlsContainer>
              <Filters />
              <ButtonsWrapper>
                <ButtonFilter />
                <ButtonExport />
                <NovaOrdemButton className="buttonNovaOrdem">
                  <Button onClick={handleOpenModal}>
                    Criar nova ordem
                  </Button>
                </NovaOrdemButton>
              </ButtonsWrapper>
            </ControlsContainer>
            <ListWrapper>
              <OrdensList
                data={ordensList}
                isLoading={isLoading}
              />
            </ListWrapper>
          </OrdensPageContent>
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
      </Page>
      {
        isModalOrdemOpen && (
          <ModalNovaOrdem
            setOpen={setModalOrdem}
          />
        )
      }
      {
        isModalVincularCondicaoOpen && (
          <ModalVincularCondicao
            open={isModalVincularCondicaoOpen}
            onClose={() => setModalVincularCondicao(false)}
            selectedOrdem={selectedOrdem}
            condicoesComerciais={condicoesComerciais}
            loadingCondicoes={loadingCondicoes}
            onLoadData={getCondicoesComerciais}
          />
        )
      }
      {
        isModalVincularCondicaoAVistaOpen && (
          <ModalVincularCondicaoAVista
            open={isModalVincularCondicaoAVistaOpen}
            onClose={() => setModalVincularCondicaoAVista(false)}
            selectedOrdem={selectedOrdemAVista}
            condicoes={condicoesAVista}
            loadingCondicoes={loadingCondicoesAVista}
            onLoadCondicoes={getCondicoesAVista}
          />
        )
      }
    </>
  );
};

Ordens.propTypes = {
  getProdutosList: PropTypes.func.isRequired,
  getStatusList: PropTypes.func.isRequired,
  getOrdens: PropTypes.func.isRequired,
  ordensList: PropTypes.array,
  page: PropTypes.number,
  ipp: PropTypes.number,
  totalItems: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
  setPage: PropTypes.func.isRequired,
  setIpp: PropTypes.func,
  setModalOrdem: PropTypes.func.isRequired,
  isModalOrdemOpen: PropTypes.bool.isRequired,
  isModalVincularCondicaoOpen: PropTypes.bool.isRequired,
  setModalVincularCondicao: PropTypes.func.isRequired,
  selectedOrdem: PropTypes.object,
  condicoesComerciais: PropTypes.array,
  loadingCondicoes: PropTypes.object,
  getCondicoesComerciais: PropTypes.func.isRequired,
  isModalVincularCondicaoAVistaOpen: PropTypes.bool,
  setModalVincularCondicaoAVista: PropTypes.func,
  selectedOrdemAVista: PropTypes.object,
  condicoesAVista: PropTypes.array,
  loadingCondicoesAVista: PropTypes.object,
  getCondicoesAVista: PropTypes.func,
  resetStore: PropTypes.func.isRequired,
};

Ordens.defaultProps = {
  ordensList: [],
  page: 0,
  ipp: 0,
  totalItems: 0,
  setIpp: () => { },
  selectedOrdem: null,
  condicoesComerciais: [],
  loadingCondicoes: {},
  isModalVincularCondicaoAVistaOpen: false,
  setModalVincularCondicaoAVista: () => { },
  selectedOrdemAVista: null,
  condicoesAVista: [],
  loadingCondicoesAVista: {},
  getCondicoesAVista: () => { },
};
export default Ordens;
