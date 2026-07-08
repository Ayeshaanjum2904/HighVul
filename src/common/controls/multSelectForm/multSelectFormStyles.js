import colors from 'assets/styles/colors';

const ITEM_HEIGHT = 70;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      marginTop: '10px',
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

export const SelectFormStyle = {
  FormControl: {
    m: 1,
    minWidth: '216 !important',
    width: '100%',
    height: 40,
    backgroundColor: 'transparent',
    margin: 0,
  },
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
    backgroundColor: `${colors.primary_color_100_36} !important`,
    borderBottom: `1px solid ${colors.primary_color_100_56}`,
    '.all-item': {
      color: '#404154',
    },
    '&:hover': {
      backgroundColor: colors.secundary_color_100_48,
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
      '&:focus': {
        background: 'transparent',
      },
    },
    '.MuiOutlinedInput-notchedOutline': {
      border: 'none',
      background: 'transparent',
    },
  },
};

export const TextFieldStyle = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(228, 233, 242, 0.24)',
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      borderColor: '#C5CEE0',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00AFAD',
      backgroundColor: 'rgba(85, 87, 112, 0.08)',
    },
  },
  '& .MuiOutlinedInput-input': {
    fontFamily: 'CircularStd, sans-serif',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '24px',
    color: '#555770',
  },
};
