import React from 'react';
import PropTypes from 'prop-types';
import { columnLeft } from 'common/layout/dataGrid/columns';
import { camelFormat } from 'utils/format';
import { Mixpanel, trackedProperties } from 'modules';
import { Modal } from 'features/gestaoCobrancas/redux/enums';
import DataGrid from 'common/layout/dataGrid/dataGrid';
import { Box } from '@mui/material';

const GerentesList = ({
  gerentes, isLoading, isError, openModal,
}) => {
  const columns = [
    columnLeft({
      field: 'regional',
      headerName: 'Regional',
      minWidth: 100,
      flex: 1,
      valueGetter: (params) => params.row.regional.regional,
      valueFormatter: (column) => camelFormat(column.value, 2),
    }),
    columnLeft({
      field: 'brand',
      headerName: 'Brand',
      minWidth: 60,
      flex: 1,
      valueGetter: (params) => params.row.marca.marca,
    }),
    columnLeft({
      field: 'associacoes',
      headerName: 'Gerentes Associados',
      minWidth: 210,
    }),
  ];

  return (
    <Box minWidth="1000px" height="100%">
      <DataGrid
        error={isError}
        loading={isLoading}
        columns={columns}
        rows={gerentes}
        getRowId={(row) => `${row.regional.regional}_${row.marca.marca}`}
        onRowClick={(params) => {
          Mixpanel.trackButtonClick('Editar gerentes', trackedProperties.gerentesPage);
          openModal(Modal.updateGerente, params.row.regional.id, params.row.marca.id);
        }}
        disableSelectionOnClick
        overlay={{
          emptyMessage: 'Nenhum gerente encontrado.',
          errorMessage: 'Ocorreu um erro ao carregar os gerentes.',
        }}
        footer={false}
      />
    </Box>
  );
};

GerentesList.propTypes = {
  gerentes: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  openModal: PropTypes.func,
};

GerentesList.defaultProps = {
  gerentes: null,
  isLoading: false,
  isError: false,
  openModal: () => {},
};

export default GerentesList;
