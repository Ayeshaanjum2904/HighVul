import _ from 'lodash';

import PropTypes from 'prop-types';

const PageIndicator = ({
  page, ipp, totalItems,
}) => {
  const itemInicial = (page * ipp) + 1;

  const lastItemInPage = (page + 1) * ipp;
  const lastItem = lastItemInPage > totalItems ? totalItems : lastItemInPage;

  const formatNumber = (n) => (_.isNumber(n) ? n : 0);

  return (`${formatNumber(itemInicial)} - ${formatNumber(lastItem)} de ${formatNumber(totalItems)}`);
};

PageIndicator.propTypes = {
  page: PropTypes.number,
  ipp: PropTypes.number,
  totalItems: PropTypes.number,
};

PageIndicator.defaultProps = {
  page: 0,
  ipp: 0,
  totalItems: 0,
};

export default PageIndicator;
