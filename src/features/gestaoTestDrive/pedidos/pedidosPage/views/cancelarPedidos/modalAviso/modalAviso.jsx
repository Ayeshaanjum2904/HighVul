import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, Box } from '@mui/material';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

import AlertDialog from 'common/layout/alertDialog/alertDialog';

const ModalAviso = ({
  open,
  onClose,
  pedidosCancelados,
}) => {
  const formatarListaPedidos = () => {
    const ids = pedidosCancelados.map((p) => p.id);
    return `#${ids.join(' #')}`;
  };

  const renderContent = () => (
    <Box sx={{ px: 3 }}>
      <Typography variant="body1" gutterBottom sx={{ color: '#304AAF' }}>
        {formatarListaPedidos()}
      </Typography>

      <Typography variant="body2" sx={{ color: '#505669' }}>
        {pedidosCancelados.length === 1
          ? 'O pedido selecionado já se encontra em estado de cancelamento.'
          : 'Os pedidos selecionados já se encontram em estado de cancelamento.'}
      </Typography>
    </Box>
  );

  const renderActions = () => (
    <Button
      variant="contained"
      onClick={onClose}
      sx={{
        backgroundColor: '#505669',
        '&:hover': {
          backgroundColor: '#3C414E',
        },
      }}
    >
      Entendi
    </Button>
  );

  return (
    <AlertDialog
      open={open}
      handleClose={onClose}
      icon={<WarningRoundedIcon sx={{ color: '#C76800', fontSize: 24 }} />}
      title={(
        <Typography variant="16_bold" lineHeight="24px" component="span" sx={{ color: '#3C414E' }}>
          {pedidosCancelados.length === 1
            ? 'O pedido abaixo não pode ser cancelado'
            : 'Os pedidos abaixo não podem ser cancelados'}
        </Typography>
      )}
      content={renderContent()}
      actions={renderActions()}
      width={720}
    />
  );
};

ModalAviso.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  pedidosCancelados: PropTypes.array.isRequired,
};

export default ModalAviso;
