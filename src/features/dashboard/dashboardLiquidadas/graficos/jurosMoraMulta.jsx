import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import { formatDate } from 'utils/format';
import colors from 'assets/styles/colors';
import PieGraph from 'common/charts/pieChart/pieGraph';
import DownloadButton from 'features/dashboard/commonViews/downloadButton';
import { saveNodeAsPng } from 'utils/htmlToImg';
import { Box } from '@material-ui/core';
import { Typography } from '@mui/material';
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

const title = 'Juros x Multa x Mora';
const arrayColors = [colors.terciary_color_600, colors.error_color_300, colors.primary_color_400];
const arrayTooltipTitles = ['Juros', 'Multa', 'Mora'];

const renderChartTooltipContent = (props) => {
  const { series, itemData } = props;
  const value = series?.data?.[itemData?.dataIndex].value;
  const formatValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  );
  return (
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
  );
};

const JurosMoraMulta = () => {
  const { dashboardData, dashboardFilterStartDate, dashboardFilterEndDate } = useDashboardState();
  const classes = useStyles();
  const cardRef = useRef(null);
  const data = [
    { id: 0, value: dashboardData?.juros.valor, label: 'Juros' },
    { id: 1, value: dashboardData?.multa.valor, label: 'Multa' },
    { id: 2, value: dashboardData?.mora.valor, label: 'Mora' },
  ];

  const getPercent = () => {
    const total = data.reduce((acc, item) => acc + item.value, 0);
    return data.map((item) => `${((item.value / total) * 100).toFixed(0)}%`);
  };

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
        hasHeader={false}
        percentValue={getPercent}
        arrayColors={arrayColors}
        arrayTooltipTitles={arrayTooltipTitles}
        hasPercent
        renderTooltip={(props) => (
          <BaseTooltipItemContent
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

export default JurosMoraMulta;
