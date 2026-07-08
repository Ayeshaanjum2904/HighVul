import React from 'react';

import WarningSvg from 'assets/icons/warning-color';
import { makeStyles } from '@material-ui/styles';
import colors from 'assets/styles/colors';

const useStyles = makeStyles({
  container: {
    height: '40px',
    width: '650px',
    background: colors.alert_color_200_08,
    border: `1px solid ${colors.alert_color_300}`,
    borderRadius: '4px',
    color: colors.secundary_color_800,
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
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
        color={colors.alert_color_300}
        className={classes.icon}
      />
      <div className={classes.text}>
        Ao editar os dados desse contato, as alterações serão replicadas
        para todos os grupos em que ele pertence.
      </div>
    </div>
  );
};

export default Warning;
