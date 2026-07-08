import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent, PageFooter,
} from 'common/layout/page';

import SnackbarList from 'common/snackbarList';
import PaginationFooter from 'common/layout/paginationFooter';
import ButtonTooltipIcon from 'common/controls/buttonTooltipIcon';
import FilterIcon from 'assets/icons/filter-icon';
import { Divider } from '@mui/material';
import RenderIfPermission from 'modules/auth/guards/renderIfPermission';
import { permissions } from 'modules/auth/permissions';
import BreadCrumbPedidos from './views/breadCrumbPedidos';
import InputBusca from './views/inputBusca';
import SelectDataPedido from './views/selectDataPedido/index';
import SelectDataFaturamento from './views/selectDataFaturamento';
import SelectMarca from './views/selectMarca';
import SelectProduto from './views/selectProduto';
import SelectRegiao from './views/selectRegiao';
import SelectStatus from './views/selectStatus';
import ButtonFilter from './views/buttonFilter';
import SelectModalidade from './views/selectModalidade';
import PedidosList from './views/pedidosList';
import ExportarRelatorio from './views/exportarRelatorio';
import CancelarPedidos from './views/cancelarPedidos';
import AprovarAnaliseCreditoPedidos from './views/aprovarAnaliseCreditoPedidos';
import ReprovarAnaliseCreditoPedidos from './views/reprovarAnaliseCreditoPedidos';
import ModalConfirmacao from './views/cancelarPedidos/modalConfirmacao';
import ModalAviso from './views/cancelarPedidos/modalAviso';
import ModalMisto from './views/cancelarPedidos/modalMisto';
import ModalAnaliseConfirmacao from './views/analiseCreditoPedidos/modalAnaliseConfirmacao';
import ModalAnaliseAviso from './views/analiseCreditoPedidos/modalAnaliseAviso';
import ModalAnaliseMisto from './views/analiseCreditoPedidos/modalAnaliseMisto';
import PedidosFooter from './views/pedidosFooter';

import PedidoDetalheModal from '../pedidosDetalhe';

import './pedidosPage.scss';
import SelectVeiculo from './views/selectVeiculo';
import SelectConcessionaria from './views/selectConcessionaria';

const PedidosPage = ({
  getPedidos, resetStore, isDetalhesOpen, snackbarErrors, onSnackbarClose,
  page, ipp, totalItems, isLoading, setPage, setIpp,
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [isInvalidDate, setIsInvalidDate] = useState(false);

  const handleToggleFilters = () => {
    setShowFilters((v) => !v);
  };

  useEffect(() => {
    getPedidos();
    return () => { resetStore(); };
  }, [getPedidos, resetStore]);

  return (
    <Page>
      <PageHeader>
        <PageSubTitle>
          <BreadCrumbPedidos />
        </PageSubTitle>
        <PageTitle>Pedidos</PageTitle>
      </PageHeader>
      <PageContent>
        <div className="pedidos__page__content">
          <div className="pedidos__page__header">
            <div
              className={`pedidos__page__filters ${showFilters ? 'show-all' : ''}`}
              data-cy="pedidos-page-filters"
            >
              <div className="busca">
                <InputBusca />
              </div>
              <div className="concessionaria">
                <SelectConcessionaria />
              </div>
              <div className="pedido">
                <SelectDataPedido setInvalidDate={setIsInvalidDate} />
              </div>

              <div className={`filtros-condicionais ${!showFilters ? 'hidden' : ''}`}>
                <div className="veiculo">
                  <SelectVeiculo />
                </div>
                <div className="faturamento">
                  <SelectDataFaturamento />
                </div>
                <div className="status">
                  <SelectStatus />
                </div>
                <div className="produto">
                  <SelectProduto />
                </div>
                <div className="regiao">
                  <SelectRegiao />
                </div>
                <div className="brand">
                  <SelectMarca />
                </div>
                <div className="modalidade">
                  <SelectModalidade />
                </div>
              </div>
              <div className="botao-mais">
                <div className="botao-mais-filtros">
                  <ButtonTooltipIcon
                    title={showFilters ? 'Esconder filtros' : 'Mostrar filtros'}
                    className={`show-button ${!showFilters ? 'show-filters' : ''}`}
                    buttonAction={handleToggleFilters}
                  >
                    <FilterIcon />
                  </ButtonTooltipIcon>
                </div>
              </div>
            </div>
            <div
              className="botoes-filtro"
              style={{
                display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center',
              }}
            >
              <div className="botao-filtrar" style={{ width: '108px', minWidth: '108px', maxWidth: '108px' }}>
                <ButtonFilter isInvalidDate={isInvalidDate} />
              </div>
              <div className="botao-exportar" style={{ width: 'auto' }}>
                <ExportarRelatorio />
              </div>
              <div className="botao-cancelar" style={{ width: 'auto' }}>
                <CancelarPedidos />
              </div>
            </div>
          </div>
          <div className="pedidos__page__list">
            <PedidosList />
          </div>
          <PedidosFooter />
          <RenderIfPermission requireAny={[permissions.limitesAprovados.gestaoCredito]}>
            <Divider sx={{ color: '#E5E6EB' }} />
            <div className="pedidos__page__actions">
              <div className="pedidos__page__actions-container">
                <AprovarAnaliseCreditoPedidos />
                <ReprovarAnaliseCreditoPedidos />
              </div>
            </div>
          </RenderIfPermission>
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
          className="container pedidos"
        />

      </PageFooter>
      {
        isDetalhesOpen ? (
          <PedidoDetalheModal />
        ) : null
      }
      <ModalConfirmacao />
      <ModalAviso />
      <ModalMisto />
      <ModalAnaliseConfirmacao />
      <ModalAnaliseAviso />
      <ModalAnaliseMisto />
      <SnackbarList
        snackbarErrors={snackbarErrors}
        onClose={(id) => onSnackbarClose(id)}
      />
    </Page>
  );
};

PedidosPage.propTypes = {
  getPedidos: PropTypes.func.isRequired,
  resetStore: PropTypes.func.isRequired,
  isDetalhesOpen: PropTypes.bool.isRequired,
  snackbarErrors: PropTypes.array,
  onSnackbarClose: PropTypes.func,
  page: PropTypes.number,
  ipp: PropTypes.number,
  totalItems: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
  setPage: PropTypes.func.isRequired,
  setIpp: PropTypes.func,
};

PedidosPage.defaultProps = {
  snackbarErrors: [],
  onSnackbarClose: () => { },
  page: null,
  ipp: null,
  totalItems: null,
  setIpp: () => { },
};

export default PedidosPage;
