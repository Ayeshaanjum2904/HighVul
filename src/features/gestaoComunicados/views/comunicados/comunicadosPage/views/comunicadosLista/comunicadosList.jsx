import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DataGrid from 'common/layout/dataGrid/dataGrid';
import { formatDate } from 'utils/format';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';
import AlertModal from 'common/layout/alertModal';
import TooltipMessage from 'common/controls/tooltipMessage';
import { Box, Typography } from '@mui/material';

const ComunicadosList = ({
  comunicados,
  isLoading,
  isError,
  setComunicadoId,
  deleteComunicado,
  setSortingOrder,
  field,
  sort,
}) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleOpenDeleteModal = (param) => {
    setOpenDeleteModal(true);
    setComunicadoId(param.idDocumento);
  };
  const renderDeleteIcon = () => (
    <IconButtonTooltip tooltip="Excluir" onClick={handleOpenDeleteModal}>
      <DeleteIcon />
    </IconButtonTooltip>
  );

  const columns = [
    {
      field: 'fileName',
      headerName: 'Título do Documento',
      editable: false,
      sortable: true,
      flex: 1,
      minWidth: 400,
      align: 'left',
      renderCell: (param) => (
        <TooltipMessage
          title={param.value}
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
            {(param.value)}
          </Typography>
        </TooltipMessage>
      ),
    },
    {
      field: 'dataEmissao',
      headerName: 'Data da divulgação',
      editable: false,
      sortable: true,
      flex: 1,
      minWidth: 140,
      align: 'left',
      valueFormatter: (param) => formatDate(param?.value, 'DD/MM/YYYY'),
    },
    {
      field: 'descricaoTipo',
      headerName: 'Brand',
      editable: false,
      sortable: true,
      flex: 1,
      minWidth: 110,
      align: 'left',
    },
    {
      field: 'excluir',
      headerName: '',
      flex: 0.6,
      minWidth: 20,
      type: 'actions',
      renderCell: (param) => renderDeleteIcon(param.row),
    },
  ];

  return (
    <Box minWidth="1000px" height="100%">
      <DataGrid
        footer={false}
        error={isError}
        loading={isLoading}
        columns={columns}
        getRowId={(row) => row.idDocumento}
        rows={comunicados}
        disableSelectionOnClick
        isRowSelectable={false}
        onSort={(nome, ordem) => setSortingOrder(nome, ordem)}
        overlay={{
          emptyMessage: 'Nenhum resultado encontrado para sua pesquisa.',
          errorMessage: 'Ocorreu um erro ao carregar os comunicados.',
        }}
        sortModel={[{ field, sort }]}
      />
      <AlertModal
        buttonAction={() => deleteComunicado()}
        title="Deseja excluir esse comunicado?"
        subtitle="Ao clicar em excluir, esse comunicado será apagado definitivamente e não poderá mais ser visualizado."
        textRedButton="Excluir"
        openModal={openDeleteModal}
        setOpen={setOpenDeleteModal}
      />
    </Box>
  );
};

ComunicadosList.propTypes = {
  comunicados: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  setComunicadoId: PropTypes.func,
  deleteComunicado: PropTypes.func,
  setSortingOrder: PropTypes.func,
  field: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};

ComunicadosList.defaultProps = {
  comunicados: [],
  isLoading: false,
  isError: false,
  setComunicadoId: () => {},
  deleteComunicado: () => {},
  setSortingOrder: () => {},
};

export default ComunicadosList;
