import React from 'react';
import PropTypes from 'prop-types';
import DataGrid from 'common/layout/dataGrid/dataGrid';
import { Mixpanel, trackedProperties } from 'modules';
import {
  formatDate,
} from 'utils/format';

const HistoricoList = ({
  historicos,
  isLoading,
  isError,
  openModalEmail,
}) => {
  const columns = [
    {
      field: 'assunto',
      headerName: 'Assunto',
      editable: false,
      sortable: false,
      flex: 1,
      minWidth: 500,
      align: 'left',
    },
    {
      field: 'dataEnvio',
      headerName: 'Data de Envio',
      editable: false,
      sortable: false,
      flex: 0.3,
      minWidth: 105,
      align: 'left',
      renderCell: (param) => formatDate(param.row?.dataEnvio, 'DD/MM/YYYY HH:mm'),
    },
  ];

  return (
    <DataGrid
      error={isError}
      loading={isLoading}
      columns={columns}
      rows={historicos}
      getRowId={(row) => row.id}
      overlay={{
        emptyMessage: 'Nenhum histórico foi encontrado.',
        errorMessage: 'Ocorreu um erro ao carregar o histórico.',
      }}
      hideFooterPagination
      hideFooter
      onRowClick={(param) => {
        Mixpanel.trackButtonClick('Detalhe histórico', trackedProperties.gruposPage);
        openModalEmail(param.row?.id);
      }}
      selectionModel={[]}
      cellPadding={100}
    />
  );
};

HistoricoList.propTypes = {
  historicos: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  openModalEmail: PropTypes.func,
};

HistoricoList.defaultProps = {
  historicos: null,
  isLoading: false,
  isError: false,
  openModalEmail: () => [],
};

export default HistoricoList;
