import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Stack, Typography } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';

const AlertDialog = ({
  open, handleClose, icon, title, content, actions, width, disableCloseOutside,
}) => {
  const [openState, setOpenState] = useState(open);
  useEffect(() => {
    setOpenState(open);
  }, [open]);

  const handleCloseAction = (_, reason) => {
    if (disableCloseOutside && reason && reason === 'backdropClick') return;
    handleClose();
  };

  const renderDefaultAction = () => (
    <Button variant="contained" onClick={handleCloseAction} color="secondary700">Fechar</Button>
  );

  return (
    <Dialog
      open={openState}
      onClose={handleCloseAction}
      PaperProps={{
        sx: {
          padding: '24px 16px 16px 16px',
          gap: '24px',
          width,
        },
      }}
    >
      <DialogTitle display="flex" flexDirection="row" gap="8px" sx={{ padding: 0 }} lineHeight="24px" component="div">
        {icon}
        <Typography variant="16_bold" lineHeight="24px" component="span">
          {title}
        </Typography>
        <Box position="absolute" right="12px" top="8px">
          <IconButtonTooltip onClick={handleCloseAction} tooltip="Fechar" size={24} padding={0}>
            <CloseRoundedIcon />
          </IconButtonTooltip>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ padding: 0 }}>
        {content}
      </DialogContent>
      <DialogActions sx={{ padding: 0 }}>
        <Stack columnGap="12px" direction="row">
          {actions || renderDefaultAction()}
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

AlertDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  icon: PropTypes.node,
  title: PropTypes.string,
  content: PropTypes.node,
  actions: PropTypes.node,
  width: PropTypes.number,
  disableCloseOutside: PropTypes.bool,
};

AlertDialog.defaultProps = {
  open: false,
  handleClose: () => {},
  icon: null,
  title: '',
  content: null,
  actions: null,
  width: 544,
  disableCloseOutside: false,
};

export default AlertDialog;
