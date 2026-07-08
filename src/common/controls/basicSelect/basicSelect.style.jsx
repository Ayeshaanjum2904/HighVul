import styled from 'styled-components';

export const SelectContainer = styled.div`
  min-width: 180px;
`;

export const Placeholder = styled.em`
  font-family: CircularStd, sans-serif !important;
  font-style: normal !important;
  color: ${(props) => (props.color ? '#555770' : ' #8f9bb3')} !important;
  font-size: 14px;
  font-family: Circular Std;
  font-weight: 400;
  line-height: 16px;
`;

export const LabelContainer = styled.span`
  color: #8f9bb3;
  font-size: 11px;
  line-height: 1.33;
  margin-left: 12px;
`;

export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: '144px',
      marginTop: '4px',
      overflow: 'hidden',
      overflowY: 'auto',
      height: 'auto',
      boxShadow: '0px 4px 4px 3px rgba(0, 0, 0, 0.15)',
    },
    sx: {
      '& .MuiMenuItem-root.Mui-selected': {
        backgroundColor: 'rgba(0, 175, 173, 0.08)',
        borderBottom: '1px solid #00AFAD29',
        borderRadius: '2px',
        color: '#404154',
      },
      '& .MuiMenuItem-root:hover': {
        backgroundColor: 'rgba(85, 87, 112, 0.08)',
        borderBottom: '1px solid #55577029',
        borderRadius: '2px',
        color: '#404154',
      },
      '& .MuiMenuItem-root.Mui-selected:hover': {
        backgroundColor: 'rgba(85, 87, 112, 0.08)',
        borderBottom: '1px solid #00AFAD29',
        borderRadius: '2px',
        color: '#404154',
      },
    },
    root: {
      '& .MuiPaper-root': {
        boxShadow: 'none !important',
      },
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
    minWidth: '180px',
    width: '100%',
    height: 40,
    backgroundColor: 'transparent',
    margin: 0,
    marginTop: '2px',
    textOverflow: 'ellipsis',
  },
  menuItem: {
    fontSize: '12px',
    fontWeight: '400px',
    lineHeight: '16px',
    padding: '0px 0px 0px 12px',
    height: '36px',
    color: '#7A7C9A',
    alignItems: 'center',
    borderRadius: '2px',
    fontFamily: 'CircularStd, sans-serif !important',
    fontStyle: 'normal !important',
    background: '#FFF',
    borderBottom: '1px solid rgba(85, 87, 112, 0.08)',
    '&.Mui-focusVisible': {
      background: 'transparent',
    },
  },
  menuItemSelected: {
    height: 40,
    padding: 0,
    whiteSpace: 'unset',
    display: 'flex !important',
    justifyContent: 'left !important',
    paddingLeft: '12px !important',
    boxShadow: 'none',
    backgroundColor: 'rgba(85, 87, 112, 0.08)',
    '.MuiOutlinedInput-input': {
      padding: 0,
      textOverflow: 'ellipsis',
      '&:focus': {
        background: 'transparent',
      },
    },
    '.MuiOutlinedInput-notchedOutline': {
      border: 'none',
      background: 'transparent',
      textOverflow: 'ellipsis',
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
      textOverflow: 'ellipsis',
      '&:focus': {
        background: 'transparent',
      },
    },
    '.MuiOutlinedInput-notchedOutline': {
      border: 'none',
      textOverflow: 'ellipsis',
      background: 'transparent',
    },
  },

};
