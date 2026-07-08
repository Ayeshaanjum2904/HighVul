import React from 'react';
import { ButtonBase } from '@mui/material';
import colors from 'assets/styles/colors';
import PropTypes from 'prop-types';

const DashboardLiquidadasPeriodoButton = ({ text, onClick, selected }) => (
  <ButtonBase
    onClick={onClick}
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '72px',
      height: '40px',
      borderRadius: '4px',
      backgroundColor: selected ? colors.primary_color_100 : 'white',
      border: `1px solid ${selected ? colors.primary_color_700 : colors.primary_color_500}`,
      color: selected ? colors.primary_color_700 : colors.primary_color_500,
      userSelect: 'none',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: colors.primary_color_100_24,
        border: `1px solid ${colors.primary_color_700}`,
        color: colors.primary_color_700,
      },

    }}
  >
    {text}
  </ButtonBase>

);

export default DashboardLiquidadasPeriodoButton;

DashboardLiquidadasPeriodoButton.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

DashboardLiquidadasPeriodoButton.defaultProps = {
  text: '',
  selected: false,
  onClick: () => [],
};
