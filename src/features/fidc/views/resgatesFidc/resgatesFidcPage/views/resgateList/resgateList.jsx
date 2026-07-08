import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from 'utils/format';
import DataGrid from 'common/layout/dataGrid/dataGrid';
import { Box, Typography } from '@mui/material';
import TooltipMessage from 'common/controls/tooltipMessage';
import { getStatus } from './helper';

const ResgateList = ({
  loading, data, error, setModal,
}) => {
  const periodoVigencia = (row) => (
    `${formatDate(row.dataInicioVigencia, 'DD/MM/YYYY')} - ${formatDate(row.dataFimVigencia, 'DD/MM/YYYY')}`
  );
  const columns = [
    {
      field: 'id',
      headerName: 'Id',
      editable: false,
      sortable: false,
      flex: 0.5,
      minWidth: 36,
      align: 'left',
      renderCell: (param) => (
        <TooltipMessage
          title={param.row.id}
          placement="bottom-start"
        >
          <Typography sx={{ fontSize: '14px', color: '#304AAF' }}>
            {`#${param.row.id}`}
          </Typography>
        </TooltipMessage>
      ),
    },
    {
      field: 'dataDeCriacao',
      headerName: 'Data de criação',
      editable: false,
      sortable: false,
      flex: 0.7,
      minWidth: 120,
      align: 'left',
      renderCell: (param) => (
        <TooltipMessage
          title={formatDate(param?.value, 'DD/MM/YYYY')}
          placement="bottom-start"
        >
          {formatDate(param?.value, 'DD/MM/YYYY')}
        </TooltipMessage>
      ),
    },
    {
      field: 'titulo',
      headerName: 'Título',
      editable: false,
      sortable: false,
      flex: 1.7,
      minWidth: 280,
      align: 'left',
      renderCell: (param) => (
        <TooltipMessage
          title={param.row.titulo}
          maxWidth="435px"
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
            {param.row.titulo}
          </Typography>
        </TooltipMessage>
      ),
    },
    {
      field: 'brand',
      headerName: 'Brand',
      editable: false,
      sortable: false,
      flex: 0.8,
      minWidth: 110,
      align: 'left',
      renderCell: (param) => (
        <TooltipMessage
          title={param.row.brand}
          placement="bottom-start"
        >
          <Typography
            sx={{
              whiteSpace: 'nowrap',
              fontSize: '14px',
            }}
          >
            {param.row.brand}
          </Typography>
        </TooltipMessage>
      ),
    },
    {
      field: 'vigencia',
      headerName: 'Vigência',
      editable: false,
      sortable: false,
      flex: 1.1,
      minWidth: 180,
      align: 'left',
      renderCell: (param) => (
        <TooltipMessage
          title={periodoVigencia(param.row)}
          placement="bottom-start"
        >
          {periodoVigencia(param.row)}
        </TooltipMessage>
      ),
    },
    {
      field: 'status',
      headerName: 'Status',
      editable: false,
      sortable: false,
      flex: 0.8,
      minWidth: 110,
      align: 'left',
      renderCell: (param) => (
        <TooltipMessage
          title={getStatus(param.row.status)}
          placement="bottom-start"
        >
          {getStatus(param.row.status)}
        </TooltipMessage>
      ),
    },
  ];

  return (
    <Box minWidth="1020px" height="100%">
      <DataGrid
        error={error}
        loading={loading}
        footer={false}
        columns={columns}
        rows={data}
        onRowClick={(param) => {
          setModal(true, param.row);
        }}
        disableSelectionOnClick
        overlay={{
          emptyMessage: 'Não existem resgates disponíveis.',
          errorMessage: 'Resgate está indisponível no momento.\nPor favor, tente novamente mais tarde.',
        }}
      />
    </Box>
  );
};

ResgateList.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.array,
  error: PropTypes.bool,
  setModal: PropTypes.func,
};

ResgateList.defaultProps = {
  loading: false,
  data: [],
  error: false,
  setModal: () => {},
};

export default ResgateList;
