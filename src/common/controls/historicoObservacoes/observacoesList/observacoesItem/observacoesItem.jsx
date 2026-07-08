/* eslint-disable camelcase */
import {
  React, useState, useEffect, useRef,
} from 'react';
import PropTypes from 'prop-types';
import { Box, Stack } from '@mui/material';
import parse from 'html-react-parser';

import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import NotificationImportantRoundedIcon from '@mui/icons-material/NotificationImportantRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import colors from 'assets/styles/colors';
import moment from 'moment';

import MultiplosAnexos from '../../multiplosAnexos/multiplosAnexos';
import ExpandButton from './expandButton';

const ObservacoesItem = ({
  item, isDealer, isLastItem, downloadDocumento,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const textRef = useRef(null);
  const {
    primary_color_300,
    primary_color_500,
    secundary_color_100,
    secundary_color_500,
    secundary_color_700,
    error_color_600_1,
    alert_color_200,
  } = colors;

  useEffect(() => {
    if (textRef.current && textRef.current.scrollHeight > 96) {
      setShowButton(true);
    }
  }, []);

  const getPerfilUsuario = () => {
    switch (item?.perfil) {
      case 'cadastro':
        return 'Cadastro';
      case 'credito':
        return 'Crédito';
      case 'dealer':
        return 'Dealer';
      case 'financiamento':
        return 'Finan. Rede';
      case 'juridico':
        return 'Jurídico';
      default:
        return 'N/A';
    }
  };

  const getNomeUsuario = () => (
    item?.usuarioNome
      ? item?.usuarioNome
      : item?.usuarioEmail.split('@', 1)[0] ?? 'N/A'
  );

  const getData = () => moment(item?.criadoEm).format('DD/MM/YYYY');

  const getHora = () => moment(item?.criadoEm).format('HH:mm');

  const renderInfo = (
    Icon,
    firstText,
    secondText,
    iconColor = primary_color_300,
    textColor = secundary_color_500,
  ) => (
    <Stack height="16px" direction="row" alignItems="center" gap="4px">
      <Icon htmlColor={iconColor} style={{ fontSize: '12px' }} />
      <Box
        component="span"
        sx={{
          color: textColor,
          fontSize: '12px',
          lineHeight: '16px',
          fontWeight: 450,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '260px',
        }}
      >
        {firstText}
        {secondText && (
          <>
            {' | '}
            <span title={secondText}>
              {secondText}
            </span>
          </>
        )}
      </Box>
    </Stack>
  );

  return (
    <Stack padding="12px 0px" borderBottom={isLastItem ? 'none' : `1px solid ${secundary_color_100}`} gap="1px">
      <Box
        fontSize="14px"
        lineHeight="16px"
        fontWeight="450"
        color={secundary_color_700}
        ref={textRef}
        sx={{
          maxHeight: expanded ? 'none' : '96px',
          overflow: 'hidden',
          position: 'relative',
          display: '-webkit-box',
          WebkitLineClamp: expanded ? 'none' : '6',
          WebkitBoxOrient: 'vertical',
          textOverflow: 'ellipsis',
          '& > p': { margin: 0 },
        }}
      >
        {parse(`${item?.detalhes ? `<b>${item.detalhes}</b><br /><br />` : ''}${item?.observacao}`)}
      </Box>
      {showButton && (
        <ExpandButton
          expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        />
      )}
      <MultiplosAnexos
        downloadDocumento={downloadDocumento}
        documentos={item.anexos}
        disableUpload
      />
      <Stack height="16px" direction="row" alignItems="center" gap="8px" whiteSpace="no-wrap">
        {item?.notificacaoSistema
          ? renderInfo(NotificationImportantRoundedIcon, 'Notificação do Sistema', getNomeUsuario())
          : renderInfo(PersonRoundedIcon, getPerfilUsuario(), getNomeUsuario())}
        {renderInfo(AccessTimeRoundedIcon, getData(), getHora())}
        {item?.anexoRemovido && (
          renderInfo(CloseRoundedIcon, 'Anexo invalidado', null, error_color_600_1, error_color_600_1)
        )}
        {item?.justificativa && (
          renderInfo(WarningRoundedIcon, item.justificativa, null, alert_color_200, alert_color_200)
        )}
        {(!isDealer && item?.enviarDealer) && (
          renderInfo(RemoveRedEyeIcon, 'Visível para o dealer', null, primary_color_500, primary_color_500)
        )}
      </Stack>
    </Stack>
  );
};

ObservacoesItem.propTypes = {
  item: PropTypes.object,
  isDealer: PropTypes.bool,
  isLastItem: PropTypes.bool,
  downloadDocumento: PropTypes.func,
};

ObservacoesItem.defaultProps = {
  item: null,
  isDealer: false,
  isLastItem: false,
  downloadDocumento: () => { },
};

export default ObservacoesItem;
