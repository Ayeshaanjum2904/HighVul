import colors from 'assets/styles/colors';

export const MenuItemStyle = {
  padding: '0px',
  margin: '0px 8px',
  '&:hover': {
    background: 'unset',
  },
};

export const StackStyle = {
  columnGap: '8px',
  alignItems: 'center',
  color: colors.primary_color_500,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

export const TypographyStyle = {
  color: 'inherit',
  lineHeight: '24px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  position: 'relative',
  '::after': {
    content: '"”"',
    position: 'absolute',
    top: 0,
    right: 0,
    color: colors.secundary_color_700,
  },
};

export const TextBoxStyle = {
  color: colors.secundary_color_700,
  display: 'inline',
  position: 'relative',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  paddingRight: '6px',
  '::before': {
    content: '"“"',
  },
};
