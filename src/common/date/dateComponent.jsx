import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const dateComponent = ({ className, date, format }) => {
  const dt = date == null ? '--/--/----' : moment(date).format(format);
  return (
    <span className={className}>
      {dt}
    </span>
  );
};

dateComponent.propTypes = {
  className: PropTypes.string,
  format: PropTypes.string,
  date: PropTypes.string.isRequired,
};

dateComponent.defaultProps = {
  className: '',
  format: 'DD/MM/YYYY',
};

export default dateComponent;
