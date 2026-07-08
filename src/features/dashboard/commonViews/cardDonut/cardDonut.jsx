import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import DonutChart from 'common/charts/donutChart/donutChart';
import DonutChartLegend from 'common/charts/donutChart/donutChartLegend/donutChartLegend';
import { saveNodeAsPng } from 'utils/htmlToImg';
import DownloadButton from '../downloadButton';
import CardTitle from '../cardTitle';
import ChartState from '../chartState';

import './cardDonut.scss';

import { cardDonutStyles } from './cardDonutStyles';

const useStyles = makeStyles(cardDonutStyles);

const CardDonut = ({
  data, dateFilter, title, isHorizontal,
  isLoading, isError, isEmpty,
}) => {
  const classes = useStyles(isHorizontal);
  const cardRef = useRef(null);

  return (
    <ChartState
      isLoading={isLoading}
      isError={isError}
      isEmpty={isEmpty}
      title={title}
      dateFilter={dateFilter}
      top="19px"
      left="19px"
      iconSmall={isHorizontal}
      breakLine={!isHorizontal}
    >
      <div className={classes.outer} ref={cardRef}>
        <div className={`dashboard__card-donut__container ${classes.container}`}>
          <div className="dashboard__card-donut__container_title">
            <CardTitle dateFilter={dateFilter} title={title} />
          </div>
          <div className={`dashboard__card-donut__container_donut ${classes.donut}`}>
            <DonutChart data={data} />
          </div>
          <div className="dashboard__card-donut__container_legend">
            <DonutChartLegend data={data} />
          </div>

        </div>
        <div
          className="dashboard__card-donut__container_button"
          data-cy="download-button-donut"
        >
          <DownloadButton
            onClick={() => saveNodeAsPng(cardRef, title.concat('.png'))}
          />
        </div>
      </div>
    </ChartState>
  );
};

CardDonut.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
  dateFilter: PropTypes.string,
  isHorizontal: PropTypes.bool,
  isError: PropTypes.bool,
  isLoading: PropTypes.bool,
  isEmpty: PropTypes.bool,
};

CardDonut.defaultProps = {
  data: [],
  title: '',
  dateFilter: '',
  isHorizontal: false,
  isError: false,
  isLoading: false,
  isEmpty: false,
};

export default CardDonut;
