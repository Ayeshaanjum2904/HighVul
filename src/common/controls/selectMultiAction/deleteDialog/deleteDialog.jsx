import { React } from 'react';
import PropTypes from 'prop-types';
import AlertDialog from 'common/layout/alertDialog/alertDialog';
import { Box, Button, Typography } from '@mui/material';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { TextBoxStyle, TypographyStyle } from './deleteDialog.style';

const DeleteDialog = ({
  item, onDelete, openDeleteDialog, setOpenDeleteDialog, dictionary,
}) => {
  const handleDeleteAction = () => {
    setOpenDeleteDialog(false);
    onDelete(item?.value);
  };

  return (
    <AlertDialog
      open={openDeleteDialog}
      handleClose={() => setOpenDeleteDialog(false)}
      icon={<WarningRoundedIcon color="error300" />}
      title="Excluir tipo de documento"
      content={(
        <Typography variant="14_regular" component="div" sx={TypographyStyle}>
          {`${dictionary?.deleteText[0]} `}
          <Box title={item?.text} sx={TextBoxStyle}>
            {`${item?.text}`}
          </Box>
          {` ${dictionary?.deleteText[1]}`}
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
  item: PropTypes.object,
  onDelete: PropTypes.func,
  openDeleteDialog: PropTypes.bool,
  setOpenDeleteDialog: PropTypes.func,
  dictionary: PropTypes.object.isRequired,
};

DeleteDialog.defaultProps = {
  item: null,
  onDelete: () => {},
  openDeleteDialog: false,
  setOpenDeleteDialog: () => {},
};

export default DeleteDialog;
