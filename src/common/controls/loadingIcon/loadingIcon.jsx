import React from 'react';
import PropTypes from 'prop-types';

import colors from 'assets/styles/colors';
import SvgLoading from '../../../assets/icons/loading';
import './loadingIcon.scss';

const LoadingIcon = ({
  color, size,
}) => (
  <div style={{ width: size, height: size }}>
    <SvgLoading className="loading-icon" style={{ color }} />
  </div>
);

LoadingIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

LoadingIcon.defaultProps = {
  color: colors.primary_color_500,
  size: 16,
};

export default LoadingIcon;
