import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Typography, Box,
} from '@mui/material';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

import AlertDialog from 'common/layout/alertDialog/alertDialog';

const ModalAnaliseConfirmacao = ({
  open,
  onClose,
  pedidosValidos,
  isLoading,
  onConfirmar,
  tipoAcao,
}) => {
  const handleConfirmar = () => {
    const pedidosIds = pedidosValidos.map((pedido) => pedido.id);
    onConfirmar(pedidosIds, tipoAcao);
  };

  const isConfirmarDisabled = isLoading;

  const renderContent = () => (
    <Box sx={{ px: 3 }}>
      <Typography variant="body1" gutterBottom sx={{ color: '#505669' }}>
        {pedidosValidos.length === 1
          ? `Tem certeza que deseja ${tipoAcao === 'aprovar' ? 'aprovar' : 'reprovar'} a análise de crédito do pedido selecionado?`
          : `Tem certeza que deseja ${tipoAcao === 'aprovar' ? 'aprovar' : 'reprovar'} a análise de crédito dos pedidos selecionados?`}
      </Typography>
    </Box>
  );

  const renderActions = () => (
    <>
      <Button
        variant="outlined"
        onClick={onClose}
        disabled={isLoading}
        sx={{
          color: '#505669',
          borderColor: '#505669',
          '&:hover': {
            borderColor: '#3C414E',
            backgroundColor: 'rgba(80, 86, 105, 0.08)',
          },
        }}
      >
        Voltar
      </Button>
      <Button
        variant="contained"
        onClick={handleConfirmar}
        disabled={isConfirmarDisabled}
        sx={{
          backgroundColor: '#505669',
          '&:hover': {
            backgroundColor: '#3C414E',
          },
          '&:disabled': {
            backgroundColor: '#f5f5f5',
            color: '#9e9e9e',
          },
        }}
        loading={isLoading}
      >
        {tipoAcao === 'aprovar' ? 'Sim, aprovar' : 'Sim, reprovar'}
      </Button>
    </>
  );

  return (
    <AlertDialog
      open={open}
      handleClose={onClose}
      title={tipoAcao === 'aprovar' ? 'Aprovar análise de crédito' : 'Reprovar análise de crédito'}
      icon={<WarningRoundedIcon sx={{ color: '#C76800', fontSize: 24 }} />}
      content={renderContent()}
      actions={renderActions()}
      maxWidth="sm"
    />
  );
};

ModalAnaliseConfirmacao.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  pedidosValidos: PropTypes.array,
  isLoading: PropTypes.bool,
  onConfirmar: PropTypes.func.isRequired,
  tipoAcao: PropTypes.oneOf(['aprovar', 'reprovar']).isRequired,
};

ModalAnaliseConfirmacao.defaultProps = {
  pedidosValidos: [],
  isLoading: false,
};

export default ModalAnaliseConfirmacao;
