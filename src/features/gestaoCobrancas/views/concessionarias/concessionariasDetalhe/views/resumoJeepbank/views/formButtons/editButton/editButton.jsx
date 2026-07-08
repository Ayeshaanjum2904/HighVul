import React from 'react';
import PropTypes from 'prop-types';

import { Edit } from 'react-feather';
import { makeStyles } from '@material-ui/styles';
import ButtonIcon from 'common/controls/buttonIcon';
import { trackedProperties } from 'modules';
import colors from 'assets/styles/colors';

const useStyles = makeStyles({
  container: {
    marginLeft: '15px',
    color: colors.primary_color_600,
  },
  text: {
    fontSize: '10px',
    fontWeight: '500',
    letterSpacing: '1.5px',
    marginLeft: '5px',
    marginTop: '1px',
  },
});

const EditButton = ({ onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ButtonIcon
        onClick={() => onClick()}
        mixpanelTarget="Editar concessionária"
        mixpanelPage={trackedProperties.concessionariasPage}
      >
        <Edit size="16px" fontWeight="500" />
        <div className={classes.text}>
          EDITAR DADOS
        </div>
      </ButtonIcon>
    </div>

  );
};

EditButton.propTypes = {
  onClick: PropTypes.func,
};

EditButton.defaultProps = {
  onClick: () => {},
};

export default EditButton;
