import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { makeStyles } from '@material-ui/styles';
import { Plus } from 'react-feather';
import { trackedProperties } from 'modules';

const useStyles = makeStyles({
  button: {
    width: '231px',
    height: '40px',
  },
  text: {
    fontSize: '10px',
    letterSpacing: '1.5px',
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  icon: {
    margin: '-3px 5px 0px 0px',
  },
});

const AdicionarAssociacaoButton = ({ onClick, buttonTitle }) => {
  const classes = useStyles();
  return (
    <Button
      onClick={onClick}
      className={classes.button}
      mixpanelTarget={buttonTitle}
      mixpanelPage={trackedProperties.gruposPage}
    >
      <div className={classes.text}>
        <Plus size="15px" className={classes.icon} />
        {buttonTitle}
      </div>
    </Button>
  );
};

AdicionarAssociacaoButton.propTypes = {
  onClick: PropTypes.func,
  buttonTitle: PropTypes.string,
};

AdicionarAssociacaoButton.defaultProps = {
  onClick: () => {},
  buttonTitle: null,
};

export default AdicionarAssociacaoButton;
