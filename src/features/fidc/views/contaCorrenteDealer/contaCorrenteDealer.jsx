import React, { useEffect } from 'react';

import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent, PageFooter,
} from 'common/layout/page';
import PropTypes from 'prop-types';
import PaginationFooter from 'common/layout/paginationFooter';
import BreadCrumbContaCorrenteDealer from './views/breadCrumbContaCorrenteDealer';

import FilterAndButtons from './views/filterAndButtons';
import { ListWrapper, PageContainer, SubText } from './contaCorrenteDealer.style';
import ContaCorrenteList from './views/contaCorrenteList/index';

const ContaCorrenteDealer = ({
  getContasCorrentes, resetStore, data, page, ipp, totalItems, isLoading, setPage, setIpp,
}) => {
  useEffect(() => {
    getContasCorrentes();
    return () => { resetStore(); };
  }, [resetStore, getContasCorrentes]);

  return (
    <Page>
      <PageHeader>
        <PageSubTitle>
          <BreadCrumbContaCorrenteDealer />
        </PageSubTitle>
        <PageTitle>Conta Corrente | Dealer</PageTitle>
        <SubText>
          Insira os dados nos filtros abaixo e em seguida clique em filtrar
        </SubText>
      </PageHeader>
      <PageContent>
        <PageContainer>
          <FilterAndButtons />
          <ListWrapper>
            <ContaCorrenteList
              data={data}
              isLoading={isLoading}
            />
          </ListWrapper>
        </PageContainer>
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
  );
};

ContaCorrenteDealer.propTypes = {
  getContasCorrentes: PropTypes.func,
  resetStore: PropTypes.func,
  data: PropTypes.array,
  page: PropTypes.number,
  ipp: PropTypes.number,
  totalItems: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
  setPage: PropTypes.func.isRequired,
  setIpp: PropTypes.func,
};
ContaCorrenteDealer.defaultProps = {
  getContasCorrentes: () => { },
  resetStore: () => { },
  data: [],
  page: 0,
  ipp: 0,
  totalItems: 0,
  setIpp: () => { },
};

export default ContaCorrenteDealer;
