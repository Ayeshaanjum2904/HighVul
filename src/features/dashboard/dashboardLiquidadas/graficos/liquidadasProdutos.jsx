import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import colors from 'assets/styles/colors';
import { Box, Typography } from '@mui/material';
import DownloadButton from 'features/dashboard/commonViews/downloadButton';
import PieGraph from 'common/charts/pieChart/pieGraph';
import { saveNodeAsPng } from 'utils/htmlToImg';
import { formatDate } from 'utils/format';
import { useDashboardState } from '../context/dashboard';
import BaseTooltipItemContent from './baseTooltipItemContent';

const useStyles = makeStyles(() => ({
  dashboardContainer: {
    backgroundColor: colors.secundary_color_100_36,
    margin: '16px 0',
    borderRadius: '4px',
    padding: '16px',
    width: '100%',
  },
}));

const title = 'Duplicatas liquidadas x Produtos';
const arrayColors = [colors.primary_color_700, colors.terciary_color_600];
const arrayTooltipTitles = ['Em estoque x Liquidadas', 'Vendidos x Liquidadas'];

const renderChartTooltipContent = (props) => {
  const { series, itemData } = props;
  const value = series?.data?.[itemData?.dataIndex].value;
  const formatValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  );
  const total = series?.data?.reduce((acc, d) => (acc + (d.value || 0)), 0);
  const percent = Math.round(
    total > 0 ? (100 * (value / total)) : 0,
  );
  return (
    <>
      <Typography sx={{
        fontSize: '10px',
        fontWeight: '500',
        lineHeight: '12px',
        textAlign: 'left',
        color: colors.secundary_color_800,
      }}
      >
        {formatValue}
      </Typography>
      <Typography sx={{
        fontSize: '10px',
        fontWeight: '500',
        lineHeight: '12px',
        textAlign: 'left',
        color: colors.secundary_color_800,
      }}
      >
        {`${percent}% do total`}
      </Typography>
    </>
  );
};

const LiquidadasProdutos = () => {
  const classes = useStyles();
  const cardRef = useRef(null);
  const { dashboardData, dashboardFilterStartDate, dashboardFilterEndDate } = useDashboardState();
  const data = [
    { id: 0, value: dashboardData?.vendidos.valor, label: 'Veículos vendidos' },
    { id: 1, value: dashboardData?.emEstoque.valor, label: 'Veículos em estoque' },
  ];

  return (
    <Box className={classes.dashboardContainer} ref={cardRef}>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Box
            sx={{
              margin: 0,
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '18px',
            }}
          >
            {title}
          </Box>
          <Box
            sx={{
              marginBottom: '16px',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '24px',
            }}
          >
            {formatDate(dashboardFilterStartDate, 'DD MMM YYYY')}
            {' '}
            -
            {' '}
            {formatDate(dashboardFilterEndDate, 'DD MMM YYYY')}
          </Box>
        </Box>
        <Box>
          <DownloadButton
            onClick={() => saveNodeAsPng(cardRef, title.concat('.png'))}
          />
        </Box>
      </Box>
      <PieGraph
        infoGraph={data}
        headerDescription="Produto"
        headerValue="Valor"
        arrayColors={arrayColors}
        arrayTooltipTitles={arrayTooltipTitles}
        renderTooltip={(props) => (
          <BaseTooltipItemContent
            height="50px"
            width="130px"
            chartProps={props}
            chartColors={arrayColors}
            arrayTooltipTitles={arrayTooltipTitles}
            renderChartTooltipContent={renderChartTooltipContent}
          />
        )}
      />
    </Box>
  );
};

export default LiquidadasProdutos;
