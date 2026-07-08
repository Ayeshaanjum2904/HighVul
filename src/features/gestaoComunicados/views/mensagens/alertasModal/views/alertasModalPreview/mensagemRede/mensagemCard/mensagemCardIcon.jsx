import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import colors from 'assets/styles/colors';

const useStyles = makeStyles({
  container: {
    width: '151px',
    height: '151px',
    borderRadius: '50%',
    background: colors.primary_color_100_48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const MensagemCardIcon = ({ signedUrl }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={signedUrl} width="84" height="84" alt="Icone Mensagem" />
    </div>
  );
};

MensagemCardIcon.propTypes = {
  signedUrl: PropTypes.string,
};

MensagemCardIcon.defaultProps = {
  signedUrl: null,
};

export default MensagemCardIcon;
