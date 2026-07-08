import { React } from 'react';
import PropTypes from 'prop-types';
import AlertDialog from 'common/layout/alertDialog/alertDialog';
import { Box, Button, Typography } from '@mui/material';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { TextBoxStyle, TypographyStyle } from './deleteDialog.style';

const DeleteDialog = ({
  documento, onDelete, openDeleteDialog, setOpenDeleteDialog, hasAnexoDealer,
}) => {
  const handleDeleteAction = () => {
    setOpenDeleteDialog(false);
    onDelete();
  };

  const renderText = () => (hasAnexoDealer
    ? (
      <>
        Existe um anexo
        {' '}
        <Box fontWeight={700} component="span">enviado pelo dealer</Box>
        {' '}
        no documento
        {' '}
        <Box title={documento} sx={TextBoxStyle} component="span">
          {`${documento}`}
        </Box>
        . Tem certeza que deseja excluir?
      </>
    ) : (
      <>
        Tem certeza que deseja excluir o documento
        {' '}
        <Box title={documento} sx={TextBoxStyle} component="span">
          {`${documento}`}
        </Box>
        ? Caso clique em excluir todos os dados serão apagados.
      </>
    ));

  return (
    <AlertDialog
      open={openDeleteDialog}
      handleClose={() => setOpenDeleteDialog(false)}
      icon={<WarningRoundedIcon color="error300" />}
      title="Excluir documento"
      content={(
        <Typography variant="14_regular" component="div" sx={TypographyStyle}>
          {renderText()}
        </Typography>
      )}
      actions={(
        <>
          <Button variant="outlined" onClick={() => setOpenDeleteDialog(false)} color="secondary700">Cancelar</Button>
          <Button variant="contained" onClick={handleDeleteAction} color="secondary700">Sim, excluir</Button>
        </>
      )}
    />
  );
};

DeleteDialog.propTypes = {
  documento: PropTypes.string,
  onDelete: PropTypes.func,
  openDeleteDialog: PropTypes.bool,
  setOpenDeleteDialog: PropTypes.func,
  hasAnexoDealer: PropTypes.bool,
};

DeleteDialog.defaultProps = {
  documento: '',
  onDelete: () => {},
  openDeleteDialog: false,
  setOpenDeleteDialog: () => {},
  hasAnexoDealer: false,
};

export default DeleteDialog;
