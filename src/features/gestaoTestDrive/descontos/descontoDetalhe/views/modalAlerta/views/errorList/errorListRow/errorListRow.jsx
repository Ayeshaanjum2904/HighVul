import React from 'react';
import PropTypes from 'prop-types';

import './errorListRow.scss';

const ErrorListRow = ({
  error, dataAtual,
}) => (
  <div className="error-list-row__container">
    <div className="error-list-row__item error-list-row__description">
      {error}
    </div>
    <div className="error-list-row__item error-list-row__atual">
      {dataAtual}
    </div>
  </div>
);

ErrorListRow.propTypes = {
  error: PropTypes.string,
  dataAtual: PropTypes.string,
};

ErrorListRow.defaultProps = {
  error: null,
  dataAtual: null,
};

export default ErrorListRow;
