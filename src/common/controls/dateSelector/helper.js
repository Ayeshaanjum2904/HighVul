/* eslint-disable no-param-reassign */
import React from 'react';
import moment from 'moment';

export const utilizeFocus = () => {
  const ref = React.createRef();
  const setFocus = () => {
    if (ref.current) {
      (ref).current.focus();
    }
  };

  return { setFocus, ref };
};

export const getDateFromEvent = (date) => {
  const dateFormat = moment(date, 'DD/MM/YYYY', true);
  return dateFormat.isValid() ? dateFormat : undefined;
};

export const getMessageError = (
  invalidStartDate,
  invalidEndDate,
  startDate,
  endDate,
  invalidTwelveMonths,
) => {
  if (invalidTwelveMonths) {
    return 'O período deve ser de até 1 ano.';
  }

  if (startDate && !endDate) {
    return 'Para filtrar, preencha a segunda data.';
  }

  if (!startDate && endDate) {
    return 'Para filtrar, preencha a primeira data.';
  }

  if (startDate < endDate) {
    return 'Data inválida. Tente novamente.';
  }

  if (invalidStartDate || invalidEndDate) {
    return 'Data informada é inexistente.';
  }

  return null;
};

export const getColorSelectedLabel = ({
  focusedInput,
  invalidStartDate,
  invalidEndDate,
  startDate,
  endDate,
}) => (
  focusedInput
    || invalidStartDate
    || invalidEndDate
    || startDate
    || endDate
    ? '#555770'
    : '#8F9BB3'
);
