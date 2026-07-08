import React from 'react';
import PropTypes from 'prop-types';
import './modalLimitePropostaDetailSection.scss';
import colors from 'assets/styles/colors';
import TooltipMessage from 'common/controls/tooltipMessage';
import { Box } from '@mui/material';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';

const ModalLimitePropostaDetailSection = ({ items }) => {
  const getTooltipMessage = (campo) => {
    if (campo === 'Limite total aprovado') return 'Valor do limite total aprovado foi alterado.';
    if (campo === 'Vencimento') return 'A data de vencimento da aprovação foi alterada.';
    return null;
  };
  const LimiteModificadoIcon = () => (
    <ErrorRoundedIcon
      style={{
        fontSize: '16px',
        color: colors.alert_color_300,
      }}
    />
  );

  return (
    <div className="modal-limite-proposta__dados">
      <div className="modal-limite-proposta__items">
        {items?.map((item, index) => (
          <div className="modal-limite-proposta__item" key={index}>
            <div
              className="modal-limite-proposta__item-chave"
              style={item.modificado ? { color: colors.alert_color_300 } : {}}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {item.chave}
                {item.modificado && (
                  <TooltipMessage
                    title={getTooltipMessage(item.chave)}
                    placement="bottom-start"
                    maxWidth="280px"
                  >
                    <Box sx={{
                      cursor: 'pointer', display: 'flex', alignItems: 'center', marginLeft: '8px',
                    }}
                    >
                      <LimiteModificadoIcon />
                    </Box>
                  </TooltipMessage>
                )}
              </Box>
            </div>
            <div
              className="modal-limite-proposta__item-valor"
              style={item.modificado ? { color: colors.alert_color_300 } : {}}
            >
              {item.valor}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ModalLimitePropostaDetailSection.propTypes = {
  items: PropTypes.array,
};

ModalLimitePropostaDetailSection.defaultProps = {
  items: [],
};

export default ModalLimitePropostaDetailSection;
