import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { makeStyles } from '@material-ui/styles';
import { trackedProperties } from 'modules';

const useStyles = makeStyles({
  button: {
    width: '246px',
    height: '40px',
    marginLeft: '10px',
  },
});

const RevisaoButton = ({
  onClick,
}) => {
  const classes = useStyles();
  return (
    <Button
      onClick={() => onClick()}
      className={classes.button}
      mixpanelTarget="Revisar desconto"
      mixpanelPage={trackedProperties.contatosPage}
    >
      Revisar desconto
    </Button>
  );
};

RevisaoButton.propTypes = {
  onClick: PropTypes.func,
};

RevisaoButton.defaultProps = {
  onClick: () => {},
};

export default RevisaoButton;
