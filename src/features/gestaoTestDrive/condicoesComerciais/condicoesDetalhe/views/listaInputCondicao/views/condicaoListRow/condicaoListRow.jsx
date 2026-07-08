import React from 'react';
import PropTypes from 'prop-types';
import { trackedProperties } from 'modules';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonTooltipIcon from 'common/controls/buttonTooltipIcon';
import SelectVeiculo from 'common/controls/selectVeiculo/selectVeiculo';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gap: '16px',
    gridTemplateColumns: 'auto 40px',
    margin: '16px 0',
    maxWidth: '50%',
  },
  button: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '16px',
    borderRadius: '4px',
    backgroundColor: '#505669',
    '&:hover': {
      backgroundColor: '#3C414E',
    },
    '&:active': {
      backgroundColor: '#282B34',
    },
  },
});

const CondicaoListRow = ({
  mvs, selectedMvs, selectedMvsList, setVeiculo, removeVeiculo, deleteVeiculo,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <SelectVeiculo
        selectedMvs={selectedMvs.value}
        mvs={mvs}
        selectedMvsList={selectedMvsList}
        setVeiculo={setVeiculo}
      />
      <ButtonTooltipIcon
        title="Excluir"
        className={classes.button}
        buttonAction={
          () => {
            removeVeiculo(selectedMvs.value);
            deleteVeiculo(selectedMvs.value);
          }
        }
        mixpanelTarget="Remover MVS da selecão"
        mixpanelPage={trackedProperties.descontosPage}
      >
        <DeleteIcon fontSize="small" style={{ color: 'white' }} />
      </ButtonTooltipIcon>
    </Box>
  );
};

CondicaoListRow.propTypes = {
  mvs: PropTypes.array,
  selectedMvs: PropTypes.object,
  setVeiculo: PropTypes.func,
  selectedMvsList: PropTypes.array,
  removeVeiculo: PropTypes.func,
  deleteVeiculo: PropTypes.func,
};

CondicaoListRow.defaultProps = {
  mvs: [],
  selectedMvs: null,
  setVeiculo: () => {},
  selectedMvsList: [],
  removeVeiculo: () => {},
  deleteVeiculo: () => {},
};

export default CondicaoListRow;
