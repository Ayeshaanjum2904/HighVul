import { React } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Box, Stack } from '@mui/material';
import SearchOffRoundedIcon from '@mui/icons-material/SearchOffRounded';
import MessageIcon from '@mui/icons-material/Message';
import colors from 'assets/styles/colors';
import ObservacoesItem from './observacoesItem/observacoesItem';

const ObservacoesList = ({
  observacoes, filteredObservacoes, isDealer, downloadDocumento,
}) => {
  if (_.isEmpty(observacoes)) {
    return (
      <Stack color={colors.primary_color_600} height={104} gap="8px" alignItems="center" padding="24px 0px">
        <MessageIcon color="inherit" />
        <Box component="span" fontWeight={700} lineHeight="24px" fontSize="14px">
          Ainda não existem mensagens.
        </Box>
      </Stack>
    );
  }
  if (_.isEmpty(filteredObservacoes)) {
    return (
      <Stack color={colors.primary_color_600} height={104} gap="8px" alignItems="center" padding="24px 0px">
        <SearchOffRoundedIcon color="inherit" />
        <Box component="span" fontWeight={700} lineHeight="24px" fontSize="14px">
          Nenhuma mensagem foi encontrada.
        </Box>
      </Stack>
    );
  }
  return (
    <Stack>
      {filteredObservacoes?.map((item, index) => (
        <ObservacoesItem
          key={index}
          item={item}
          isLastItem={index === (filteredObservacoes?.length || 0) - 1}
          isDealer={isDealer}
          downloadDocumento={downloadDocumento}
        />
      ))}
    </Stack>
  );
};

ObservacoesList.propTypes = {
  observacoes: PropTypes.array,
  filteredObservacoes: PropTypes.array,
  isDealer: PropTypes.bool,
  downloadDocumento: PropTypes.func,
};

ObservacoesList.defaultProps = {
  observacoes: [],
  filteredObservacoes: [],
  isDealer: false,
  downloadDocumento: () => {},
};

export default ObservacoesList;
