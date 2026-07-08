import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Scrollbars } from 'react-custom-scrollbars';

import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent,
} from 'common/layout/page';

import BreadCrumbDashboard from './views/breadCrumbDashboard';
import ErrorFooter from './views/errorFooter';
import DashboardFilter from './views/dashboardFilter';
import DashboardCards from './views/dashboardCards';
import PedidosArea from './views/pedidosArea';
import PedidosPeriodo from './views/pedidosPeriodo';
import DonutModelo from './views/donuts/donutModelo';
import DonutModalidade from './views/donuts/donutModalidade';
import DonutPedidoIndustrial from './views/donuts/donutPedidoIndustrial';
import DonutAprovacaoComercial from './views/donuts/donutAprovacaoComercial';
import DonutAprovacaoCredito from './views/donuts/donutAprovacaoCredito';
import DonutPedidosFaturados from './views/donuts/donutPedidosFaturados';
import DonutTipoPedidos from './views/donuts/donutTipoPedidos';
import DisplayFilterChips from './views/dashboardFilterChips';
import CollapseRegionais from './views/collapseRegionais';
import CollapseConcessionarias from './views/collapseConcessionarias';

import './principalPage.scss';

const useStyles = makeStyles({
  icon: {
    fontSize: 10,
    color: '#555770',
    margin: '0 4px 0 4px',
  },
  page: {
    gridTemplateRows: 'auto minmax(0, 1fr) auto',
  },

  header: {
    borderBottom: 'solid 1px #C5CEE0',
  },
});

const DashboardPage = ({
  isError, resetStore,
}) => {
  useEffect(
    () => () => { resetStore(); },
    [resetStore],
  );

  const classes = useStyles();

  return (
    <Page minWidth="unset" className={classes.page}>
      <div className={classes.header}>
        <PageHeader>
          <PageSubTitle>
            <BreadCrumbDashboard />
          </PageSubTitle>
          <PageTitle>Test Drive</PageTitle>

          <div
            className="dashboard__page__filter"
            data-cy="dashboard-page-filters"
          >
            <DashboardFilter />
            <DisplayFilterChips />
          </div>

        </PageHeader>
      </div>
      <PageContent>
        <Scrollbars>
          <div className="dashboard__page__content">
            <div className="dashboard__page__content__cards">
              <DashboardCards />
            </div>
            <div className="dashboard__page__content__charts">
              <PedidosPeriodo />
              <PedidosArea />
            </div>
            <div className="dashboard__page__content__donut-vertical">
              <DonutModalidade />
              <DonutTipoPedidos />
              <DonutPedidoIndustrial />
            </div>
            <div className="dashboard__page__content__donut-horizontal">
              <DonutModelo />
              <DonutAprovacaoComercial />
              <DonutAprovacaoCredito />
              <DonutPedidosFaturados />
            </div>
            <div className="dashboard__page__content__regionais">
              <CollapseRegionais />
            </div>
            <div className="dashboard__page__content__concessionarias">
              <CollapseConcessionarias />
            </div>
          </div>
        </Scrollbars>
      </PageContent>
      {isError ? <ErrorFooter /> : null}
    </Page>
  );
};

DashboardPage.propTypes = {
  isError: PropTypes.bool,
  resetStore: PropTypes.func,
};

DashboardPage.defaultProps = {
  isError: false,
  resetStore: () => {},
};

export default DashboardPage;
