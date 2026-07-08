import { Box, styled } from '@mui/material';
import colors from 'assets/styles/colors';
import { withTransientProps } from 'utils/styled';

export const formats = [
  'bold', 'italic', 'underline', 'background',
  'list', 'bullet', 'color', 'align',
];

export const modules = {
  toolbar: {
    container: '#ql-toolbar-observacao-historico',
    'link-tooltip': true,
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
};

const inputBorder = ({ $error }) => ({
  border: `1px solid ${($error ? colors.error_color_200 : 'transparent')}`,
  backgroundColor: colors.secundary_color_100_24,
});

export const InputContent = styled(Box, withTransientProps)(({ ...props }) => ({
  '& .ql-container.ql-snow': {
    ...inputBorder(props),
    borderBottom: 'none',
    borderRadius: '4px 4px 0px 0px',
  },
  '& .ql-editor': {
    padding: '6px 8px',
    overflowY: 'scroll',
    lineHeight: '16px',
    fontSize: '14px',
    color: colors.secundary_color_700,
    backgroundColor: colors.secundary_color_100_01,
    maxHeight: ((props?.$inputMaxLines || 1) * 16) + 12,
    minHeight: 'unset',
    '&.ql-blank::before': {
      left: 8,
      right: 8,
      fontStyle: 'unset',
      color: props?.$error ? colors.error_color_200 : 'rgba(0, 0, 0, 0.6)',
    },
    '&::-webkit-scrollbar': {
      background: 'unset',
      width: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
      cursor: 'default',
    },
  },
}));

export const InputFooter = styled(Box, withTransientProps)(({ ...props }) => ({
  ...inputBorder(props),
  ...(props.$error
    ? { borderRadius: '0px 0px 4px 4px' }
    : { borderBottom: `1px solid ${colors.secundary_color_100}` }),
  borderTop: 'none',
  padding: '6px 8px',
  width: '100%',
  display: 'grid',
  gap: '12px',
  alignItems: 'center',
  gridTemplateColumns: 'auto 130px 42px',
  flexWrap: 'wrap',
}));
