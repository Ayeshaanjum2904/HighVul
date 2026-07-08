export const TypographyStyle = {
  lineHeight: '24px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

export const TextBoxStyle = {
  display: 'inline-block',
  position: 'relative',
  top: '8px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  paddingRight: '6px',
  '::before': { content: '"“"' },
  '::after': {
    content: '"”"',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  fontWeight: 700,
  maxWidth: 170,
  textWrap: 'nowrap',
};
