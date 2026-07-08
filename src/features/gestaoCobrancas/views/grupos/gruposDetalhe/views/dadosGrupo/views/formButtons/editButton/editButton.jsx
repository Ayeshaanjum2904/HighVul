import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import { Edit } from '@material-ui/icons';
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
  icon: {
    fontSize: '14px',
  },
});

const EditButton = ({ setIsEditing }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ButtonIcon
        onClick={() => setIsEditing(true)}
        mixpanelTarget="Editar grupo"
        mixpanelPage={trackedProperties.gruposPage}
      >
        <Edit className={classes.icon} />
        <div className={classes.text}>
          EDITAR DADOS
        </div>
      </ButtonIcon>
    </div>

  );
};

EditButton.propTypes = {
  setIsEditing: PropTypes.func,
};

EditButton.defaultProps = {
  setIsEditing: () => {},
};

export default EditButton;
