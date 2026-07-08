import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Box } from '@mui/material';
import TooltipMessage from 'common/controls/tooltipMessage';
import { Container, LimiteModificadoIcon, LimiteRemovidoIcon } from './cellAlert.style';

const getTooltipMessage = (removido, modificado, modificacoes) => {
  if (removido) return 'Limite indisponível. Verifique o motivo junto ao setor de crédito.';
  if (modificado) {
    if (modificacoes.condicao && modificacoes.vencimento) {
      return 'As condições e a data de vencimento da aprovação foram alteradas.';
    }
    if (modificacoes.condicao) return 'As condições da aprovação foram alteradas.';

    return 'A data de vencimento da aprovação foi alterada.';
  }

  return null;
};

const CellAlert = memo(({
  row, value, isValorLimite, permissionList,
}) => {
  const modificacoes = { condicao: false, vencimento: false, valor: false };
  row?.modificados?.forEach((modificado) => {
    modificacoes.condicao ||= modificado.camposModificados.includes('condicao');
    modificacoes.vencimento ||= modificado.camposModificados.includes('dataVencimento');
    modificacoes.valor ||= modificado.camposModificados.includes('valorLimite');
  });

  const removido = row?.tipoLimite === 'REMOVIDO';
  const modificado = !removido && (modificacoes.condicao || modificacoes.vencimento);

  return (
    <Container>
      {!isValorLimite && (
        <Box sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }} title={value}>
          {value}
        </Box>
      )}
      {((!isValorLimite && (removido || modificado)) || (isValorLimite && modificacoes.valor))
      && (permissionList.isGestaoFinanciamentoRede)
      && (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TooltipMessage
            title={isValorLimite
              ? 'Valor de aprovação foi alterado.'
              : getTooltipMessage(removido, modificado, modificacoes)}
            placement="bottom-start"
            maxWidth="230px"
          >
            <Box sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              {removido && <LimiteRemovidoIcon />}
              {modificado && <LimiteModificadoIcon />}
            </Box>
          </TooltipMessage>
        </Box>
      )}
      {isValorLimite && (
        <Box sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }} title={value}>
          {value}
        </Box>
      )}
    </Container>
  );
});

CellAlert.propTypes = {
  row: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  isValorLimite: PropTypes.bool,
  permissionList: PropTypes.object.isRequired,
};

CellAlert.defaultProps = {
  isValorLimite: false,
};

export default CellAlert;
