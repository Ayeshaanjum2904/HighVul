import colors from 'assets/styles/colors';

export const MenuProps = {
  sx: {
    '& .MuiList-root': {
      padding: '4px 0px',
    },
  },
  PaperProps: {
    sx: {
      transition: 'none !important',
      overflow: 'hidden',
      clipPath: 'inset(0px -15px -15px -15px)',
    },
    onClick: (e) => {
      e.stopPropagation();
    },
  },
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
  variant: 'menu',
};

export const FormControlStyle = (error) => ({
  m: 1,
  backgroundColor: 'transparent',
  margin: 0,
  width: '100%',
  height: 40,
  ...(error
    ? {
      border: `${colors.error_color_200} 1px solid`,
      borderRadius: '4px',
    } : {
      border: `${colors.secundary_color_100_36} 1px solid`,
      borderRadius: '4px',
    }
  ),
  '& .MuiSelect-icon': {
    color: error ? colors.error_color_200 : colors.secundary_color_700,
  },
});

export const SelectStyle = {
  height: 40,
  padding: 0,
  paddingLeft: '12px',
  boxShadow: 'none',
  backgroundColor: colors.secundary_color_100_36,
  '.MuiOutlinedInput-input': {
    padding: 0,
    '&:focus': {
      background: 'transparent',
    },
  },
  '.MuiOutlinedInput-notchedOutline': {
    border: 'none',
    background: 'transparent',
  },
};
