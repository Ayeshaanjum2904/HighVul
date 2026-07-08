import React from 'react';
import { Box, Typography } from '@mui/material';
import DataGrid from 'common/layout/dataGrid/dataGrid';
import PropTypes from 'prop-types';
import { formatDate } from 'utils/format';
import colors from 'assets/styles/colors';
import ProdutoBadge from 'common/views/logoProduto';
import TooltipMessage from 'common/controls/tooltipMessage';
import OrdemActions from '../ordemActions';

const OrdensList = ({
  isLoading, data, error, setSortingOrder, field, sort,
}) => {
  const columns = [
    {
      field: 'id',
      headerName: 'Id',
      editable: false,
      sortable: false,
      flex: 0.4,
      minWidth: 30,
      align: 'left',
      renderCell: (param) => (
        <Typography sx={{ fontSize: '14px', color: colors.primary_color_500 }}>
          {`#${param.row?.id}`}
        </Typography>
      ),
    },
    {
      field: 'data_reversao',
      headerName: 'Prazo de Reversão',
      editable: false,
      sortable: true,
      flex: 0.9,
      minWidth: 160,
      align: 'left',
      renderCell: (param) => (formatDate(param.row?.prazoReversao, 'DD/MM/YYYY')),
    },
    {
      field: 'produto',
      headerName: 'Produto',
      editable: false,
      sortable: false,
      flex: 0.8,
      minWidth: 120,
      align: 'left',
      renderCell: (param) => (
        <ProdutoBadge produto={param.row.produto} />
      ),
    },
    {
      field: 'status',
      headerName: 'Status',
      editable: false,
      sortable: false,
      flex: 1.5,
      minWidth: 200,
      align: 'left',
      renderCell: (param) => (
        <TooltipMessage
          maxWidth={200}
          title={param.row.status}
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
            {(param.row.status)}
          </Typography>
        </TooltipMessage>
      ),
    },
    {
      field: 'data_criacao',
      headerName: 'Data de Criação',
      editable: false,
      sortable: true,
      flex: 0.8,
      minWidth: 140,
      align: 'left',
      renderCell: (param) => (formatDate(param.row?.dataCriacao, 'DD/MM/YYYY')),
    },
    {
      field: 'menu',
      headerName: 'Ações',
      editable: false,
      sortable: false,
      flex: 0.5,
      minWidth: 30,
      align: 'left',
      renderCell: (params) => (
        <OrdemActions
          ordem={params.row}
          disabled={isLoading}
        />
      ),
    },
  ];

  return (
    <Box height="100%">
      <DataGrid
        error={error}
        loading={isLoading}
        columns={columns}
        rows={data}
        hideFooterPagination
        hideFooter
        disableRowSelectionOnClick
        disableSelectionOnClick
        isRowSelectable={false}
        onSort={(nome, ordem) => setSortingOrder(nome, ordem)}
        sortModel={[{ field, sort }]}
        overlay={{
          emptyMessage: 'Nenhum resultado encontrado.',
          errorMessage: 'Erro ao exibir ordens.\nPor favor, tente novamente mais tarde.',
        }}
      />
    </Box>
  );
};

OrdensList.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array,
  error: PropTypes.bool,
  setSortingOrder: PropTypes.func,
  field: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};

OrdensList.defaultProps = {
  isLoading: false,
  data: [],
  error: false,
  setSortingOrder: () => { },
};

export default OrdensList;
