import React from 'react';
import PropTypes from 'prop-types';

import DataGrid from 'common/layout/dataGrid/dataGrid';
import { columnLeft } from 'common/layout/dataGrid/columns';
import { Modal } from 'features/gestaoCobrancas/redux/enums';
import { Mixpanel, trackedProperties } from 'modules';

import './analistasList.scss';
import { camelFormat } from 'utils/format';

const AnalistasList = ({
  analistas, isLoading, isError, openModal, page, ipp, totalItems, setPage, setIpp,
}) => {
  const columns = [
    columnLeft({
      field: 'regional',
      headerName: 'Regional',
      minWidth: 98,
      flex: 0.6,
      valueGetter: (params) => params.row.regional.regional,
      valueFormatter: (column) => camelFormat(column.value, 2),
    }),
    columnLeft({
      field: 'brand',
      headerName: 'Brand',
      minWidth: 74,
      flex: 0.5,
      valueGetter: (params) => params.row.marca.marca,
    }),
    columnLeft({
      field: 'associacoes',
      headerName: 'Analistas Associados',
      minWidth: 600,
    }),
  ];

  return (
    <DataGrid
      error={isError}
      loading={isLoading}
      columns={columns}
      rows={analistas}
      getRowId={(row) => `${row.regional.regional}_${row.marca.marca}`}
      onRowClick={(params) => {
        Mixpanel.trackButtonClick('Editar analistas', trackedProperties.analistasPage);
        openModal(Modal.updateAnalista, params.row.regional.id, params.row.marca.id);
      }}
      disableSelectionOnClick
      overlay={{
        emptyMessage: 'Nenhum analista encontrado.',
        errorMessage: 'Ocorreu um erro ao carregar os analistas.',
      }}
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

AnalistasList.propTypes = {
  analistas: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  openModal: PropTypes.func,
  page: PropTypes.number,
  ipp: PropTypes.number,
  totalItems: PropTypes.number,
  setPage: PropTypes.func,
  setIpp: PropTypes.func,
};

AnalistasList.defaultProps = {
  analistas: null,
  isLoading: false,
  isError: false,
  openModal: () => {},
  page: null,
  ipp: null,
  totalItems: null,
  setPage: () => {},
  setIpp: () => {},
};

export default AnalistasList;
