import { Switch, withStyles } from '@material-ui/core';
import colors from 'assets/styles/colors';

export const CustomSwitch = withStyles({
  switchBase: {
    color: '#FFFFFF',
    '&$checked': {
      color: '#FFFFFF',
      '& + $track': {
        backgroundColor: colors.primary_color_600,
        opacity: 1,
      },
    },
  },
  track: {
    opacity: 1,
    backgroundColor: colors.secundary_color_500,
  },
  checked: {},
})(Switch);
