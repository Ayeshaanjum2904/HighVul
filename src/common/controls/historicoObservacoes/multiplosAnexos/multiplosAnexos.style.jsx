import { withStyles } from '@material-ui/core/styles';
import { Chip, CircularProgress } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';
import CloseIcon from '@mui/icons-material/Close';
import colors from 'assets/styles/colors';

export const StyledChip = withStyles(() => ({
  root: (props) => ({
    '& .MuiChip-label': {
      textDecoration: 'underline',
      paddingLeft: 0,
      paddingRight: 0,
    },
    '& .MuiChip-icon': {
      color: props.disableUpload ? colors.secundary_color_700 : colors.secundary_color_500,
      marginLeft: 0,
      marginRight: 0,
    },
    '& .MuiChip-deleteIcon': {
      margin: '0 5px 0 -3px',
    },
    '&:hover, &:active, &:focus': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    backgroundColor: 'transparent',
    color: props.disableUpload ? colors.secundary_color_700 : colors.secundary_color_500,
    gap: '8px',
  }),
}))(Chip);

export const StyledTaskIcon = withStyles({
  root: {
    width: 16,
    height: 16,
  },
})(TaskIcon);

export const StyledCloseIcon = withStyles({
  root: {
    width: 14,
    height: 14,
  },
})(CloseIcon);

export const StyledCircularProgress = withStyles({
  root: {
    color: colors.primary_color_500,
  },
})(CircularProgress);
