import React from 'react';
import PropTypes from 'prop-types';

import PersonAddIcon from '@material-ui/icons/PersonAdd';

import ButtonIcon from 'common/controls/buttonIcon';
import { makeStyles } from '@material-ui/styles';
import { trackedProperties } from 'modules';
import colors from 'assets/styles/colors';

const useStyles = makeStyles({
  text: {
    fontSize: '10px',
    fontWeight: '500',
    letterSpacing: '1.5px',
    marginLeft: '5px',
    textTransform: 'uppercase',
    color: colors.primary_color_500,
  },
});

const AdicionarContatoButton = ({ onClick }) => {
  const classes = useStyles();
  return (
    <ButtonIcon
      onClick={() => onClick(null)}
      mixpanelTarget="Criar novo contato"
      mixpanelPage={trackedProperties.gruposPage}
    >
      <PersonAddIcon style={{ fontSize: 15, color: colors.primary_color_500, marginTop: '-3px' }} />
      <div className={classes.text}>
        CRIAR NOVO CONTATO
      </div>
    </ButtonIcon>
  );
};

AdicionarContatoButton.propTypes = {
  onClick: PropTypes.func,
};

AdicionarContatoButton.defaultProps = {
  onClick: () => {},
};

export default AdicionarContatoButton;
