import React from 'react';

import WarningSvg from 'assets/icons/warning';
import { makeStyles } from '@material-ui/styles';
import colors from 'assets/styles/colors';

const useStyles = makeStyles({
  container: {
    height: '40px',
    background: colors.alert_color_200_08,
    border: `1px solid ${colors.alert_color_300}`,
    borderRadius: '4px',
    color: colors.secundary_color_800,
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    marginLeft: '10px',
  },
  icon: {
    marginLeft: '10px',
  },
});

const Warning = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <WarningSvg
        width="24px"
        height="24px"
        className={classes.icon}
        fill={colors.alert_color_300}
      />
      <div className={classes.text}>
        Essa alteração será efetivada com um valor diferente do solicitado pelo dealer.
      </div>
    </div>
  );
};

export default Warning;
