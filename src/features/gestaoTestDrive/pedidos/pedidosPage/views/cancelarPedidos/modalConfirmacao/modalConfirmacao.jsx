import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, TextField, Typography, Box,
} from '@mui/material';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

import AlertDialog from 'common/layout/alertDialog/alertDialog';

const ModalConfirmacao = ({
  open,
  onClose,
  pedidosValidos,
  justificativa,
  onJustificativaChange,
  isLoading,
  onConfirmar,
}) => {
  const handleConfirmar = () => {
    if (justificativa.trim()) {
      const pedidosIds = pedidosValidos.map((pedido) => pedido.id);
      onConfirmar(pedidosIds);
    }
  };

  const isConfirmarDisabled = !justificativa.trim() || isLoading;

  const renderContent = () => (
    <Box sx={{ px: 3 }}>
      <Typography variant="body1" gutterBottom sx={{ color: '#505669' }}>
        {pedidosValidos.length === 1
          ? 'O pedido selecionado será cancelado definitivamente, insira uma justificativa para continuar essa ação.'
          : 'Os pedidos selecionados serão cancelados definitivamente, insira uma justificativa para continuar essa ação.'}
      </Typography>

      <Box mt={2}>
        <TextField
          fullWidth
          multiline
          rows={4}
          placeholder="Insira a justificativa (obrigatório)*"
          value={justificativa}
          onChange={(e) => onJustificativaChange(e.target.value)}
          disabled={isLoading}
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              fontSize: '14px',
              backgroundColor: '#F9F9FA',
              color: '#656C83',
              '& fieldset': {
                borderColor: '#C4C7D0 !important',
                borderWidth: '1px !important',
              },
              '&:hover fieldset': {
                borderColor: '#C4C7D0 !important',
                borderWidth: '1px !important',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#C4C7D0 !important',
                borderWidth: '1px !important',
              },
              '&.Mui-focused': {
                '& fieldset': {
                  borderColor: '#C4C7D0 !important',
                  borderWidth: '1px !important',
                },
              },
            },
            '& .MuiInputBase-input': {
              color: '#656C83',
            },
          }}
        />
      </Box>
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
        Prosseguir
      </Button>
    </>
  );

  return (
    <AlertDialog
      open={open}
      handleClose={onClose}
      icon={<WarningRoundedIcon sx={{ color: '#C76800', fontSize: 24 }} />}
      title={(
        <Typography variant="16_bold" lineHeight="24px" component="span" sx={{ color: '#3C414E' }}>
          {pedidosValidos.length === 1 ? 'Cancelar pedido?' : 'Cancelar pedidos?'}
        </Typography>
      )}
      content={renderContent()}
      actions={renderActions()}
      width={720}
      disableCloseOutside={isLoading}
    />
  );
};

ModalConfirmacao.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  pedidosValidos: PropTypes.array.isRequired,
  justificativa: PropTypes.string.isRequired,
  onJustificativaChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  onConfirmar: PropTypes.func.isRequired,
};

ModalConfirmacao.defaultProps = {
  isLoading: false,
};

export default ModalConfirmacao;
