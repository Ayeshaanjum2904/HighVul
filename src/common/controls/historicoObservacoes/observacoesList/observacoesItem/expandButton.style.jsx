import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import colors from 'assets/styles/colors';

export const StyledExpandButton = styled(Button)(({ expanded }) => ({
  '&:hover, &:active, &:focus': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  '& .MuiButton-startIcon': {
    marginRight: '4px',
    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
  },
  backgroundColor: 'transparent',
  color: colors.primary_color_400,
  fontSize: '12px',
  lineHeight: '16px',
  fontWeight: 350,
  textTransform: 'none',
  boxShadow: 'none',
  paddingLeft: '5px',
  alignSelf: 'flex-start',
}));

export const StyledExpandIcon = styled(ExpandMoreIcon)(() => ({
  width: 16,
  height: 16,
  color: colors.primary_color_400,
}));
