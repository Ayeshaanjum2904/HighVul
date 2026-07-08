import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mui/material/Icon';
import AlertCardStyle from './alertCard.style';

const AlertCard = ({
  height,
  padding,
  lineHeight,
  title,
  subtitle,
  icone,
  colorBase,
  backgroundColor,
  width,
  className,
  afterTitle,
  alertCardContent,
}) => {
  function Icone() {
    return (
      <Icon>{icone}</Icon>
    );
  }
  return (
    <AlertCardStyle
      colorBase={colorBase}
      backgroundColor={backgroundColor}
      width={width}
      className={className}
      height={height}
      padding={padding}
      lineHeight={lineHeight}
      alertCardContent={alertCardContent}
    >
      <div className="alert-card-content">
        <div className="alert-card-title" data-cy="alert-title">
          <Icone />
          <span>
            {title}
          </span>
          {afterTitle}
        </div>
        <div className="alert-card-subtitle">
          {subtitle}
        </div>
      </div>
    </AlertCardStyle>
  );
};

AlertCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icone: PropTypes.element,
  colorBase: PropTypes.string,
  backgroundColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  lineHeight: PropTypes.string,
  className: PropTypes.string,
  afterTitle: PropTypes.node,
  alertCardContent: PropTypes.string,
};

AlertCard.defaultProps = {
  title: '',
  subtitle: '',
  icone: null, // elemento React vazio
  colorBase: '',
  backgroundColor: '',
  height: null,
  padding: null,
  lineHeight: null,
  width: '342px',
  className: '',
  afterTitle: null,
  alertCardContent: '16px',
};
export default AlertCard;
