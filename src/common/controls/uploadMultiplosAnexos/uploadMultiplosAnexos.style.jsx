import { withStyles } from '@material-ui/core/styles';
import { Chip, CircularProgress } from '@mui/material';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import colors from 'assets/styles/colors';

export const StyledChip = withStyles(() => ({
  root: () => ({
    boxSizing: 'border-box',
    overflow: 'hidden',
    '& .MuiChip-label': {
      width: '100%',
      padding: 0,
    },
    '& .MuiChip-label .label-wrapper': {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },
    '& .MuiChip-label .label-wrapper .full-width-label': {
      width: '100%',
    },
    '& .MuiChip-label .label-wrapper .file-name': {
      textDecoration: 'underline',
      color: '#304AAF',
      paddingLeft: 0,
      paddingRight: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    '& .MuiChip-label .label-wrapper .file-size': {
      color: '#505669',
      marginLeft: 'auto',
    },
    '& .MuiChip-icon': {
      marginLeft: 0,
      marginRight: 0,
    },
    '& .MuiChip-deleteIcon': {
      margin: 0,
    },
    '&:hover, &:active, &:focus': {
      backgroundColor: '#E4E9F25C',
      boxShadow: 'none',
    },
    backgroundColor: '#E4E9F25C',
    gap: '16px',
    display: 'flex',
    alignItems: 'center',
    padding: '10px 16px 10px 16px',
    borderRadius: '4px',
    height: '38px',
  }),
}))(Chip);
export const StyledAttachFileIcon = withStyles({
  color: `${colors.icon_color} !important`,
  root: {
    width: '16px !important',
    height: '16px !important',
  },
})(AttachFileRoundedIcon);

export const StyledCloseIcon = withStyles({
  root: {
    width: 16,
    height: 16,
  },
})(CloseRoundedIcon);

export const StyledCircularProgress = withStyles({
  root: {
    color: colors.primary_color_500,
    width: '16px !important',
    height: '16px !important',
  },
})(CircularProgress);
