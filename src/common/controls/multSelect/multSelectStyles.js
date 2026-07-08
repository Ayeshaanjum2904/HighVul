import colors from 'assets/styles/colors';

const ITEM_HEIGHT = 70;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      marginTop: '10px',
      overflow: 'hidden',
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

export const SelectStyle = {
  FormControl: {
    m: 1,
    minWidth: 252,
    width: '100%',
    height: 40,
    backgroundColor: 'transparent',
    margin: 0,
  },
  menuItem: {
    whiteSpace: 'unset',
    display: 'flex !important',
    justifyContent: 'left !important',
    padding: '8px 16px !important',
    gap: '9px !important',
    '&:hover': {
      backgroundColor: colors.secundary_color_100_48,
      borderBottom: `1px solid ${colors.secundary_color_100_56}`,
      '.all-item': {
        color: '#404154',
      },
    },
    '&.Mui-disabled': {
      opacity: 0.8,
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
    '.all-item': {
      color: '#404154',
    },
    '&:hover': {
      backgroundColor: colors.secundary_color_100_48,
      borderBottom: `1px solid ${colors.secundary_color_100_56}`,
    },
  },
  selectedAll: {
    backgroundColor: colors.primary_color_100_36,
    borderBottom: `1px solid ${colors.primary_color_100_56}`,
    '.all-item': {
      color: '#404154',
    },
    '&.Mui-disabled': {
      opacity: 0.8,
    },
    display: 'flex !important',
    justifyContent: 'left !important',
    padding: '8px 16px !important',
    gap: '9px !important',
    '&:hover': {
      backgroundColor: colors.secundary_color_100_48,
      borderBottom: `1px solid ${colors.secundary_color_100_56}`,
    },
    '&:focus': {
      backgroundColor: colors.primary_color_100_36,
      borderBottom: `1px solid ${colors.secundary_color_100_56}`,
    },
  },
  selectOptions: {
    height: 40,
    padding: 0,
    paddingLeft: '12px',
    boxShadow: 'none',
    backgroundColor: 'rgba(228, 233, 242, 0.24)',
    '.MuiOutlinedInput-input': {
      padding: 0,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      '&:focus': {
        background: 'transparent',
      },
    },
    '.MuiOutlinedInput-notchedOutline': {
      border: 'none',
      background: 'transparent',
    },

    '.MuiSelect-icon': {
      top: '50%',
      transform: 'translateY(-50%)',
    },
  },
};
