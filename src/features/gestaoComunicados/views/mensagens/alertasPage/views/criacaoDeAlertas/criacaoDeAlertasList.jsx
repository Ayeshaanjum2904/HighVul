import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { formatDate } from 'utils/format';
import { Edit, Delete } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@mui/material';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';
import DataGrid from 'common/layout/dataGrid/dataGrid';
import AlertModal from 'common/layout/alertModal';
import colors from 'assets/styles/colors';

const useStyles = makeStyles(() => ({
  button: {
    marginTop: '10px',
  },
}));

const CriacaoDeAlertasList = ({
  alertas, setAlertaId, getAlerta, deleteAlerta, isLoading, isError,
  setSortingOrder, ipp, page, totalItems, setIpp, setPage,
  field, sort,
}) => {
  const classes = useStyles();

  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleOpenDeleteModal = (id) => {
    setOpenDeleteModal(true);
    setAlertaId(id);
  };

  const dataFormat = (row) => (
    formatDate(row, 'DD/MM/YYYY')
  );

  const renderBrand = (row) => (
    (row || []).map((b) => b.concat(', ')).join('').slice(0, -2)
  );

  const columns = [
    {
      field: 'id',
      headerName: 'Id',
      editable: false,
      sortable: true,
      flex: 0.2,
      minWidth: 60,
      align: 'left',
      renderCell: (param) => (
        <Typography sx={{ fontSize: '14px', color: colors.primary_color_500 }}>
          {`#${param.row?.id}`}
        </Typography>
      ),
    },
    {
      field: 'dataCriacao',
      headerName: 'Data da criação',
      editable: false,
      sortable: true,
      flex: 1,
      minWidth: 118,
      align: 'left',
      renderCell: (param) => dataFormat(param.row?.dataCriacao),
    },
    {
      field: 'titulo',
      headerName: 'Título',
      editable: false,
      sortable: true,
      flex: 1,
      minWidth: 180,
      align: 'left',
    },
    {
      field: 'periodo',
      headerName: 'Período',
      editable: false,
      sortable: true,
      flex: 1,
      minWidth: 158,
      align: 'left',
      renderCell: (param) => `${dataFormat(param.row?.startDate)} - ${dataFormat(param.row?.endDate)}`,
    },
    {
      field: 'brand',
      headerName: 'Brand',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 60,
      align: 'left',
      renderCell: (param) => (
        <Typography
          title={renderBrand(param.row?.brands)}
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontSize: '14px',
          }}
        >
          {renderBrand(param.row?.brands)}
        </Typography>
      ),
    },
    {
      field: 'status',
      headerName: 'Status',
      editable: false,
      sortable: true,
      flex: 1,
      minWidth: 70,
      align: 'left',
    },
    {
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 52,
      align: 'left',
      type: 'action',
      renderCell: (param) => (
        <Box className={classes.buttonContainer}>
          <IconButtonTooltip
            className={classes.button}
            tooltip="Editar"
            onClick={() => getAlerta(param.row?.id)}
          >
            <Edit className={classes.icon} />
          </IconButtonTooltip>
          <IconButtonTooltip
            className={classes.button}
            tooltip="Excluir"
            onClick={handleOpenDeleteModal}
          >
            <Delete className={classes.icon} />
          </IconButtonTooltip>
        </Box>
      ),
    },
  ];

  return (
    <Box minWidth="1020px" height="100%">
      <DataGrid
        dataCy="CriacaoAlertaGrid"
        error={isError}
        loading={isLoading}
        columns={columns}
        rows={alertas}
        cellPadding={20}
        overlay={{
          emptyMessage: 'Nenhum resultado encontrado para sua pesquisa.',
          errorMessage: 'Ocorreu um erro ao carregar os alertas.',
        }}
        isRowSelectable={false}
        disableSelectionOnClick
        onSort={(nome, ordem) => setSortingOrder(nome, ordem)}
        footer={{
          ipp,
          page,
          totalItems,
          setIpp,
          setPageFetch: setPage,
        }}
        sortModel={[{ field, sort }]}
      />
      <AlertModal
        buttonAction={() => deleteAlerta()}
        title="Deseja excluir esse alerta?"
        subtitle="Ao clicar em excluir, esse alerta será apagado definitivamente do Staff."
        textRedButton="Excluir Alerta"
        openModal={openDeleteModal}
        setOpen={setOpenDeleteModal}
      />
    </Box>
  );
};
CriacaoDeAlertasList.propTypes = {
  alertas: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  setAlertaId: PropTypes.func,
  getAlerta: PropTypes.func,
  deleteAlerta: PropTypes.func,
  page: PropTypes.number,
  setSortingOrder: PropTypes.func,
  ipp: PropTypes.number,
  totalItems: PropTypes.number,
  setPage: PropTypes.func.isRequired,
  setIpp: PropTypes.func,
  field: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};

CriacaoDeAlertasList.defaultProps = {
  alertas: null,
  isLoading: false,
  isError: false,
  setAlertaId: () => {},
  getAlerta: () => {},
  deleteAlerta: () => {},
  setSortingOrder: () => {},
  page: null,
  ipp: null,
  totalItems: null,
  setIpp: () => {},
};

export default CriacaoDeAlertasList;
