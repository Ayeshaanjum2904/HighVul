import colors from 'assets/styles/colors';

export const switchStyles = {
  root: {
    width: 30,
    height: 16,
    padding: 0,
  },
  switchBase: {
    padding: 2,
    color: 'white !important',
    '&$checked': {
      transform: 'translateX(14px)',
      color: 'white',
      '& + $track': {
        opacity: 1,
        backgroundColor: `${colors.terciary_color_300} !important`,
      },
    },
  },
  thumb: {
    width: 11,
    height: 11,
    boxShadow: 'none',
  },
  disabled: {
    '& + $track': {
      backgroundColor: `${colors.secundary_color_500} !important`,
    },
    '&$checked': {
      '& + $track': {
        backgroundColor: `${colors.terciary_color_300} !important`,
      },
    },
  },
  track: {
    borderRadius: 16 / 2,
    opacity: '1 !important',
    backgroundColor: '#C5CEE0',
  },
  checked: {},
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: `${colors.primary_color_600}`,
  },
};
