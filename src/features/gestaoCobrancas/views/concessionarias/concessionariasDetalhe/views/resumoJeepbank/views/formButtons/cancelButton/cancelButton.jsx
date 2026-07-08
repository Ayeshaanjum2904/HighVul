import React from 'react';
import PropTypes from 'prop-types';

import { XSquare } from 'react-feather';
import { makeStyles } from '@material-ui/styles';
import ButtonIcon from 'common/controls/buttonIcon';
import { trackedProperties } from 'modules';
import colors from 'assets/styles/colors';

const useStyles = makeStyles({
  container: {
    color: colors.error_color_300,
  },
  text: {
    fontSize: '10px',
    fontWeight: '500',
    letterSpacing: '1.5px',
    marginTop: '1px',
    marginLeft: '5px',
  },
});

const CancelButton = ({ onClick, isLoading }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ButtonIcon
        onClick={() => onClick()}
        disabled={isLoading}
        mixpanelTarget="Cancelar Edição concessionária"
        mixpanelPage={trackedProperties.concessionariasPage}
      >
        <XSquare size="16px" />
        <div className={classes.text}>
          CANCELAR
        </div>
      </ButtonIcon>
    </div>
  );
};

CancelButton.propTypes = {
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
};

CancelButton.defaultProps = {
  onClick: () => {},
  isLoading: false,
};

export default CancelButton;
