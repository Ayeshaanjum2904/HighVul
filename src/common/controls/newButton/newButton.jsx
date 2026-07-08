import React, {
  forwardRef, useEffect, useImperativeHandle, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import AlertCard from 'common/layout/alertCard/alertCard';
import colors from 'assets/styles/colors';
import PopperComponent from '../popperComponent/popperComponent';
import ButtonStyle from './newButton.styles';

const NewButton = forwardRef(({
  onClick, disabled, type, preventOnClick, widthCard,
  children, className, width, alertCardTitle, icone,
  colorBase, placement, isLoading,
}, ref) => {
  const [openPopper, setOpenPopper] = useState(preventOnClick);
  const [anchorEl, setAnchorEl] = useState(null);
  const buttonRef = useRef(0);

  useImperativeHandle(ref, () => ({
    closePopper() {
      setAnchorEl(null);
    },
  }));

  useEffect(() => {
    setOpenPopper(preventOnClick);
    if (!preventOnClick) {
      setAnchorEl(null);
    }
  }, [preventOnClick]);

  const handleOnClick = () => {
    if (openPopper) {
      setAnchorEl(buttonRef?.current);
    } else {
      setAnchorEl(null);
      onClick();
    }
  };

  return (
    <>
      <ButtonStyle
        type={type}
        disabled={disabled || isLoading}
        onClick={handleOnClick}
        className={className}
        width={width}
        ref={buttonRef}
      >
        {children}
      </ButtonStyle>
      <PopperComponent anchorEl={anchorEl} open={openPopper} placement={placement}>
        <AlertCard
          width={widthCard}
          title={alertCardTitle}
          icone={icone}
          colorBase={colorBase}
          alertCardContent="8px"
        />
      </PopperComponent>
    </>
  );
});

NewButton.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  widthCard: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.element,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  preventOnClick: PropTypes.bool,
  alertCardTitle: PropTypes.string,
  icone: PropTypes.element,
  colorBase: PropTypes.string,
  placement: PropTypes.string,
};

NewButton.defaultProps = {
  className: '',
  width: '',
  widthCard: '',
  type: 'button',
  onClick: () => {},
  children: null,
  disabled: false,
  isLoading: false,
  preventOnClick: false,
  alertCardTitle: '',
  icone: null,
  colorBase: colors.alert_color_200,
  placement: 'top-end',
};

export default NewButton;
