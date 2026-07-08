import React from 'react';
import PropTypes from 'prop-types';

import ButtonIcon from 'common/controls/buttonIcon';
import { makeStyles } from '@material-ui/styles';
import { ChevronDown } from 'react-feather';
import MaterialCollapse from '@material-ui/core/Collapse';

import './collapse.scss';

const useStyles = makeStyles({
  rotate: {
    transform: (props) => (props.isOpen ? 'rotate(180deg)' : 'none'),
  },
  header: {
    color: (props) => (props.disabled ? '#8F9BB3' : '#555770'),
  },
  button: {
    width: '100%',
  },
});

const Collapse = ({
  children, isOpen, minHeight,
  onClick, disabled, title, subtitle, mixpanelTarget, mixpanelPage, dataCy,
}) => {
  const classes = useStyles({ disabled, isOpen });
  return (
    <MaterialCollapse in={isOpen} collapsedHeight={minHeight}>
      <div className="common__collapse__container">
        <ButtonIcon
          className={classes.button}
          onClick={onClick}
          disabled={disabled}
          mixpanelTarget={mixpanelTarget}
          mixpanelPage={mixpanelPage}
          data-cy={dataCy}
        >
          <div className={`common__collapse__container__header ${classes.header}`}>
            <div className="common__collapse__container__header_title">
              {title}
            </div>
            {subtitle ? (
              <div className="common__collapse__container__header_subtitle">
                {subtitle}
              </div>
            ) : null}
            <div className={`common__collapse__container__header_icon ${classes.rotate}`}>
              <ChevronDown size="25px" />
            </div>
          </div>
        </ButtonIcon>
        <div className="common__collapse__container__content">
          {children}
        </div>
      </div>
    </MaterialCollapse>
  );
};

Collapse.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  minHeight: PropTypes.number,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  mixpanelTarget: PropTypes.string.isRequired,
  mixpanelPage: PropTypes.string.isRequired,
  dataCy: PropTypes.string,
};

Collapse.defaultProps = {
  children: null,
  isOpen: false,
  minHeight: 77,
  onClick: () => {},
  disabled: false,
  title: null,
  subtitle: null,
  dataCy: 'collapse',
};

export default Collapse;
