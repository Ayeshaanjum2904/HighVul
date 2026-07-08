import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  button: {
    width: '240px',
    fontSize: '14px',
    lineHeight: '16px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: '8px',
    paddingTop: '2px',
  },
});

const AddConcessionariaButton = ({
  onClick, isLoading, mixpanelPage,
}) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      onClick={() => onClick()}
      isLoading={isLoading}
      mixpanelTarget="Abrir modal de seleção de concessionárias"
      mixpanelPage={mixpanelPage}
    >
      <div className={classes.icon}>
        <AddIcon size="20px" />
      </div>
      Adicionar concessionárias
    </Button>
  );
};

AddConcessionariaButton.propTypes = {
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  mixpanelPage: PropTypes.string,
};

AddConcessionariaButton.defaultProps = {
  onClick: () => {},
  isLoading: false,
  mixpanelPage: '',
};

export default AddConcessionariaButton;
