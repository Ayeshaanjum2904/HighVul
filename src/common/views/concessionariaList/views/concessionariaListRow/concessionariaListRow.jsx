import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonTooltipIcon from 'common/controls/buttonTooltipIcon';
import LogoMarca from 'common/views/logoMarca/logoMarca';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gap: '16px',
    gridTemplateColumns: '32px auto 40px',
    alignItems: 'center',
    margin: '16px 0',
    maxWidth: '50%',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#505669',
  },
  button: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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

const ConcessionariaListRow = ({
  concessionaria, onRemove, mixpanelPage,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <LogoMarca marca={concessionaria.marca} />
      <span className={classes.info}>
        {concessionaria.text}
      </span>
      <ButtonTooltipIcon
        title="Excluir"
        className={classes.button}
        buttonAction={() => onRemove(concessionaria.value)}
        mixpanelTarget="Remover concessionária da seleção"
        mixpanelPage={mixpanelPage}
      >
        <DeleteIcon fontSize="small" style={{ color: 'white' }} />
      </ButtonTooltipIcon>
    </Box>
  );
};

ConcessionariaListRow.propTypes = {
  concessionaria: PropTypes.object,
  onRemove: PropTypes.func,
  mixpanelPage: PropTypes.string,
};

ConcessionariaListRow.defaultProps = {
  concessionaria: {},
  onRemove: () => {},
  mixpanelPage: '',
};

export default ConcessionariaListRow;
