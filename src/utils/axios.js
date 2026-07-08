// import _ from 'lodash';
import moment from 'moment';

export const formatDateForUrl = (date) => {
  if (moment.isMoment(date)) {
    return date.format('YYYY-MM-DD');
  }

  return null;
};
