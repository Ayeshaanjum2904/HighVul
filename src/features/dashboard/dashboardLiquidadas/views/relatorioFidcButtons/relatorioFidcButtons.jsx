import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Download } from 'react-feather';

import NewBasicSelect from 'common/controls/newBasicSelect/newBasicSelect';

import AlertDialog from 'common/layout/alertDialog/alertDialog';
import { Box, Typography } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import {
  ButtonIcon, ClearButton, ExportButton, Row, StatusContainer,
} from './relatorioFidcButtons.style';
import { useRelatorioContext } from '../../context/relatorio';

const statusOptions = [
  {
    label: 'Em Aberto',
    value: 'EmAberto',
  },
  {
    label: 'Liquidadas',
    value: 'Pagas',
  },
];

const RelatorioFidcButtons = ({
  action, clear, loading, userEmail,
}) => {
  const [
    {
      relatorioDataInicioEntrada,
      relatorioDataFimEntrada,
      relatorioDataInicioVencimento,
      relatorioDataFimVencimento,
      relatorioInvalidEntradaDate,
      relatorioInvalidVencimentoDate,
      selectedRelatorioConcessionarias,
      selectedRelatorioRegionais,
      selectedRelatorioBrand,
      selectedRelatorioStatus,
      openDialog,
    },
    {
      setSelectedRelatorioStatus,
      setOpenDialog,
    },
  ] = useRelatorioContext();

  const filled = (_.some([
    relatorioDataInicioEntrada,
    relatorioDataFimEntrada,
    relatorioDataInicioVencimento,
    relatorioDataFimVencimento,
    selectedRelatorioBrand,
  ], _.identity)
  || !_.every([selectedRelatorioConcessionarias, selectedRelatorioRegionais], _.isEmpty)
  || selectedRelatorioStatus !== 'all'
  ) && selectedRelatorioBrand;

  const enabled = filled && !(relatorioInvalidEntradaDate || relatorioInvalidVencimentoDate);

  return (
    <>
      <Row>
        <StatusContainer>
          <NewBasicSelect
            options={statusOptions}
            setOption={setSelectedRelatorioStatus}
            selectedOption={selectedRelatorioStatus}
            nameLabel="Status"
            dataCy="filter-status"
            minWidth={200}
            labelAll="Todos os status"
            renderAllOptions
            placeholder="Selecione um status"
          />
        </StatusContainer>
        <ClearButton color="new-gray" onClick={clear} disabled={!filled || loading} dataCy="ButtonClear">
          Limpar filtros
        </ClearButton>
        <ExportButton color="new-blue" onClick={action} disabled={!enabled} isLoading={loading} dataCy="ButtonExport">
          <ButtonIcon>
            <Download fontSize="inherit" />
          </ButtonIcon>
          Exportar relatório
        </ExportButton>
      </Row>
      <AlertDialog
        open={openDialog}
        handleClose={() => setOpenDialog(false)}
        icon={<FileDownloadOutlinedIcon color="icon" viewBox="2.5 2.5 19 19" />}
        title="Relatório em geração"
        content={(
          <Typography variant="14_regular" lineHeight="24px" component="span">
            Seu relatório de duplicatas do FIDC está sendo gerado e será enviado para o email
            {' '}
            <Box fontWeight={700} display="inline">
              “
              {userEmail}
              ”
            </Box>
            . Aguarde o recebimento do arquivo em sua caixa de entrada.
          </Typography>
        )}
      />
    </>
  );
};

RelatorioFidcButtons.propTypes = {
  action: PropTypes.func,
  clear: PropTypes.func,
  loading: PropTypes.bool,
  userEmail: PropTypes.string.isRequired,
};

RelatorioFidcButtons.defaultProps = {
  action: () => {},
  clear: () => {},
  loading: false,
};

export default RelatorioFidcButtons;
