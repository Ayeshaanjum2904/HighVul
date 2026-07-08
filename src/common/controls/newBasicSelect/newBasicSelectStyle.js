import styled from 'styled-components';
import colors from 'assets/styles/colors';

export const SelectContainer = styled.div`
  min-width: 180px;
`;

export const LabelContainer = styled.span`
  color: ${colors.secundary_color_700};
  margin-left: 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: '144px',
      marginTop: '4px',
      overflow: 'hidden',
      overflowY: 'auto',
      boxShadow: '0px 4px 4px 3px rgba(0, 0, 0, 0.15)',
      fontFamily: 'Circular Std',
      fontStyle: 'normal',
      fontWeight: 450,
    },
    sx: {
      '& .MuiMenuItem-root.Mui-selected': {
        backgroundColor: colors.primary_color_100_36,
        borderBottom: `1px solid ${colors.primary_color_100_56}`,
        borderRadius: '2px',
        color: colors.secundary_color_800,
      },
      '& .MuiMenuItem-root:hover': {
        backgroundColor: '#F7F9FC',
        borderBottom: `1px solid ${colors.secundary_color_100_56}`,
        borderRadius: '2px',
        color: colors.secundary_color_800,
      },
      '& .MuiMenuItem-root.Mui-selected:hover': {
        backgroundColor: colors.primary_color_100_36,
        borderBottom: `1px solid ${colors.secundary_color_100_56}`,
        borderRadius: '2px',
        color: colors.secundary_color_800,
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
    fontFamily: 'CircularStd, sans-serif',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '24px',
    padding: '0px 0px 0px 12px',
    height: '36px',
    color: '#404154',
    alignItems: 'center',
    borderRadius: '2px',
    background: '#FFF',
    borderBottom: '1px solid rgba(228, 233, 242, 0.24)',
    '&.Mui-focusVisible': {
      background: 'transparent',
    },
  },
  menuItemSelected: {
    fontSize: '14px',
    fontFamily: 'CircularStd, sans-serif',
    height: 40,
    padding: 0,
    paddingLeft: '12px',
    boxShadow: 'none',
    backgroundColor: 'rgba(228, 233, 242, 0.24)',
    color: `${colors.secundary_color_700}`,
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
    fontSize: '14px',
    fontFamily: 'CircularStd, sans-serif',
    height: 40,
    padding: 0,
    paddingLeft: '12px',
    boxShadow: 'none',
    backgroundColor: 'rgba(228, 233, 242, 0.24)',
    color: `${colors.secundary_color_700}`,
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

export const SpanColor = styled.span`
  color: ${(props) => props.color};
`;
