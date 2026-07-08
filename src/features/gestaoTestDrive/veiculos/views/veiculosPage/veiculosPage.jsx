import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent,
} from 'common/layout/page';

import SplitView from 'common/layout/splitView';
import SnackbarList from 'common/snackbarList';

import { useLocation } from 'react-router';
import BreadCrumbVeiculos from './views/breadCrumbVeiculos';
import VeiculosDetalhe from '../veiculosDetalhe';
import VeiculosPageList from './views/veiculosPageList';
import InputBusca from './views/inputBusca';
import SelectMarca from './views/selectMarca';
import SelectStatus from './views/selectStatus';
import CadastroVeiculoButton from './views/cadastroVeiculoButton';
import FilterButton from './views/buttonFilter';

import './veiculosPage.scss';

const VeiculosPage = ({
  isOpen, closeDetalheVeiculo, getVeiculos, resetStore,
  snackbarErrors, onSnackbarClose, openDetalheVeiculo,
}) => {
  const location = useLocation();

  useEffect(() => {
    getVeiculos();
    return () => { resetStore(); };
  }, [getVeiculos, resetStore]);

  useEffect(() => {
    if (location.state?.veiculoId) {
      openDetalheVeiculo(location.state.veiculoId);
    }
  }, [location.state]);
  return (
    <SplitView
      open={isOpen}
      sideSheetProps={{
        onClickClose: () => closeDetalheVeiculo(),
        width: 400,
      }}
      renderSideSheetContent={() => <VeiculosDetalhe />}
    >
      <Page minWidth="unset" hideFooter>
        <PageHeader>
          <PageSubTitle>
            <BreadCrumbVeiculos />
          </PageSubTitle>
          <PageTitle>Veículos</PageTitle>
        </PageHeader>
        <PageContent>
          <div className="veiculos__list-page__content">
            <div
              className="veiculos__list-page__header"
              data-cy="veiculos-list-page-filters"
            >
              <div
                className="veiculos__list-page__header_input-texto"
                data-cy="input-texto"
              >
                <InputBusca />
              </div>
              <div className="veiculos__list-page__header_select-marca">
                <SelectMarca />
              </div>
              <div className="veiculos__list-page__header_select-status">
                <SelectStatus />
              </div>
              <div
                className="veiculos__list-page__header_filter-button"
                data-cy="filter-button"
              >
                <FilterButton textApply="Filtrar" textSelect="Filtrar" />
              </div>
              <div
                className="veiculos__list-page__header_cadastro-veiculo"
                data-cy="cadastro-veiculo"
              >
                <CadastroVeiculoButton />
              </div>
            </div>
            <div className="veiculos__list-page__list">
              <VeiculosPageList />
            </div>
          </div>
        </PageContent>
      </Page>
      <SnackbarList
        snackbarErrors={snackbarErrors}
        onClose={(id) => onSnackbarClose(id)}
      />
    </SplitView>
  );
};

VeiculosPage.propTypes = {
  closeDetalheVeiculo: PropTypes.func,
  getVeiculos: PropTypes.func,
  resetStore: PropTypes.func,
  isOpen: PropTypes.bool,
  snackbarErrors: PropTypes.array,
  onSnackbarClose: PropTypes.func,
  openDetalheVeiculo: PropTypes.func,
};

VeiculosPage.defaultProps = {
  closeDetalheVeiculo: () => {},
  getVeiculos: () => {},
  resetStore: () => {},
  isOpen: false,
  snackbarErrors: [],
  onSnackbarClose: () => {},
  openDetalheVeiculo: () => {},
};

export default VeiculosPage;
