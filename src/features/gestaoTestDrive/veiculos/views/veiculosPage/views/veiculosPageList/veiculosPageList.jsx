import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import colors from 'assets/styles/colors';
import {
  camelFormat, capitalize, formatDescVeiculo, formatMvsa,
} from 'utils/format';
import DataGrid from 'common/layout/dataGrid/dataGrid';
import MarcaBadge from 'common/views/logoMarca';

import './veiculosPageList.scss';

const VeiculosPageList = ({
  veiculos, isLoading, isError, ipp, page, totalItems, setIpp, setPage,
  openDetalheVeiculo, isModalOpen, setSortingOrder, field, sort,
}) => {
  const renderVeiculos = (params) => (
    <div className="veiculos__list-row__veiculo">
      <div className="veiculos__list-row__veiculo__badge">
        <MarcaBadge marca={params.row.marca} />
      </div>
      <div className="veiculos__list-row__texto">
        <div
          className="veiculos__list-row__item veiculos__list-row__veiculo__subtitle"
          data-cy="veiculo__subtitle"
        >
          {camelFormat(params.row.descricaoModelo)}
        </div>
        <div
          className="veiculos__list-row__veiculo__title"
          data-cy="veiculo__title"
        >
          {formatDescVeiculo(params.row.descricaoSerie)}
        </div>
      </div>
    </div>
  );

  const [selectedRows, setSelectedRows] = useState([]);

  const columns = [
    {
      field: 'id',
      headerName: 'Id',
      editable: false,
      sortable: true,
      flex: 0.4,
      minWidth: 40,
      align: 'left',
      renderCell: (param) => (
        <Typography sx={{ fontSize: '14px', color: colors.primary_color_500 }}>
          {`#${param.row?.id}`}
        </Typography>
      ),
    },
    {
      field: 'veiculo',
      headerName: 'Veículo',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 263,
      align: 'left',
      renderCell: renderVeiculos,
    },
    {
      field: 'mvsa',
      headerName: 'MVSA',
      editable: false,
      sortable: false,
      flex: 0.4,
      minWidth: 120,
      align: 'left',
      valueGetter: (params) => params.row,
      valueFormatter: (row) => formatMvsa(
        row.value.codigoModelo,
        row.value.codigoVersao,
        row.value.codigoSerie,
        row.value.allestimento,
      ),
    },
    {
      field: 'nomeComercial',
      headerName: 'Nome Comercial',
      editable: false,
      sortable: true,
      flex: 1,
      minWidth: 308,
      align: 'left',
      valueGetter: (params) => params.row,
      valueFormatter: (row) => capitalize(formatDescVeiculo(row.value.nomeComercial)),
    },
    {
      field: 'status',
      headerName: 'Status',
      editable: false,
      sortable: true,
      flex: 1,
      minWidth: 260,
      align: 'left',
      valueGetter: (params) => params.row,
      valueFormatter: (row) => row.value.status,
    },
  ];

  return (
    <DataGrid
      error={isError}
      loading={isLoading}
      columns={columns}
      rows={veiculos}
      onRowClick={(params) => openDetalheVeiculo(params.id)}
      onSort={(nome, ordem) => setSortingOrder(nome, ordem)}
      sortModel={[{ field, sort }]}
      dataCy="veiculo_table"
      sx={{ '.MuiDataGrid-virtualScroller': { overflowX: 'hidden' } }}
      overlay={{
        emptyMessage: 'Nenhum veículo foi encontrado.',
        errorMessage: 'Ocorreu um erro ao carregar os veículos.',
      }}
      onSelectionModelChange={
        (selectionModel) => setSelectedRows(selectionModel)
      }
      selectionModel={isModalOpen ? selectedRows : []}
      footer={{
        ipp,
        page,
        totalItems,
        setIpp,
        setPageFetch: setPage,
      }}
    />
  );
};

VeiculosPageList.propTypes = {
  veiculos: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  page: PropTypes.number,
  ipp: PropTypes.number,
  totalItems: PropTypes.number,
  setPage: PropTypes.func.isRequired,
  setIpp: PropTypes.func,
  openDetalheVeiculo: PropTypes.func,
  isModalOpen: PropTypes.bool,
  setSortingOrder: PropTypes.func,
  field: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};

VeiculosPageList.defaultProps = {
  veiculos: null,
  isLoading: false,
  isError: false,
  page: null,
  ipp: null,
  totalItems: null,
  isModalOpen: false,
  setIpp: () => {},
  openDetalheVeiculo: () => {},
  setSortingOrder: () => {},
};

export default VeiculosPageList;
