import React from 'react';
import PropTypes from 'prop-types';

import { CheckSquare } from 'react-feather';
import { makeStyles } from '@material-ui/styles';
import ButtonIcon from 'common/controls/buttonIcon';
import { trackedProperties } from 'modules';
import colors from 'assets/styles/colors';

const useStyles = makeStyles({
  container: {
    marginLeft: '15px',
    color: colors.success_color_300,
    width: '70px',
    textAlign: 'center',
  },
  text: {
    fontSize: '10px',
    fontWeight: '500',
    letterSpacing: '1.5px',
    marginLeft: '5px',
    marginTop: '1px',
  },
});

const SendButton = ({ isLoading, onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ButtonIcon
        isLoading={isLoading}
        onClick={onClick}
        mixpanelTarget="Salvar Edição concessionária"
        mixpanelPage={trackedProperties.concessionariasPage}
      >
        <CheckSquare size="16px" />
        <div className={classes.text}>
          SALVAR
        </div>
      </ButtonIcon>
    </div>
  );
};

SendButton.propTypes = {
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
};

SendButton.defaultProps = {
  isLoading: false,
  onClick: () => {},
};

export default SendButton;
