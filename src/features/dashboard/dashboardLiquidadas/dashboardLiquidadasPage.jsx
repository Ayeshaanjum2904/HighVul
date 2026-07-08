import React, { useEffect } from 'react';
import {
  Page, PageHeader, PageTitle, PageContent, PageSubTitle,
} from 'common/layout/page';
import { Box, Typography, useMediaQuery } from '@mui/material';
import colors from 'assets/styles/colors';
import ExpandPanel from 'common/layout/expandPanel/expandPanel';
import { makeStyles } from '@material-ui/styles';
import Scrollbars from 'react-custom-scrollbars';
import ClearButton from 'common/controls/clearButton';
import BreadCrumbDashboardLiquidadasFidc from './breadCrumbDashboardLiquidadasFidc';
import RelatorioFidc from './views/relatorioFidc/relatorioFidc';
import DashboardLiquidadasFilters from './dashboardLiquidadasFilters';
import FilterButton from '../../../common/controls/buttonFilter';
import { useDashboardContext } from './context/dashboard';
import SliderCards from './views/resumoCards/sliderCards';
import './views/resumoCards/sliderCards.scss';
import LiquidadasProdutos from './graficos/liquidadasProdutos';
import JurosMoraMulta from './graficos/jurosMoraMulta';

const useStyles = makeStyles(() => ({
  sliderContainer: {
    display: 'flex',
    width: 'calc(100vw - 352px)',
    justifyContent: 'center',
    backgroundColor: colors.secundary_color_100_36,
    paddingTop: '5px',
    minWidth: '1000px',
  },
}));

const DashboardLiquidadasPage = () => {
  const classes = useStyles();
  const breakPoint = useMediaQuery('(min-width:1591px)');
  const [
    {
      dashboardFilterStartDate,
      dashboardFilterEndDate,
      dashboardFilterConcesionarias,
      dashboardFilterRegionais,
      dashboardLoading,
      isTouched,
    }, { getDashboard, setIsTouched, clearAllFilters }] = useDashboardContext();

  useEffect(() => { getDashboard(); }, []);

  const isFilterSelected = dashboardFilterConcesionarias.length
  || dashboardFilterRegionais.length || (dashboardFilterStartDate && dashboardFilterEndDate);

  return (
    <Page hideFooter>
      <PageHeader>
        <PageSubTitle>
          <BreadCrumbDashboardLiquidadasFidc />
        </PageSubTitle>
        <PageTitle>
          Duplicatas Liquidadas
        </PageTitle>
      </PageHeader>
      <PageContent>
        <Scrollbars>
          <Box
            component="div"
            paddingLeft="32px"
            paddingRight="16px"
            display="flex"
            flexDirection="column"
            gap="8px"
          >
            <RelatorioFidc />
            <ExpandPanel
              title="Dashboard"
              dataCy="dashboard-fidc-expand-panel"
              minWidth="1035px"
            >
              <Typography
                fontWeight={450}
                fontSize={14}
                marginBottom="16px"
                color={colors.secundary_color_700}
              >
                Selecione os filtros e em seguida clique em filtrar para atualizar o dashboard:
              </Typography>
              <Box sx={{
                display: 'flex',
                flexDirection: breakPoint ? 'row' : 'column',
                gap: '16px',
                alignItems: breakPoint ? 'end' : 'start',
                paddingBottom: '10px',
              }}
              >
                <DashboardLiquidadasFilters />
                <Box width={!isTouched || dashboardLoading ? '86px' : '135px'}>
                  {
                    !isTouched || dashboardLoading
                      ? (
                        <FilterButton
                          isLoading={dashboardLoading}
                          isFilterSelected={isFilterSelected || isTouched}
                          textSelect="Filtrar"
                          textApply="Filtrar"
                          onClick={() => {
                            getDashboard();
                            setIsTouched(true);
                          }}
                        />
                      )
                      : (
                        <ClearButton
                          disabled={!isFilterSelected || dashboardLoading}
                          onClick={clearAllFilters}
                          dataCy="FilterClearButton"
                        >
                          Limpar filtros
                        </ClearButton>
                      )
                  }
                </Box>
              </Box>
              <div className={classes.sliderContainer}>
                <div className="slider-card-container">
                  <SliderCards />
                </div>
              </div>
              <Box width="100%" height="100%" display="flex" gap="10px">
                <LiquidadasProdutos />
                <JurosMoraMulta />
              </Box>
            </ExpandPanel>
          </Box>
        </Scrollbars>
      </PageContent>
    </Page>
  );
};

DashboardLiquidadasPage.propTypes = {
};

DashboardLiquidadasPage.defaultProps = {
};

export default DashboardLiquidadasPage;
