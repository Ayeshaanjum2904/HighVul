import colors from 'assets/styles/colors';

export const ItemBox = (checked) => ({
  width: '100%',
  height: '100%',
  alignItems: 'center',
  whiteSpace: 'unset',
  backgroundColor: checked ? colors.primary_color_100_36 : 'none',
  borderBottom: `1px solid ${checked ? colors.primary_color_100 : colors.secundary_color_100_48}`,
  display: 'flex !important',
  justifyContent: 'left !important',
  gap: '9px !important',
  padding: '0px 4px',
  '&:hover': {
    backgroundColor: checked ? colors.primary_color_100_36 : colors.secundary_color_100_36,
    borderBottom: `1px solid ${checked ? colors.primary_color_100 : colors.secundary_color_100}`,
  },
  '&.Mui-disabled': {
    opacity: 0.8,
  },
});

export const MenuItemStyle = {
  '&:hover': {
    backgroundColor: 'transparent',
  },
  padding: '0px 4px',
};
