import React from 'react';
import PropTypes from 'prop-types';
import ArrowBack from 'assets/icons/arrow-back';
import ArrowPreview from 'assets/icons/arrow-preview';
import { ArrowContainerExport } from './arrowContainer.style';

const ArrowContainer = ({ icon, margin }) => (
  <ArrowContainerExport leftIcon={margin}>
    {icon ? <ArrowBack /> : <ArrowPreview />}
  </ArrowContainerExport>
);

export default ArrowContainer;

ArrowContainer.propTypes = {
  icon: PropTypes.bool,
  margin: PropTypes.string.isRequired,
};

ArrowContainer.defaultProps = {
  icon: false,
};
