import React from 'react';
import PropTypes from 'prop-types';

import WarningSvg from 'assets/icons/warning-color';
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
    margin: '10px 48px 24px 48px',
    whiteSpace: 'nowrap',
    minWidth: ({ minWidth }) => minWidth,
  },
  text: {
    marginLeft: '10px',
  },
  icon: {
    marginLeft: '10px',
  },
});

const Warning = ({ children, minWidth }) => {
  const classes = useStyles({ minWidth });
  return (
    <div className={classes.container}>
      <WarningSvg
        width="24px"
        height="24px"
        color={colors.alert_color_300}
        className={classes.icon}
      />
      <div className={classes.text}>
        {children}
      </div>
    </div>
  );
};

Warning.propTypes = {
  children: PropTypes.node,
  minWidth: PropTypes.string,
};
Warning.defaultProps = {
  children: null,
  minWidth: '',
};

export default Warning;
