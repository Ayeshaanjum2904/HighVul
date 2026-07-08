import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';

import { LineChart } from 'common/charts/lineChart';

import { HorizontalBarChart, BarChartLegend, VerticalBarChart } from 'common/charts/barChart';
import { saveNodeAsPng } from 'utils/htmlToImg';
import DetalheBarChart from './detalheChart';
import DownloadButton from '../downloadButton';
import CardTitle from '../cardTitle';
import ChartState from '../chartState';

import { cardChartStyles } from './cardChartStyles';

import './cardChart.scss';

const useStyles = makeStyles(cardChartStyles);

const selectChart = (isLine, isHorizontal, data, percentage) => {
  if (isLine) return <LineChart data={data} />;
  if (isHorizontal) return <HorizontalBarChart data={data} />;
  return <VerticalBarChart data={data} percentage={percentage} />;
};

const CardChart = ({
  dateFilter, data, title,
  SelectFilter, hideLegend, hideDetails,
  isLoading, isError, isEmpty, backgroundColor, isLine,
  isHorizontal, DetailBarChart, percentage,
  height,
}) => {
  const classes = useStyles({ isHorizontal, backgroundColor });
  const cardRef = useRef(null);

  return (
    <ChartState
      isLoading={isLoading}
      isError={isError}
      isEmpty={isEmpty}
      title={title}
      dateFilter={dateFilter}
      backgroundColor={backgroundColor}
    >
      <div className={classes.outer} ref={cardRef}>
        <div className={`dashboard__card-chart__container ${classes.container}`}>
          <div className={`dashboard__card-chart__container__header ${classes.header}`}>
            <div className="dashboard__card-chart__container__header_title">
              <CardTitle dateFilter={dateFilter} title={title} />
            </div>
            <div className="dashboard__card-chart__container__header_legenda">
              {hideLegend ? null : <BarChartLegend data={data} />}
            </div>
            <div
              className="dashboard__card-chart__container__header_filter"
              data-cy="download-button-chart"
            >
              {SelectFilter}
              <DownloadButton
                onClick={() => saveNodeAsPng(cardRef, title.concat('.png'))}
              />
            </div>
          </div>
          <div className="dashboard__card-chart__container_chart">
            <div style={{ height }}>
              {selectChart(isLine, isHorizontal, data, percentage)}
            </div>
          </div>
          <div className="dashboard__card-chart__container_detail">
            {hideDetails ? null : <DetailBarChart data={data} />}
          </div>
        </div>
      </div>
    </ChartState>
  );
};

CardChart.propTypes = {
  dateFilter: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.object,
  SelectFilter: PropTypes.any,
  hideLegend: PropTypes.bool,
  hideDetails: PropTypes.bool,
  isError: PropTypes.bool,
  isLoading: PropTypes.bool,
  isEmpty: PropTypes.bool,
  backgroundColor: PropTypes.string,
  isHorizontal: PropTypes.bool,
  DetailBarChart: PropTypes.any,
  isLine: PropTypes.bool,
  percentage: PropTypes.bool,
  height: PropTypes.number,
};

CardChart.defaultProps = {
  dateFilter: '',
  title: '',
  data: null,
  SelectFilter: null,
  hideLegend: false,
  hideDetails: false,
  isError: false,
  isLoading: false,
  isEmpty: false,
  backgroundColor: '#f7f9fc',
  isHorizontal: false,
  isLine: false,
  DetailBarChart: DetalheBarChart,
  percentage: false,
  height: null,
};

export default CardChart;
