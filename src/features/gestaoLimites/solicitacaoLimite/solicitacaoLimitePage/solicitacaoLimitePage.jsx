import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent, PageFooter,
} from 'common/layout/page';

import PaginationFooter from 'common/layout/paginationFooter';
import BreadCrumbLimite from './views/breadCrumbLimite';
import TextFilter from './views/textFilter';
import SelectRegiao from './views/selectRegiao';
import SelectStatus from './views/selectStatus';
import SolicitacaoLimiteList from './views/solicitacaoLimiteList';
import SolicitaoLimiteModal from '../solicitacaoLimiteDetalhe';
import ButtonFilter from './views/buttonFilter';

import './solicitacaoLimitePage.scss';

const SolicitacaoLimitePage = ({
  getSolicitacoes, resetStore, isDetalhesOpen, setTexto, texto,
  page, ipp, totalItems, isLoading, setPage, setIpp,
}) => {
  useEffect(() => {
    getSolicitacoes(true);
    return () => { resetStore(); };
  }, [getSolicitacoes, resetStore]);

  return (
    <>
      <Page>
        <PageHeader>
          <PageSubTitle>
            <BreadCrumbLimite />
          </PageSubTitle>
          <PageTitle>Solicitações de Alteração de Limite</PageTitle>
        </PageHeader>
        <PageContent>
          <div className="solicitacao-limite__page__content">
            <div className="solicitacao-limite__page__filter-container">
              <div className="solicitacao-limite__page__filter-text">
                <TextFilter
                  placeholder="Buscar concessionária ou tipo de solicitação"
                  setTexto={setTexto}
                  texto={texto}
                  getInfo={getSolicitacoes}
                />
              </div>
              <div className="solicitacao-limite__page__filter-regiao">
                <SelectRegiao />
              </div>
              <div className="solicitacao-limite__page__filter-status">
                <SelectStatus />
              </div>
              <div className="solicitacao-limite__page__filter-button">
                <ButtonFilter />
              </div>
            </div>
            <div className="solicitacao-limite__page__list">
              <SolicitacaoLimiteList />
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
      </Page>
      {
        isDetalhesOpen ? (
          <SolicitaoLimiteModal />
        ) : null
      }
    </>
  );
};
SolicitacaoLimitePage.propTypes = {
  getSolicitacoes: PropTypes.func.isRequired,
  resetStore: PropTypes.func.isRequired,
  setTexto: PropTypes.func.isRequired,
  isDetalhesOpen: PropTypes.bool,
  texto: PropTypes.string,
  page: PropTypes.number,
  ipp: PropTypes.number,
  totalItems: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
  setPage: PropTypes.func.isRequired,
  setIpp: PropTypes.func.isRequired,
};

SolicitacaoLimitePage.defaultProps = {
  isDetalhesOpen: false,
  texto: '',
  page: null,
  ipp: null,
  totalItems: null,
};

export default SolicitacaoLimitePage;
