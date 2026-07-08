import moment from 'moment';

import { DateRange } from './enums';

export const applyToLoader = (dataLoaders, id, transform) => dataLoaders
  .map((loader) => {
    if (loader.id !== id) return loader;
    return transform(loader);
  });

export const applyFilter = (filters, filterType) => {
  const newObj = ({}, filters);

  // eslint-disable-next-line new-cap
  let dataFim = new moment();
  // eslint-disable-next-line new-cap
  let dataInicio = new moment();

  switch (filterType) {
    case DateRange.today:
      break;
    case DateRange.yesterday:
      dataFim.subtract('days', 1);
      dataInicio.subtract('days', 1);
      break;
    case DateRange.week:
      dataInicio.subtract('days', 7);
      break;
    case DateRange.month:
      dataInicio.subtract('days', 30);
      break;
    case DateRange.all:
      dataInicio = null;
      dataFim = null;
      break;
    default:
      dataInicio = newObj.startDate;
      dataFim = newObj.endDate;
      break;
  }

  newObj.startDate = dataInicio;
  newObj.endDate = dataFim;
  newObj.filterType = filterType;

  return newObj;
};
