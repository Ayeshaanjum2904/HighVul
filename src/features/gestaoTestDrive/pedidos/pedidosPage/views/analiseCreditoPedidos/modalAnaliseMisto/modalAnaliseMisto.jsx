import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Typography, Box,
} from '@mui/material';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

import AlertDialog from 'common/layout/alertDialog/alertDialog';

const ModalAnaliseMisto = ({
  open,
  onClose,
  pedidosValidos,
  pedidosInvalidos,
  isLoading,
  onConfirmar,
  tipoAcao,
}) => {
  const handleConfirmar = () => {
    const pedidosIds = pedidosValidos.map((pedido) => pedido.id);
    onConfirmar(pedidosIds, tipoAcao);
  };

  const isConfirmarDisabled = isLoading;

  const formatarListaPedidosInvalidos = () => {
    const ids = pedidosInvalidos.map((p) => p.id);
    return `#${ids.join(' #')}`;
  };

  const renderContent = () => (
    <Box sx={{ px: 3 }}>
      <Typography variant="body1" gutterBottom sx={{ color: '#505669' }}>
        {pedidosInvalidos.length === 1
          ? 'O seguinte pedido não está em análise de crédito:'
          : 'Os seguintes pedidos não estão em análise de crédito:'}
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ color: '#304AAF' }}>
        {formatarListaPedidosInvalidos()}
      </Typography>
      <Typography variant="body1" sx={{ color: '#505669' }}>
        {pedidosValidos.length === 1
          ? `Deseja prosseguir com a ${tipoAcao === 'aprovar' ? 'aprovação' : 'reprovação'} do pedido restante?`
          : `Deseja prosseguir com a ${tipoAcao === 'aprovar' ? 'aprovação' : 'reprovação'} dos ${pedidosValidos.length} pedidos restantes?`}
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
      >
        {tipoAcao === 'aprovar' ? 'Aprovar' : 'Reprovar'}
      </Button>
    </>
  );

  return (
    <AlertDialog
      open={open}
      handleClose={onClose}
      title={pedidosInvalidos.length === 1
        ? 'Um pedido não está em análise de crédito'
        : 'Alguns pedidos não estão em análise de crédito'}
      icon={<WarningRoundedIcon sx={{ color: '#C76800', fontSize: 24 }} />}
      content={renderContent()}
      actions={renderActions()}
      maxWidth="sm"
    />
  );
};

ModalAnaliseMisto.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  pedidosValidos: PropTypes.array,
  pedidosInvalidos: PropTypes.array,
  isLoading: PropTypes.bool,
  onConfirmar: PropTypes.func.isRequired,
  tipoAcao: PropTypes.oneOf(['aprovar', 'reprovar']).isRequired,
};

ModalAnaliseMisto.defaultProps = {
  pedidosValidos: [],
  pedidosInvalidos: [],
  isLoading: false,
};

export default ModalAnaliseMisto;
