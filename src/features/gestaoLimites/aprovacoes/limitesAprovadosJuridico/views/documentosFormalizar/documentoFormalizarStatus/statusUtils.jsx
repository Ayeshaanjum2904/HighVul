import { React } from 'react';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CancelScheduleSendIcon from '@mui/icons-material/CancelScheduleSend';
import PendingActionsRoundedIcon from '@mui/icons-material/PendingActionsRounded';
import { Stack } from '@mui/material';
import StatusItem from './statusItem';

export function getDocumentStatus(document) {
  const hasDealerAttachment = document?.listaArquivos?.some((file) => file.tipo === 'dealer');
  if (document?.tipoEnvioDocumento?.includes('anexo_do_dealer')) {
    if (hasDealerAttachment) {
      return document?.validado ? 'Validado' : 'Pendente validação';
    }
    return 'Pendente anexo dealer';
  }
  return document?.validado ? 'Validado' : 'Pendente validação';
}

export function renderStatusItens(documentsStatus) {
  const allValidated = Array.isArray(documentsStatus)
    ? documentsStatus?.every((status) => status === 'Validado')
    : documentsStatus === 'Validado';

  const statusConfigs = [
    {
      condition: documentsStatus?.includes('Pendente validação'),
      icon: <PendingActionsRoundedIcon sx={{ fontSize: '16px', color: '#BF8900' }} />,
      color: '#BF8900',
      text: 'Pendente validação',
    },
    {
      condition: documentsStatus?.includes('Pendente anexo dealer'),
      icon: <CancelScheduleSendIcon sx={{ fontSize: '16px', color: '#BF8900' }} />,
      color: '#BF8900',
      text: 'Pendente anexo dealer',
    },
    {
      condition: documentsStatus?.length > 0 && allValidated,
      icon: <CheckRoundedIcon sx={{ fontSize: '16px', color: '#06C270' }} />,
      color: '#06C270',
      text: 'Validado',
    },
  ];

  return (
    <Stack columnGap="4px" direction="row" alignItems="center">
      {statusConfigs.map(({
        condition, icon, color, text,
      }, index) => condition && <StatusItem key={index} icon={icon} color={color} text={text} />)}
    </Stack>
  );
}
