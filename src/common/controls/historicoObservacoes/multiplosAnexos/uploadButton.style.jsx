import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import colors from 'assets/styles/colors';

export const StyledButton = styled(Button)(({ error }) => ({
  '&:hover, &:active, &:focus': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  '& .MuiButton-startIcon': {
    marginRight: '4px',
  },
  backgroundColor: 'transparent',
  color: error ? colors.error_color_200 : colors.primary_color_400,
  fontSize: '12px',
  lineHeight: '16px',
  fontWeight: 350,
  textTransform: 'none',
  boxShadow: 'none',
  paddingLeft: '5px',
}));

export const StyledAttachFileIcon = styled(AttachFileIcon)(({ error }) => ({
  width: 16,
  height: 16,
  color: error ? colors.error_color_200 : colors.primary_color_400,
}));
