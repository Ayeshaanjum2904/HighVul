import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { makeStyles } from '@material-ui/styles';
import { trackedProperties } from 'modules';
import { Modal } from '../../../../../redux/enums';

const useStyles = makeStyles({
  button: {
    width: '200px',
    height: '40px',
    margin: '20px 0 0 0',
  },
});

const AdicionarRegionalButton = ({ openModal }) => {
  const classes = useStyles();
  return (
    <Button
      onClick={() => openModal(Modal.insertAnalista)}
      className={classes.button}
      mixpanelTarget="Adicionar nova regional"
      mixpanelPage={trackedProperties.analistasPage}
    >
      Adicionar nova regional
    </Button>
  );
};

AdicionarRegionalButton.propTypes = {
  openModal: PropTypes.func,
};

AdicionarRegionalButton.defaultProps = {
  openModal: () => {},
};

export default AdicionarRegionalButton;
