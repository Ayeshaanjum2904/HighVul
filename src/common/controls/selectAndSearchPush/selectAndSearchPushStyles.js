import colors from 'assets/styles/colors';

export const SelectStyle = {
  menuItem: {
    whiteSpace: 'unset',
    borderBottom: '1px solid #EDF1F7',
    display: 'flex !important',
    justifyContent: 'left !important',
    padding: '8px 16px !important',
    gap: '9px !important',
    '&:hover': {
      backgroundColor: '#F7F9FC',
      borderBottom: '1px solid #C5CEE0',
    },
    '&.Mui-disabled': {
      opacity: 0.8,
    },
    '&.Mui-focusVisible': {
      background: 'transparent',
    },
  },
  menuItemSelected: {
    whiteSpace: 'unset',
    display: 'flex !important',
    justifyContent: 'left !important',
    padding: '8px 16px !important',
    gap: '9px !important',
    backgroundColor: colors.primary_color_100_36,
    borderBottom: `1px solid ${colors.primary_color_100_56}`,
    '&:hover': {
      backgroundColor: colors.secundary_color_100_48,
      borderBottom: `1px solid ${colors.secundary_color_100_56}`,
    },
    '&:focus': {
      backgroundColor: 'transparent !important',
    },
  },
};
