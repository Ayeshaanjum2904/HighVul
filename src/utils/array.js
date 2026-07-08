import _ from 'lodash';

export const sortBy = (array, property) => {
  if (!_.isArray(array)) return array;

  return array.sort(
  // eslint-disable-next-line no-nested-ternary
    (a, b) => ((a[property] > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0)),
  );
};
