import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const StatusItem = ({ icon, color, text }) => (
  <>
    {icon}
    <Typography variant="10_medium" lineHeight="12px" fontSize="12px" color={color}>
      {text}
    </Typography>
  </>
);

StatusItem.propTypes = {
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default StatusItem;
