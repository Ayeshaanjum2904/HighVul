import { styled } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import Button from '@mui/material/Button';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import colors from 'assets/styles/colors';

export const useStyles = makeStyles({
  secondaryButton: {
    backgroundColor: `${colors.primary_color_500}`,
    '&:hover, &:active, &:focus': {
      backgroundColor: colors.primary_color_400,
    },
    color: 'white',
    border: 'unset',
  },
  secondaryIcon: {
    color: 'white',
  },
  secondaryButtonError: {
    '&:hover, &:active, &:focus': {
      backgroundColor: colors.error_color_300,
    },
    backgroundColor: colors.error_color_200,
  },
});

export const StyledButton = styled(Button)(({ error, width }) => ({
  '&:hover, &:active, &:focus': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  '& .MuiButton-startIcon': {
    marginRight: '4px',
  },
  backgroundColor: 'transparent',
  color: error ? colors.error_color_200 : colors.primary_color_400,
  fontSize: '14px',
  lineHeight: '16px',
  fontWeight: 350,
  textTransform: 'none',
  boxShadow: 'none',
  border: `1px solid ${error ? colors.error_color_200 : colors.primary_color_500}`,
  height: '40px',
  display: 'flex',
  padding: '8px 12px',
  width,
}));

export const StyledAttachFileIcon = styled(AttachFileIcon)(({ error }) => ({
  width: 18,
  height: 18,
  color: error ? colors.error_color_200 : colors.primary_color_400,
}));
