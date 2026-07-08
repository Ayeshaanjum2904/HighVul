import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent,
} from 'common/layout/page';

import BreadCrumbConcessionarias from './views/breadCrumbConcessionarias';
import Filters from './views/filters';
import List from './views/concessionariasList';

import './concessionariasPage.scss';

const ConcessionariasPage = ({ getConcessionarias, resetStore }) => {
  useEffect(() => {
    getConcessionarias();
    return () => {
      resetStore();
    };
  }, [getConcessionarias, resetStore]);
  return (
    <Page minWidth="unset" hideFooter>
      <PageHeader>
        <PageSubTitle>
          <BreadCrumbConcessionarias />
        </PageSubTitle>
        <PageTitle>Concessionárias</PageTitle>
      </PageHeader>
      <PageContent>
        <div className="concessionarias__page__content">
          <div className="concessionarias__page__filters">
            <Filters />
          </div>
          <div className="concessionarias__page__list">
            <List />
          </div>
        </div>
      </PageContent>
    </Page>
  );
};

ConcessionariasPage.propTypes = {
  getConcessionarias: PropTypes.func,
  resetStore: PropTypes.func,
};

ConcessionariasPage.defaultProps = {
  getConcessionarias: () => {},
  resetStore: () => {},
};

export default ConcessionariasPage;
