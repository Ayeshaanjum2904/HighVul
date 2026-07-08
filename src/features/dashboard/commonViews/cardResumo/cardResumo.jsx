import React from 'react';
import PropTypes from 'prop-types';

import { XCircle } from 'react-feather';
// import { Tooltip as TooltipCard } from '@material-ui/core';
// import HelpIcon from '@material-ui/icons/Help';
import CircularProgress from '@material-ui/core/CircularProgress';
import colors from 'assets/styles/colors';
import CardIcon from './cardResumoIcon';
import CardTooltip from './cardResumoTooltip';

import './cardResumo.scss';

const DataRow = ({
  // eslint-disable-next-line react/prop-types
  label, value, percent,
}) => (
  <div className="dashboard__card-resumo__data-row">

    <div className="dashboard__card-resumo__data-row_label">
      {label}
      <div className="dashboard__card-resumo__data-row_label-tooltip">
        {label}
      </div>
    </div>

    <div className="dashboard__card-resumo__data-row_value">
      {value}
    </div>
    <div className="dashboard__card-resumo__data-row_percent">
      {`${(percent)}%`}
    </div>
  </div>
);

const CardResumo = ({
  item, isLoading, isError, since,
}) => {
  if (isLoading) {
    return (
      <div className="dashboard__card-resumo__container">
        <div className="dashboard__card-resumo__container__loading">
          <CircularProgress
            color="inherit"
            size="30px"
          />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="dashboard__card-resumo__container">
        <div className="dashboard__card-resumo__container__error">
          <div className="dashboard__card-resumo__container__error_icon">
            <XCircle color={colors.error_color_300} />
          </div>
          <div className="dashboard__card-resumo__container__error_message">
            Não foi possível exibir os dados
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard__card-resumo__container">
      <div className="dashboard__card-resumo__container__header">
        <div className="dashboard__card-resumo__container__header_value">
          {item?.total}
        </div>
        <div className="dashboard__card-resumo__container__header_icon">
          <CardIcon etapa={item?.id} />
        </div>
      </div>
      <div className="dashboard__card-resumo__container__content">
        {item?.label}
        <CardTooltip etapa={item?.id} />
      </div>
      {since ? (<div className="dashboard__card-resumo__container__content"><span>*A partir do dia 05/07/2021</span></div>) : null}
      <div className="dashboard__card-resumo__container__footer">
        {item.id !== 'faturado' ? (Array.isArray(item?.data) ? (item?.data || []) : []).map((d, i) => (
          <DataRow
            label={d.label}
            value={d.value}
            percent={d.percentage}
            key={i}
          />
        )) : (
          <DataRow
            label={item.data[0].label}
            value={item.data[0].value}
            percent={item.data[0].percentage}
          />
        )}
      </div>
    </div>
  );
};

CardResumo.propTypes = {
  item: PropTypes.any,
  isError: PropTypes.bool,
  isLoading: PropTypes.bool,
  since: PropTypes.bool,
};

CardResumo.defaultProps = {
  item: [],
  isError: false,
  isLoading: true,
  since: false,
};

export default CardResumo;
