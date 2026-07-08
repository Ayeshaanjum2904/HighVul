import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Typography, Box,
} from '@mui/material';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

import AlertDialog from 'common/layout/alertDialog/alertDialog';

const ModalAnaliseAviso = ({
  open,
  onClose,
  tipoAcao,
  pedidosInvalidos,
}) => {
  const renderContent = () => (
    <Box sx={{ px: 3 }}>
      <Typography variant="body1" gutterBottom sx={{ color: '#505669' }}>
        {pedidosInvalidos && pedidosInvalidos.length === 1
          ? 'O pedido selecionado não está em um status válido para análise de crédito.'
          : 'Nenhum dos pedidos selecionados está em um status válido para análise de crédito.'}
      </Typography>
    </Box>
  );

  const renderActions = () => (
    <Box sx={{
      display: 'flex', justifyContent: 'center', px: 3,
    }}
    >
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
    </Box>
  );

  return (
    <AlertDialog
      open={open}
      handleClose={onClose}
      title={pedidosInvalidos && pedidosInvalidos.length === 1
        ? `Não foi possível ${tipoAcao === 'aprovar' ? 'aprovar' : 'reprovar'} esse pedido.`
        : `Não foi possível ${tipoAcao === 'aprovar' ? 'aprovar' : 'reprovar'} esses pedidos.`}
      icon={<WarningRoundedIcon sx={{ color: '#C76800', fontSize: 24 }} />}
      content={renderContent()}
      actions={renderActions()}
      maxWidth="sm"
    />
  );
};

ModalAnaliseAviso.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  tipoAcao: PropTypes.oneOf(['aprovar', 'reprovar']).isRequired,
  pedidosInvalidos: PropTypes.array,
};

ModalAnaliseAviso.defaultProps = {
  pedidosInvalidos: [],
};

export default ModalAnaliseAviso;
