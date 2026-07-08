import React from 'react';
import PropTypes from 'prop-types';
import AlertDialog from 'common/layout/alertDialog/alertDialog';
import { Box, Button, Typography } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';
import colors from 'assets/styles/colors';
import { TextBoxStyle, TypographyStyle } from './validationDialog.style';

const ValidationDialog = ({
  documento, onConfirm, openDialog, setOpenDialog, isValidation,
}) => {
  const actionText = isValidation ? 'validar o documento ' : 'desfazer a validação do documento ';
  const icon = isValidation ? <CheckRoundedIcon sx={{ color: '#06C270' }} /> : <KeyboardReturnRoundedIcon sx={{ color: colors.icon_color }} />;
  const confirmText = isValidation ? 'Sim, validar' : 'Sim, desfazer';

  return (
    <AlertDialog
      open={openDialog}
      handleClose={() => setOpenDialog(false)}
      icon={icon}
      title={`${isValidation ? 'Validar documento' : 'Desfazer validação'}`}
      content={(
        <Typography variant="14_regular" component="div" sx={TypographyStyle}>
          {`Tem certeza que deseja ${actionText}`}
          <Box title={documento} sx={TextBoxStyle} component="span">{documento}</Box>
          ?
        </Typography>
      )}
      actions={(
        <>
          <Button variant="outlined" onClick={() => setOpenDialog(false)} color="secondary700">
            Cancelar
          </Button>
          <Button variant="contained" onClick={() => { setOpenDialog(false); onConfirm(); }} color="secondary700">
            {confirmText}
          </Button>
        </>
      )}
    />
  );
};

ValidationDialog.propTypes = {
  documento: PropTypes.string.isRequired,
  onConfirm: PropTypes.func,
  openDialog: PropTypes.bool,
  setOpenDialog: PropTypes.func,
  isValidation: PropTypes.bool.isRequired,
};

ValidationDialog.defaultProps = {
  onConfirm: () => {},
  openDialog: false,
  setOpenDialog: () => {},
};

export default ValidationDialog;
