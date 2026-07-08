/* eslint-disable camelcase */
import { React } from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, Stack } from '@mui/material';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import PendingActionsRoundedIcon from '@mui/icons-material/PendingActionsRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import moment from 'moment';
import { formatNomePessoa } from 'utils/format';
import colors from 'assets/styles/colors';

const AssinaturaItem = ({
  ordem, nome, email, dataAssinatura, isLastItem, isAssinado, isRecusado, hideIndex,
}) => {
  const {
    primary_color_500,
    secundary_color_200,
    success_color_200,
    error_color_600_1,
    graphic_color_8,
    secundary_color_100,
  } = colors;

  const statusConfig = {
    assinado: {
      statusText: 'Assinado',
      Icon: CheckSharpIcon,
      iconColor: success_color_200,
    },
    recusado: {
      statusText: 'Recusado',
      Icon: CloseRoundedIcon,
      iconColor: error_color_600_1,
    },
    default: {
      statusText: 'Precisa assinar',
      Icon: PendingActionsRoundedIcon,
      iconColor: secundary_color_200,
    },
  };

  const statusMap = () => {
    let key = 'default';
    if (isRecusado) {
      key = 'recusado';
    } else if (isAssinado) {
      key = 'assinado';
    }
    return statusConfig[key];
  };

  const getData = () => moment(dataAssinatura).format('DD/MM/YYYY');
  const getHora = () => moment(dataAssinatura).format('HH:mm');

  const getSubTitulo = () => {
    const assinaturaInfo = isAssinado ? ` | Assinado em: ${getData()} às ${getHora()}` : '';
    return `Email: ${email}${assinaturaInfo}`;
  };

  const getRealIndex = () => {
    if (!ordem) return '-';
    return ordem;
  };

  const renderIndex = () => {
    const colorIndex = (isAssinado || isRecusado) ? primary_color_500 : secundary_color_200;
    return (
      <Typography lineHeight="14px" fontSize="14px" color={colorIndex}>
        {getRealIndex()}
      </Typography>
    );
  };

  const renderHeader = () => {
    const { statusText, Icon, iconColor } = statusMap();
    return (
      <Stack direction="row" spacing={1}>
        <Typography lineHeight="14px" fontSize="14px" color={graphic_color_8}>
          {formatNomePessoa(nome)}
        </Typography>
        <Stack direction="row" gap={0.3}>
          <Typography lineHeight="14px" fontSize="14px" color={iconColor}>
            {statusText}
          </Typography>
          <Icon htmlColor={iconColor} style={{ fontSize: '15px' }} />
        </Stack>
      </Stack>
    );
  };

  const renderSubTitulo = () => (
    <Stack height="16px" direction="row" alignItems="center" gap="4px">
      <Box>
        <Typography lineHeight="14px" fontSize="12px" color={graphic_color_8}>
          {getSubTitulo()}
        </Typography>
      </Box>
    </Stack>
  );

  return (
    <Stack fullWidth spacing={1} direction="row" padding="12px 0px" borderBottom={isLastItem ? 'none' : `1px solid ${secundary_color_100}`} gap="1px">
      {!hideIndex && (renderIndex())}
      <Stack spacing={1}>
        <Box>
          {renderHeader()}
        </Box>
        <Box>
          {renderSubTitulo()}
        </Box>
      </Stack>
    </Stack>
  );
};

AssinaturaItem.propTypes = {
  ordem: PropTypes.number.isRequired,
  nome: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  dataAssinatura: PropTypes.string,
  isLastItem: PropTypes.bool,
  isAssinado: PropTypes.bool,
  isRecusado: PropTypes.bool,
  hideIndex: PropTypes.bool,
};

AssinaturaItem.defaultProps = {
  dataAssinatura: '',
  isLastItem: false,
  isAssinado: false,
  isRecusado: false,
  hideIndex: false,
};

export default AssinaturaItem;
