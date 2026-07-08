import colors from 'assets/styles/colors';

export const Styles = (error) => ({
  select: {
    width: '100%',
    height: '20px !important',
    '& .MuiSelect-icon': {
      fontSize: '20px',
      right: 'unset',
      left: '0px',
      color: error ? colors.error_color_200 : colors.secundary_color_700,
    },
    '& .MuiInputBase-input': {
      padding: '0px 0px 0px 24px !important',
      minHeight: '20px',
      maxHeight: '20px',
      fontSize: '12px',
      fontWeight: 450,
      lineHeight: '20px',
      color: error ? colors.error_color_200 : colors.secundary_color_700,
    },
    '& .MuiSelect-nativeInput': {
      border: '0px',
      padding: '0px',
    },
    '& fieldset': { border: 'none' },
  },
  menu: {
    padding: 0,
    '&& .Mui-selected': {
      backgroundColor: colors.primary_color_100_36,
      '&:hover': {
        backgroundColor: colors.primary_color_100_56,
      },
    },
  },
  menuItem: {
    height: '40px',
    padding: '0px 6px',
  },
  itemText: {
    fontSize: '14px',
    color: colors.secundary_color_700,
    fontWeight: 450,
    alignContent: 'center',
    borderBottom: `1px solid ${colors.secundary_color_100_56}`,
  },
});
