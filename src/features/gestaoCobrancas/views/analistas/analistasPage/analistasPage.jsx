import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent,
} from 'common/layout/page';

import SnackbarList from 'common/snackbarList';
import BreadCrumbAnalistas from './views/breadCrumbAnalistas';
import AdicionarRegional from './views/adicionarRegionalButton';
import BrandFilter from './views/selectMarca';
import RegionalFilter from './views/selectRegional';
import AssociacaoList from './views/analistasList';
import AnalistasModal from '../analistasModal';
import FilterButton from './views/filterButton';
import './analistasPage.scss';

const AnalistasPage = ({
  getAssociacoes, isModalOpen, resetStore, snackbarErrors, onSnackbarClose,
}) => {
  useEffect(() => {
    getAssociacoes();
    return () => {
      resetStore();
    };
  }, [getAssociacoes, resetStore]);

  return (
    <Page hideFooter>
      <PageHeader>
        <PageSubTitle>
          <BreadCrumbAnalistas />
        </PageSubTitle>
        <PageTitle>Associar Analistas</PageTitle>
      </PageHeader>
      <PageContent>
        <div className="analistas__page__content">
          <div className="analistas__page__filters">
            <div className="analistas__page__filters__marca">
              <BrandFilter />
            </div>
            <div className="analistas__page__filters__regional">
              <RegionalFilter />
            </div>
            <div className="analistas__page__filters__button-busca">
              <FilterButton
                textApply="Filtrar"
                textSelect="Filtrar"
              />
            </div>
            <div className="analistas__page__filters__button-new">
              <AdicionarRegional />
            </div>
          </div>
          <div className="analistas__page__list">
            <AssociacaoList />
          </div>
        </div>
      </PageContent>
      {isModalOpen ? (<AnalistasModal />) : null }
      <SnackbarList
        snackbarErrors={snackbarErrors}
        onClose={(id) => onSnackbarClose(id)}
      />
    </Page>
  );
};

AnalistasPage.propTypes = {
  resetStore: PropTypes.func.isRequired,
  getAssociacoes: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool,
  snackbarErrors: PropTypes.array,
  onSnackbarClose: PropTypes.func,
};

AnalistasPage.defaultProps = {
  isModalOpen: false,
  snackbarErrors: [],
  onSnackbarClose: () => {},
};

export default AnalistasPage;
