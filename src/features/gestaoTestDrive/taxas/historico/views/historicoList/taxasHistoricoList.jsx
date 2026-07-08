import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { formatBrandName, formatDate } from 'utils/format';
import DataGrid from 'common/layout/dataGrid/dataGrid';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';
import TooltipMessage from 'common/controls/tooltipMessage';
import AlertModal from 'common/layout/alertModal';
import { Edit, Delete } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import { Box, Typography } from '@mui/material';
import colors from 'assets/styles/colors';
import CardModalEditarTaxa from '../cardModalEditarTaxa';

const useStyles = makeStyles(() => ({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    '&:focus': {
      color: colors.secundary_color_800,
    },
  },
  icon: {
    fontSize: '20px',
  },
}));

const formatedTaxa = (taxa, praticada) => {
  if (taxa) {
    return `${taxa.toString().replace('.', ',')}% ${praticada}`;
  }
  return null;
};

const rowFormat = (hasTitle, title, dataName, dataTaxa) => {
  const renderValue = () => (
    <Box sx={{ fontWeight: '450' }}>
      <Typography sx={{ fontSize: '14px' }}>
        {dataName
          ? formatedTaxa(dataName, dataTaxa)
          : 'Não possui'}
      </Typography>
    </Box>
  );
  return (
    hasTitle
      ? (
        <div>
          <Box sx={{
            fontSize: '12px',
            fontWeight: '450',
          }}
          >
            {title}
          </Box>
          {renderValue()}
        </div>
      )
      : renderValue()
  );
};

const TaxasHistoricoList = ({
  isError, isLoading, data, deleteTaxa, setTaxaOpen, onSubmit, page, ipp, setPage,
  setIpp, totalItems,
}) => {
  const classes = useStyles();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [idTaxa, setIdTaxa] = useState(0);
  const [openEditarModal, setOpenEditarModal] = useState(false);
  const currentDate = moment();
  const diasDesdeInsercao = (value) => currentDate.diff(moment(value), 'days');

  const handleOpenEditarModal = (row) => {
    setOpenEditarModal(true);
    setTaxaOpen(row);
  };

  const handleOpenDeleteModal = (id) => {
    setIdTaxa(id);
    setOpenDeleteModal(true);
  };

  const periodoVigencia = (row) => (
    `${formatDate(row.inicioVigencia, 'DD/MM/YYYY')} à ${formatDate(row.fimVigencia, 'DD/MM/YYYY')}`
  );

  const columns = [
    {
      field: 'novos',
      headerName: 'Novos',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 80,
      align: 'left',
      renderCell: (param) => rowFormat(true, 'Floor Plan', param.row.novoFloorPlan, param.row.novoFloorPlanPraticada),
    },
    {
      field: 'novos_second_column',
      renderHeader: () => null,
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 80,
      align: 'left',
      renderCell: (param) => rowFormat(true, 'Fundo', param.row.novoFundao, param.row.novoFundaoPraticada),
    },
    {
      field: 'usados',
      headerName: 'Usados',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 80,
      align: 'left',
      renderCell: (param) => rowFormat(true, 'Floor Plan', param.row.usadosFloorPlan, param.row.usadosFloorPlanPraticada),
    },
    {
      field: 'usados_second_column',
      renderHeader: () => null,
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 80,
      align: 'left',
      renderCell: (param) => rowFormat(true, 'Fundo', param.row.usadosFundao, param.row.usadosFundaoPraticada),
    },
    {
      field: 'pecas',
      headerName: 'Peças',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 80,
      align: 'left',
      renderCell: (param) => rowFormat(false, null, param.row.pecas, param.row.pecasPraticada),
    },
    {
      field: 'id. visual',
      headerName: 'Id. Visual',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 80,
      align: 'left',
      renderCell: (param) => rowFormat(
        false,
        null,
        param.row.identidadeVisual,
        param.row.identidadeVisualPraticada,
      ),
    },
    {
      field: 'test drive',
      headerName: 'Test Drive',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 80,
      align: 'left',
      renderCell: (param) => rowFormat(
        true,
        formatBrandName(param.row.brand),
        param.row.testDrive,
        param.row.testDrivePraticada,
      ),
    },
    {
      field: 'vigencia',
      headerName: 'Vigência',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 89,
      align: 'left',
      renderCell: (param) => (
        <TooltipMessage
          title={periodoVigencia(param.row)}
          placement="bottom-start"
        >
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              fontSize: '14px',
            }}
          >
            {periodoVigencia(param.row)}
          </Typography>
        </TooltipMessage>
      ),
    },
    {
      field: 'acoes',
      headerName: 'Ações',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 35,
      align: 'left',
      type: 'action',
      renderCell: (param) => (diasDesdeInsercao(param.row?.criadoEm) <= 30 ? (
        <Box className={classes.buttonContainer}>
          <IconButtonTooltip
            className={classes.button}
            tooltip="Editar"
            onClick={() => handleOpenEditarModal(param.row)}
          >
            <Edit className={classes.icon} />
          </IconButtonTooltip>
          <IconButtonTooltip
            className={classes.button}
            tooltip="Excluir"
            onClick={() => handleOpenDeleteModal(param.row.id)}
          >
            <Delete className={classes.icon} />
          </IconButtonTooltip>
        </Box>
      ) : null),
    },
  ];

  return (
    <Box minWidth="1020px" height="100%">
      <DataGrid
        error={isError}
        loading={isLoading}
        columns={columns}
        rows={data}
        dataCy="historico_taxas"
        overlay={{
          emptyMessage: 'Nenhuma taxa foi encontrada.',
          errorMessage: 'Ocorreu um erro ao carregar as taxas.',
        }}
        isRowSelectable={false}
        disableSelectionOnClick
        cellPadding={16}
        footer={{
          ipp,
          page,
          totalItems,
          setIpp,
          setPageFetch: setPage,
        }}
      />
      <AlertModal
        buttonAction={() => deleteTaxa(idTaxa)}
        title="Deseja excluir essa taxa?"
        subtitle="Ao clicar em excluir, essa taxa será apagada definitivamente do Staff."
        textRedButton="Excluir"
        openModal={openDeleteModal}
        setOpen={setOpenDeleteModal}
        widthButton="91px"
      />
      <CardModalEditarTaxa
        setOpenEditarModal={setOpenEditarModal}
        openEditarModal={openEditarModal}
        onSubmit={onSubmit}
      />
    </Box>
  );
};

TaxasHistoricoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  deleteTaxa: PropTypes.func,
  setTaxaOpen: PropTypes.func,
  onSubmit: PropTypes.func,
  page: PropTypes.number,
  ipp: PropTypes.number,
  totalItems: PropTypes.number,
  setPage: PropTypes.func.isRequired,
  setIpp: PropTypes.func,
};

TaxasHistoricoList.defaultProps = {
  data: [],
  isLoading: false,
  isError: false,
  deleteTaxa: () => { },
  setTaxaOpen: () => { },
  onSubmit: () => { },
  page: null,
  ipp: null,
  totalItems: null,
  setIpp: () => { },
};

export default TaxasHistoricoList;
