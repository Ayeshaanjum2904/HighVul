const ITEM_HEIGHT = 48;
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

export const SelectStyleGroup = {
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
    '&.Mui-selected': {
      backgroundColor: 'rgba(0, 175, 173, 0.08)',
      borderBottom: '1px solid rgba(0, 175, 173, 0.16)',
      '&:hover': {
        backgroundColor: 'rgba(0, 175, 173, 0.08)',
      },
    },
  },
  groupTitle: {
    fontFamily: 'CircularStd, sans-serif',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '24px',
    color: '#555770',
    padding: '10px 0 10px 28px',
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
