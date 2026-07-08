import React from 'react';
import PropTypes from 'prop-types';

import './menuItem.scss';
import { Mixpanel } from 'modules';
import { SvgIcon } from '@mui/material';

const menuItem = ({
  title, isActive, onClick, Icon,
}) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div
    className={`menu-item ${isActive ? 'menu-item--active' : ''}`}
    onClick={() => {
      Mixpanel.trackMenuClick(title);
      onClick();
    }}
  >
    <span className="menu-item-text">
      {Icon instanceof Function
        ? (<SvgIcon sx={{ fontSize: 24, verticalAlign: 'middle', marginRight: '16px' }}><Icon /></SvgIcon>)
        : (<Icon className="menu-item-icon" />)}
      <span>{title}</span>
    </span>
  </div>
);

menuItem.propTypes = {
  Icon: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default menuItem;
