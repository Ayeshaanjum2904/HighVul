import React from 'react';
import PropTypes from 'prop-types';

import { Mixpanel } from 'modules';

import './menuAsideButton.scss';

const MenuAsideButton = ({
  onClick,
  active,
  icon,
  label,
  visible,
}) => {
  if (visible === false) return null;
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="menu-aside-btn"
      onClick={() => {
        Mixpanel.trackMenuClick(label);
        onClick();
      }}
    >
      {
      active
        ? (
          <div className="menu-aside-btn-active" />
        )
        : null
      }
      <div className="menu-aside-btn-icon">
        {icon}
      </div>
      <div className="menu-aside-btn-label">
        {label}
      </div>
    </div>
  );
};

MenuAsideButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default MenuAsideButton;
